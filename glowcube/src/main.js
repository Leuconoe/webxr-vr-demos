import * as THREE from 'three';
import { VRButton } from 'three/addons/webxr/VRButton.js';
import CANNON from 'cannon';

import vertexShader from './assets/shaders/vertex.glsl';
import fragmentShader from './assets/shaders/fragment.glsl';

// -----------------------------------------------------------------------------
// Global state
// -----------------------------------------------------------------------------

let renderer, scene, camera, clock;
let handLeft, handRight;
let controllerLeft, controllerRight;

let rThumbObj, rIndexObj, lThumbObj, lIndexObj;
let rPinchSphere, lPinchSphere;
let lPinchOn = false;
let rPinchOn = false;
let scalingOn = false;
let lJointsTracked = false;
let rJointsTracked = false;
let lControllerSelecting = false;
let rControllerSelecting = false;

let tempCube, boxGeometry, boxMaterial;
let world;
let spawnedCubes = [];

let previousTime = 0;

const PINCH_START = 0.022;
const PINCH_END = 0.035;
const MAX_SPAWNED_CUBES = 50;
const DEBUG_XR = new URLSearchParams(window.location.search).has('debug');

// -----------------------------------------------------------------------------
// Init
// -----------------------------------------------------------------------------

init();
renderer.setAnimationLoop(animate);

function init() {
  // Scene
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0x000000);

  // Camera
  camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 50);
  camera.position.set(0, 1.6, 3);
  scene.add(camera);

  // Renderer
  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.xr.enabled = true;
  document.body.appendChild(renderer.domElement);

  // XR button (hand tracking + depth sensing)
  document.body.appendChild(
    VRButton.createButton(renderer, {
      optionalFeatures: ['local-floor', 'bounded-floor', 'hand-tracking']
    })
  );

  // Lights
  setupLights();

  // Hand joint reference meshes
  setupJointReferences();

  // Pinch visual references
  setupPinchReferences();

  //Virtual hands
  setupHands();
  setupControllers();

  // Physics world
  setupPhysics();

  // Shared cube resources
  setupBoxResources();

  // Temp cube used while scaling between pinch points
  setupTempCube();

  // Clock
  clock = new THREE.Clock();

  // Resize handling
  window.addEventListener('resize', onWindowResize, false);
}

// -----------------------------------------------------------------------------
// Setup helpers
// -----------------------------------------------------------------------------

function setupLights() {
  // Use a single ambient light to illuminate the scene
  const ambientLight = new THREE.AmbientLight(0xffffff, 1);  // Color and intensity
  scene.add(ambientLight);
}

function setupJointReferences() {
  const sphereGeom = new THREE.SphereGeometry(0.002, 32, 32);
  const invisibleRed = new THREE.MeshBasicMaterial({
    color: 0xff0000,
    opacity: 0,
    transparent: true
  });

  rThumbObj = new THREE.Mesh(sphereGeom, invisibleRed);
  rIndexObj = new THREE.Mesh(sphereGeom, invisibleRed);
  lThumbObj = new THREE.Mesh(sphereGeom, invisibleRed);
  lIndexObj = new THREE.Mesh(sphereGeom, invisibleRed);

  scene.add(rThumbObj, rIndexObj, lThumbObj, lIndexObj);
}

function setupPinchReferences() {
  const pinchGeom = new THREE.SphereGeometry(0.006, 32, 32);
  const pinchMat = new THREE.MeshLambertMaterial({ color: 0xffffff });

  rPinchSphere = new THREE.Mesh(pinchGeom, pinchMat);
  lPinchSphere = new THREE.Mesh(pinchGeom, pinchMat);

  rPinchSphere.visible = false;
  lPinchSphere.visible = false;

  scene.add(rPinchSphere, lPinchSphere);
}

function setupHands() {
  handRight = renderer.xr.getHand(0);
  scene.add(handRight);

  handLeft = renderer.xr.getHand(1);
  scene.add(handLeft);

}

function setupControllers() {
  controllerRight = renderer.xr.getController(0);
  controllerRight.addEventListener('selectstart', () => {
    rControllerSelecting = true;
    debugLog('controller 0 selectstart');
  });
  controllerRight.addEventListener('selectend', () => {
    rControllerSelecting = false;
    debugLog('controller 0 selectend');
  });
  controllerRight.addEventListener('connected', event => {
    debugLog('controller 0 connected', describeInputSource(event.data));
  });
  scene.add(controllerRight);

  controllerLeft = renderer.xr.getController(1);
  controllerLeft.addEventListener('selectstart', () => {
    lControllerSelecting = true;
    debugLog('controller 1 selectstart');
  });
  controllerLeft.addEventListener('selectend', () => {
    lControllerSelecting = false;
    debugLog('controller 1 selectend');
  });
  controllerLeft.addEventListener('connected', event => {
    debugLog('controller 1 connected', describeInputSource(event.data));
  });
  scene.add(controllerLeft);

  renderer.xr.addEventListener('sessionstart', () => {
    const session = renderer.xr.getSession();
    debugLog('xr sessionstart', {
      mode: 'immersive-vr',
      inputSources: session ? Array.from(session.inputSources).map(describeInputSource) : []
    });
  });

  renderer.xr.addEventListener('sessionend', () => {
    lControllerSelecting = false;
    rControllerSelecting = false;
    debugLog('xr sessionend');
  });
}

