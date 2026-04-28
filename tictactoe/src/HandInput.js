import * as THREE from 'three';

export class HandInput {
  constructor(
    renderer,
    scene,
    { chairRotationSpeed = 4.0, maxUpDownRotation = Math.PI / 3 } = {}
  ) {
    this.renderer = renderer;
    this.scene = scene;
    this.chairRotationSpeed = chairRotationSpeed;
    this.maxUpDownRotation = maxUpDownRotation;

    // Callbacks
    this.onPlaceO = null;
    this.onRotate = null;
    this.onButtonHit = null;

    this.buttonPlane = null;

    // Hands
    this.leftHand = this.renderer.xr.getHand(0);
    this.rightHand = this.renderer.xr.getHand(1);
    this.scene.add(this.leftHand);
    this.scene.add(this.rightHand);

    // Internal pinch/rotation state
    this.leftRotationActive = false;
    this.rightRotationActive = false;
    this.lastLeftX = 0;
    this.lastLeftY = 0;
    this.lastRightX = 0;
    this.lastRightY = 0;
    this.PINCH_START = 0.022;
    this.PINCH_END = 0.035;

    this._initJointRefs();
  }

  // -----------------------------------
  // Setup tiny joint proxies
  // -----------------------------------
  _initJointRefs() {
    const sphereGeo = new THREE.SphereGeometry(0.002, 32, 32);
    const mat = new THREE.MeshBasicMaterial({
      color: 0xff0000,
      opacity: 0,
      transparent: true
    });

    this.lThumbObj = new THREE.Mesh(sphereGeo, mat);
    this.lIndexObj = new THREE.Mesh(sphereGeo, mat.clone());
    this.rThumbObj = new THREE.Mesh(sphereGeo, mat.clone());
    this.rIndexObj = new THREE.Mesh(sphereGeo, mat.clone());

    this.scene.add(
      this.lThumbObj,
      this.lIndexObj,
      this.rThumbObj,
      this.rIndexObj
    );
  }

  // -----------------------------------
  // Wiring API
  // -----------------------------------
  setButtonPlane(plane) {
    this.buttonPlane = plane;
  }

  setPlaceOCallback(cb) {
    this.onPlaceO = cb;
  }

  setRotateCallback(cb) {
    this.onRotate = cb;
  }

  setButtonHitCallback(cb) {
    this.onButtonHit = cb;
  }

  // -----------------------------------
  // Per-frame update
  // -----------------------------------
  update() {
    this._updateHands();
    this._processPinches();
    this._processButtonHit();
  }

  // -----------------------------------
  // Hand joint tracking
  // -----------------------------------
  _updateHands() {
    const lh = this.leftHand;
    const rh = this.rightHand;

    const lThumb = lh?.joints?.['thumb-tip'];
    const lIndex = lh?.joints?.['index-finger-tip'];
    const rThumb = rh?.joints?.['thumb-tip'];
    const rIndex = rh?.joints?.['index-finger-tip'];

    if (this._isJointTracked(lThumb)) {
      this.lThumbObj.position.copy(lThumb.position);
    }
    if (this._isJointTracked(lIndex)) {
      this.lIndexObj.position.copy(lIndex.position);
    }
    if (this._isJointTracked(rThumb)) {
      this.rThumbObj.position.copy(rThumb.position);
    }
    if (this._isJointTracked(rIndex)) {
      this.rIndexObj.position.copy(rIndex.position);
    }
  }

  _isJointTracked(joint) {
    return !!joint &&
      Number.isFinite(joint.position?.x) &&
      Number.isFinite(joint.position?.y) &&
      Number.isFinite(joint.position?.z) &&
      joint.visible !== false;
  }

  _hasTrackedPinchJoints(hand) {
    return this._isJointTracked(hand?.joints?.['thumb-tip']) &&
      this._isJointTracked(hand?.joints?.['index-finger-tip']);
  }

