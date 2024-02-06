import "./style.css"
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

// Setting up camera, scene and a renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.01, 1000);
const renderer = new THREE.WebGL1Renderer({canvas: document.getElementById("bg")});
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(1);

renderer.render(scene,camera);

const loader = new GLTFLoader();
loader.load("Flower.glb", function(gltf){
    scene.add(gltf.scene);
}, undefined, function(error){
    console.error(error);
});

let ambient = new THREE.AmbientLight(0xffffff);
scene.add(ambient);
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate()