function setupPhysics() {
  world = new CANNON.World();
  world.gravity.set(0, -9.82, 0);

  const defaultMaterial = new CANNON.Material('default');
  const defaultContactMaterial = new CANNON.ContactMaterial(defaultMaterial, defaultMaterial, {
    friction: 0.1,
    restitution: 0.7
  });

  world.addContactMaterial(defaultContactMaterial);
  world.defaultContactMaterial = defaultContactMaterial;

  // Floor
  const floorShape = new CANNON.Plane();
  const floorBody = new CANNON.Body({ mass: 0 });
  floorBody.addShape(floorShape);
  floorBody.quaternion.setFromAxisAngle(new CANNON.Vec3(-1, 0, 0), Math.PI * 0.5);
  floorBody.position.y = 0.01;
  world.addBody(floorBody);
}

function setupBoxResources() {
  boxGeometry = new THREE.BoxGeometry(0.2, 0.2, 0.2);
  boxMaterial = new THREE.ShaderMaterial({
    vertexShader,
    fragmentShader,
    transparent: true,
    side: THREE.DoubleSide,
    depthTest: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    uniforms: {
      uTime: { value: 0 },
      resolution: { value: new THREE.Vector2(1800.0, 1800.0) }
    }
  });
}

function setupTempCube() {
  const cubeGeom = new THREE.BoxGeometry(0.05, 0.05, 0.05);
  tempCube = new THREE.Mesh(cubeGeom, boxMaterial);
  tempCube.visible = false;
  scene.add(tempCube);
}

// -----------------------------------------------------------------------------
// Animation loop
// -----------------------------------------------------------------------------

function animate() {
  const elapsedTime = clock.getElapsedTime();
  const deltaTime = elapsedTime - previousTime;
  previousTime = elapsedTime;

  // Update physics
  world.step(1 / 60, deltaTime, 3);

  // Sync visual cubes with physics bodies
  spawnedCubes.forEach(({ mesh, body }) => {
    mesh.position.copy(body.position);
    mesh.quaternion.copy(body.quaternion);
  });

  // Update shader time uniform
  boxMaterial.uniforms.uTime.value = elapsedTime;

  // Hand joints + pinch logic
  updateJointReferences();
  updatePinchState();
  handleScalingLogic();

  // Render
  renderer.render(scene, camera);
}

// -----------------------------------------------------------------------------
// Hand + pinch helpers
// -----------------------------------------------------------------------------

function updateJointReferences() {
  rJointsTracked = false;
  lJointsTracked = false;

  // Right hand (index 0)
  if (handRight?.joints) {
    const thumb = handRight.joints['thumb-tip'];
    const index = handRight.joints['index-finger-tip'];

    if (isJointTracked(thumb) && isJointTracked(index)) {
      rThumbObj.position.copy(thumb.position);
      rIndexObj.position.copy(index.position);
      rJointsTracked = true;
    }
  }

  // Left hand (index 1)
  if (handLeft?.joints) {
    const thumb = handLeft.joints['thumb-tip'];
    const index = handLeft.joints['index-finger-tip'];

    if (isJointTracked(thumb) && isJointTracked(index)) {
      lThumbObj.position.copy(thumb.position);
      lIndexObj.position.copy(index.position);
      lJointsTracked = true;
    }
  }
}