  // -----------------------------------
  // Pinch → place O + rotate board
  // -----------------------------------
  _processPinches() {
    this._handleHandPinch('left', this.leftHand, this.lThumbObj, this.lIndexObj);
    this._handleHandPinch('right', this.rightHand, this.rThumbObj, this.rIndexObj);
  }

  _handleHandPinch(handName, hand, thumbObj, indexObj) {
    const tracked = this._hasTrackedPinchJoints(hand);
    const wasActive = handName === 'left' ? this.leftRotationActive : this.rightRotationActive;
    const dist = tracked ? thumbObj.position.distanceTo(indexObj.position) : Infinity;
    const isPinching = tracked &&
      (!wasActive ? dist < this.PINCH_START : dist < this.PINCH_END);

    if (isPinching) {
      if (handName === 'left') {
        if (!this.leftRotationActive) {
          // Pinch just started (left hand)
          this.leftRotationActive = true;
          this.lastLeftX = thumbObj.position.x;
          this.lastLeftY = thumbObj.position.y;

          // Fire place-O ONCE at pinch start
          this.onPlaceO?.({
            hand: handName,
            thumbWorldPos: thumbObj.position.clone()
          });
        } else {
          // Ongoing pinch → rotation deltas
          const dx = thumbObj.position.x - this.lastLeftX;
          const dy = thumbObj.position.y - this.lastLeftY;
          this._emitRotate(dx, dy);
          this.lastLeftX = thumbObj.position.x;
          this.lastLeftY = thumbObj.position.y;
        }
      } else {
        if (!this.rightRotationActive) {
          // Pinch just started (right hand)
          this.rightRotationActive = true;
          this.lastRightX = thumbObj.position.x;
          this.lastRightY = thumbObj.position.y;

          // Fire place-O ONCE at pinch start
          this.onPlaceO?.({
            hand: handName,
            thumbWorldPos: thumbObj.position.clone()
          });
        } else {
          // Ongoing pinch → rotation deltas
          const dx = thumbObj.position.x - this.lastRightX;
          const dy = thumbObj.position.y - this.lastRightY;
          this._emitRotate(dx, dy);
          this.lastRightX = thumbObj.position.x;
          this.lastRightY = thumbObj.position.y;
        }
      }
    } else {
      // Pinch ended
      if (handName === 'left') {
        this.leftRotationActive = false;
      } else {
        this.rightRotationActive = false;
      }
    }
  }

  _emitRotate(deltaX, deltaY) {
    if (Math.abs(deltaX) < 0.001 && Math.abs(deltaY) < 0.001) return;
    this.onRotate?.({
      deltaX,
      deltaY,
      speed: this.chairRotationSpeed,
      maxUpDownRotation: this.maxUpDownRotation
    });
  }

  // -----------------------------------
  // Button hit detection
  // -----------------------------------
  _processButtonHit() {
    if (!this.buttonPlane || !this.onButtonHit) return;

    const lh = this.leftHand;
    const rh = this.rightHand;

    const check = (hand) => {
      if (!this._isJointTracked(hand?.joints?.['index-finger-tip'])) return;
      const p = new THREE.Vector3().copy(
        hand.joints['index-finger-tip'].position
      );
      if (this._checkPlaneIntersection(p, this.buttonPlane)) {
        this.onButtonHit();
      }
    };

    check(lh);
    check(rh);
  }

  _checkPlaneIntersection(point, plane) {
    if (!plane.visible || plane.scale.x === 0) return false;

    const w = plane.geometry.parameters.width;
    const h = plane.geometry.parameters.height;
    const halfWidth = w * 0.5;
    const halfHeight = h * 0.5;

    const localPoint = point.clone();
    plane.worldToLocal(localPoint);

    return (
      localPoint.x >= -halfWidth &&
      localPoint.x <= halfWidth &&
      localPoint.y >= -halfHeight &&
      localPoint.y <= halfHeight &&
      Math.abs(localPoint.z) < 0.02
    );
  }
}
