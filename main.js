import './style.css'
import * as THREE from "three";

// Setting up camera, scene and a renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.01, 1000);
const renderer = new THREE.WebGL1Renderer({canvas: document.getElementById("bg")});
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(10);

renderer.render(scene,camera);