function updatePinchState() {
  const rDist = rJointsTracked ? rIndexObj.position.distanceTo(rThumbObj.position) : Infinity;
  const lDist = lJointsTracked ? lIndexObj.position.distanceTo(lThumbObj.position) : Infinity;
  const rFallbackPinch = !rJointsTracked && rControllerSelecting && updateFallbackPinch(controllerRight, rThumbObj, rIndexObj);
  const lFallbackPinch = !lJointsTracked && lControllerSelecting && updateFallbackPinch(controllerLeft, lThumbObj, lIndexObj);

  // Right pinch
  if (rFallbackPinch) {
    rPinchOn = true;
  } else if (!rPinchOn && rDist < PINCH_START) {
    rPinchOn = true;
  } else if (rPinchOn && rDist > PINCH_END) {
    rPinchOn = false;
  }

  if (rPinchOn) {
    rPinchSphere.position.copy(rThumbObj.position);
    // rPinchSphere.visible = true;
  } else {
    rPinchSphere.visible = false;
  }

  // Left pinch
  if (lFallbackPinch) {
    lPinchOn = true;
  } else if (!lPinchOn && lDist < PINCH_START) {
    lPinchOn = true;
  } else if (lPinchOn && lDist > PINCH_END) {
    lPinchOn = false;
  }

  if (lPinchOn) {
    lPinchSphere.position.copy(lThumbObj.position);
    // lPinchSphere.visible = true;
  } else {
    lPinchSphere.visible = false;
  }
}

function isJointTracked(joint) {
  return !!joint &&
    Number.isFinite(joint.position?.x) &&
    Number.isFinite(joint.position?.y) &&
    Number.isFinite(joint.position?.z) &&
    joint.visible !== false;
}

function updateFallbackPinch(controller, thumbObj, indexObj) {
  if (!controller) return false;

  controller.updateMatrixWorld(true);
  controller.getWorldPosition(thumbObj.position);
  indexObj.position.copy(thumbObj.position);
  return true;
}

function describeInputSource(inputSource) {
  if (!inputSource) return null;

  return {
    handedness: inputSource.handedness || 'none',
    targetRayMode: inputSource.targetRayMode || 'unknown',
    hasHand: !!inputSource.hand,
    profiles: inputSource.profiles || []
  };
}

function debugLog(message, data = null) {
  if (!DEBUG_XR) return;
  if (data === null) {
    console.log(`[glowcube-vr] ${message}`);
  } else {
    console.log(`[glowcube-vr] ${message}`, data);
  }
}

function handleScalingLogic() {
  if (lPinchOn && rPinchOn) {
    if (!scalingOn) {
      tempCube.visible = true;
      scalingOn = true;
    }
    cubeScaling();
  } else {
    if (scalingOn) {
      spawnCube();
      tempCube.visible = false;
      scalingOn = false;
    }
  }
}

function spawnCube() {
  cubeScaling(); // ensure latest scale/position

  const mesh = new THREE.Mesh(boxGeometry, boxMaterial);
  mesh.castShadow = true;
  mesh.position.copy(tempCube.position);
  mesh.quaternion.copy(tempCube.quaternion);
  mesh.scale.set(tempCube.scale.x * 0.25, tempCube.scale.y * 0.25, tempCube.scale.z * 0.25);
  scene.add(mesh);

  const halfExtents = new CANNON.Vec3(
    Math.max(mesh.scale.x * 0.125, 0.001),
    Math.max(mesh.scale.y * 0.125, 0.001),
    Math.max(mesh.scale.z * 0.125, 0.001)
  );
  const shape = new CANNON.Box(halfExtents);
  const body = new CANNON.Body({
    mass: 1,
    position: new CANNON.Vec3(tempCube.position.x, tempCube.position.y, tempCube.position.z),
    shape
  });
  body.quaternion.set(
    tempCube.quaternion.x,
    tempCube.quaternion.y,
    tempCube.quaternion.z,
    tempCube.quaternion.w
  );
  world.addBody(body);

  spawnedCubes.push({ mesh, body });
  debugLog('cube spawned', { count: spawnedCubes.length });

  while (spawnedCubes.length > MAX_SPAWNED_CUBES) {
    const oldest = spawnedCubes.shift();
    scene.remove(oldest.mesh);
    world.removeBody(oldest.body);
    debugLog('oldest cube removed', { count: spawnedCubes.length });
  }
}

function cubeScaling() {
  // Midpoint between pinch spheres
  const midPoint = new THREE.Vector3()
    .addVectors(rPinchSphere.position, lPinchSphere.position)
    .divideScalar(2);

  // Direction from left to right pinch
  const targetDir = new THREE.Vector3()
    .subVectors(rPinchSphere.position, lPinchSphere.position)
    .normalize();

  tempCube.position.copy(midPoint);
  tempCube.lookAt(new THREE.Vector3().addVectors(tempCube.position, targetDir));

  // Distance between pinch points → scale
  const pointDist = rPinchSphere.position.distanceTo(lPinchSphere.position);
  const scaleValue = THREE.MathUtils.mapLinear(pointDist, 0, 0.1, 0, 1);

  tempCube.scale.set(scaleValue, scaleValue, scaleValue);
}

// -----------------------------------------------------------------------------
// Resize handling
// -----------------------------------------------------------------------------

function onWindowResize() {
  if (!camera || !renderer) return;

  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}
