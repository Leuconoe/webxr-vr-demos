import * as THREE from 'three';

const JOINT_RADIUS = 0.002;
const PINCH_RADIUS = 0.006;
const PINCH_THRESHOLD = 0.02;
const DEBUG_XR = new URLSearchParams(window.location.search).has('debug');

export class HandInput {
  constructor(renderer, scene) {
    this.renderer = renderer;
    this.scene = scene;

    // Joint visual markers (invisible by default, but handy for debugging)
    const jointGeo = new THREE.SphereGeometry(JOINT_RADIUS, 16, 16);
    const jointMat = new THREE.MeshBasicMaterial({
      color: 0xff0000,
      opacity: 0,
      transparent: true
    });

    this.lThumbObj = new THREE.Mesh(jointGeo, jointMat.clone());
    this.lIndexObj = new THREE.Mesh(jointGeo, jointMat.clone());
    this.rThumbObj = new THREE.Mesh(jointGeo, jointMat.clone());
    this.rIndexObj = new THREE.Mesh(jointGeo, jointMat.clone());

    scene.add(this.lThumbObj, this.lIndexObj, this.rThumbObj, this.rIndexObj);

    // Pinch spheres (kept for internal position, but always hidden)
    const pinchGeo = new THREE.SphereGeometry(PINCH_RADIUS, 16, 16);
    const lMat = new THREE.MeshLambertMaterial({ color: 0xffffff });
    const rMat = new THREE.MeshLambertMaterial({ color: 0x00ff00 });

    this.lPinchSphere = new THREE.Mesh(pinchGeo, lMat);
    this.rPinchSphere = new THREE.Mesh(pinchGeo, rMat);
    scene.add(this.lPinchSphere, this.rPinchSphere);

    // always hidden
    this.lPinchSphere.visible = false;
    this.rPinchSphere.visible = false;

    // WebXR hand objects (no built-in meshes, just joint data)
    this.hand1 = renderer.xr.getHand(0); // usually left
    this.hand2 = renderer.xr.getHand(1); // usually right
    scene.add(this.hand1);
    scene.add(this.hand2);

    this.controller1 = renderer.xr.getController(0);
    this.controller2 = renderer.xr.getController(1);
    this.controller1Selecting = false;
    this.controller2Selecting = false;
    this.hand1Tracked = false;
    this.hand2Tracked = false;
    this._setupController(this.controller1, 'controller 0', value => {
      this.controller1Selecting = value;
    });
    this._setupController(this.controller2, 'controller 1', value => {
      this.controller2Selecting = value;
    });
    scene.add(this.controller1, this.controller2);

    renderer.xr.addEventListener('sessionstart', () => {
      const session = renderer.xr.getSession();
      this._debugLog('xr sessionstart', {
        inputSources: session ? Array.from(session.inputSources).map(this._describeInputSource) : []
      });
    });

    renderer.xr.addEventListener('sessionend', () => {
      this.controller1Selecting = false;
      this.controller2Selecting = false;
      this._debugLog('xr sessionend');
    });

    // Pinch state
    this.lPinchOn = false;
    this.rPinchOn = false;

    // Rotation state
    this.leftHandRotationActive = false;
    this.rightHandRotationActive = false;
    this.lastLeftHandX = 0;
    this.lastRightHandX = 0;
    this.chairRotationSpeed = 5.0;

    // External callback for rotation
    this.onRotateChair = null;

    // temp vectors
    this._tmp = new THREE.Vector3();
    this._raycaster = new THREE.Raycaster();
    this._controllerDirection = new THREE.Vector3();
    this._controllerQuaternion = new THREE.Quaternion();
  }

  _setupController(controller, label, setSelecting) {
    controller.addEventListener('selectstart', () => {
      setSelecting(true);
      this._debugLog(`${label} selectstart`);
    });
    controller.addEventListener('selectend', () => {
      setSelecting(false);
      this._debugLog(`${label} selectend`);
    });
    controller.addEventListener('connected', event => {
      this._debugLog(`${label} connected`, this._describeInputSource(event.data));
    });
  }

  _describeInputSource(inputSource) {
    if (!inputSource) return null;
    return {
      handedness: inputSource.handedness || 'none',
      targetRayMode: inputSource.targetRayMode || 'unknown',
      hasHand: !!inputSource.hand,
      profiles: inputSource.profiles || []
    };
  }

  _debugLog(message, data = null) {
    if (!DEBUG_XR) return;
    if (data === null) {
      console.log(`[chair-vr] ${message}`);
    } else {
      console.log(`[chair-vr] ${message}`, data);
    }
  }

  _getAvailableHands() {
    const hands = [];
    if (this._hasTrackedPinchJoints(this.hand1)) hands.push(this.hand1);
    if (this._hasTrackedPinchJoints(this.hand2)) hands.push(this.hand2);
    return hands;
  }

  _isJointTracked(joint) {
    return !!joint &&
      Number.isFinite(joint.position?.x) &&
      Number.isFinite(joint.position?.y) &&
      Number.isFinite(joint.position?.z) &&
      joint.visible !== false;
  }

  _hasTrackedPinchJoints(hand) {
    return !!hand?.joints &&
      this._isJointTracked(hand.joints['thumb-tip']) &&
      this._isJointTracked(hand.joints['index-finger-tip']);
  }

