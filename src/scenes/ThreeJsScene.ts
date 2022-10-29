import * as THREE from "three";

const canvas = document.querySelector("#canvas") as HTMLCanvasElement;
const renderer = new THREE.WebGLRenderer({ canvas });
const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, 2, 0.1, 5);
camera.position.z = 2;
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshPhongMaterial({ color: 0x44aa88 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(-1, 2, 4);
scene.add(light);

renderer.render(scene, camera);
