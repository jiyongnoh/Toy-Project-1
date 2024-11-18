import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setAnimationLoop(animate);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;

// 3. GLTF 파일 로드
const loader = new GLTFLoader();
loader.load(
  "https://threejs.org/examples/models/gltf/DamagedHelmet/DamagedHelmet.gltf", // GLTF 파일 URL
  (gltf) => {
    const model = gltf.scene;
    model.scale.set(2, 2, 2); // 모델 크기 조정
    scene.add(model);
    console.log("GLTF 모델 로드 성공:", model);
  },
  undefined,
  (error) => {
    console.error("GLTF 모델 로드 실패:", error);
  }
);

function animate() {
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  renderer.render(scene, camera);
}