  _getControllerHitPoint(controller, pointerTargets = []) {
    if (!controller) return null;

    controller.updateMatrixWorld(true);
    this._raycaster.ray.origin.setFromMatrixPosition(controller.matrixWorld);
    controller.getWorldQuaternion(this._controllerQuaternion);
    this._raycaster.ray.direction
      .set(0, 0, -1)
      .applyQuaternion(this._controllerQuaternion)
      .normalize();

    const targets = pointerTargets.filter(Boolean);
    if (!targets.length) return null;

    const hits = this._raycaster.intersectObjects(targets, true);
    return hits.length ? hits[0].point : null;
  }

  _updateFallbackPinch(controller, thumbObj, indexObj, pointerTargets = []) {
    if (!controller) return false;

    const hitPoint = this._getControllerHitPoint(controller, pointerTargets);
    if (hitPoint) {
      thumbObj.position.copy(hitPoint);
    } else {
      controller.updateMatrixWorld(true);
      controller.getWorldPosition(thumbObj.position);
    }

    indexObj.position.copy(thumbObj.position);
    return true;
  }

  getPointerPositions() {
    const points = [];
    if (this.hand1Tracked || this.controller1Selecting) points.push(this.lIndexObj.position);
    if (this.hand2Tracked || this.controller2Selecting) points.push(this.rIndexObj.position);
    return points;
  }

  /**
   * update should be called every frame
   * @param {number} delta
   * @param {object} opts
   *        opts.chairModel?: THREE.Object3D – used only for rotation callback
   */
  update(delta, opts = {}) {
    const { chairModel, pointerTargets = [] } = opts;
    const leftHand = this._hasTrackedPinchJoints(this.hand1) ? this.hand1 : null;
    const rightHand = this._hasTrackedPinchJoints(this.hand2) ? this.hand2 : null;
    const availableHands = [leftHand, rightHand].filter(Boolean);
    this.hand1Tracked = !!leftHand;
    this.hand2Tracked = !!rightHand;

    // ensure pinch spheres stay hidden every frame
    this.lPinchSphere.visible = false;
    this.rPinchSphere.visible = false;

    // --- Joint tracking: thumb/index markers ---

    if (leftHand && leftHand.joints) {
      const thumb = leftHand.joints['thumb-tip'];
      const index = leftHand.joints['index-finger-tip'];
      if (thumb) this.lThumbObj.position.copy(thumb.position);
      if (index) this.lIndexObj.position.copy(index.position);
    }

    if (rightHand && rightHand.joints) {
      const thumb = rightHand.joints['thumb-tip'];
      const index = rightHand.joints['index-finger-tip'];
      if (thumb) this.rThumbObj.position.copy(thumb.position);
      if (index) this.rIndexObj.position.copy(index.position);
    }

    // --- Pinch detection ---

    this.lPinchOn = false;
    this.rPinchOn = false;

    // Left hand pinch
    if (
      leftHand &&
      leftHand.joints &&
      leftHand.joints['thumb-tip'] &&
      leftHand.joints['index-finger-tip']
    ) {
      const thumb = leftHand.joints['thumb-tip'];
      const index = leftHand.joints['index-finger-tip'];
      const dist = index.position.distanceTo(thumb.position);

      if (dist < PINCH_THRESHOLD) {
        this.lPinchOn = true;
        // still track position for interaction logic, just don't show it
        this.lPinchSphere.position.copy(thumb.position);
      }
    } else if (this.controller1Selecting && this._updateFallbackPinch(this.controller1, this.lThumbObj, this.lIndexObj, pointerTargets)) {
      this.lPinchOn = true;
      this.lPinchSphere.position.copy(this.lThumbObj.position);
    }

    // Right hand pinch
    if (
      rightHand &&
      rightHand.joints &&
      rightHand.joints['thumb-tip'] &&
      rightHand.joints['index-finger-tip']
    ) {
      const thumb = rightHand.joints['thumb-tip'];
      const index = rightHand.joints['index-finger-tip'];
      const dist = index.position.distanceTo(thumb.position);

      if (dist < PINCH_THRESHOLD) {
        this.rPinchOn = true;
        // still track position for interaction logic, just don't show it
        this.rPinchSphere.position.copy(thumb.position);
      }
    } else if (this.controller2Selecting && this._updateFallbackPinch(this.controller2, this.rThumbObj, this.rIndexObj, pointerTargets)) {
      this.rPinchOn = true;
      this.rPinchSphere.position.copy(this.rThumbObj.position);
    }

    // --- Chair rotation from horizontal pinch movement ---

    if (chairModel && this.onRotateChair) {
      // Left hand rotation
      if (this.lPinchOn) {
        const x = this.lPinchSphere.position.x;
        if (!this.leftHandRotationActive) {
          this.leftHandRotationActive = true;
          this.lastLeftHandX = x;
        } else {
          const dx = x - this.lastLeftHandX;
          if (Math.abs(dx) > 0.001) {
            this.onRotateChair(dx * this.chairRotationSpeed);
          }
          this.lastLeftHandX = x;
        }
      } else {
        this.leftHandRotationActive = false;
      }

      // Right hand rotation (only if we actually have a second hand)
      if (
        (availableHands.length > 1 || this.controller2Selecting) &&
        this.rPinchOn &&
        (rightHand || this.controller2Selecting)
      ) {
        const x = this.rPinchSphere.position.x;
        if (!this.rightHandRotationActive) {
          this.rightHandRotationActive = true;
          this.lastRightHandX = x;
        } else {
          const dx = x - this.lastRightHandX;
          if (Math.abs(dx) > 0.001) {
            this.onRotateChair(dx * this.chairRotationSpeed);
          }
          this.lastRightHandX = x;
        }
      } else {
        this.rightHandRotationActive = false;
      }
    }
  }
}
