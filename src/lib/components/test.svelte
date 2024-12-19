<script lang="ts">
    import * as THREE from 'three';
    import { onMount } from 'svelte';
    import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
    import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

    const tips = [
        "Chief is working hard on it. Patience.",
        "Did you know that Chief is studying computer engineering?",
        "Of course you don't.",
        "Error 404... Ups, not now.",
        "Welcome.",
        "Welcome back again.",
        "Uhmm, now you really know... Some kind of paradox?",
        "Nothing has changed the last time you visited me.",
        "Chief, what are you doing?!",
        "\"It always ends like this.\"",
        "Did you know that Chief can also make videogames?",
        "\"I never quite realized ... how beautiful this world is.\"",
        "...",
        "Chief is still working hard on it.",
        "C'mon, don't be impatience, god.",
        "Is Chief coming back one day..?",
        "Where are you chief..?",
        "Probably you have seen this loading screen for two years.",
        "La vida es una lenteja o la tomas o la dejas",
        "Chief is not working hard on this, don't be fooled.",
        "Yes, Chief has come back, but still not working on this >:(",
        "Chief is currently in the 4th year (finally T_T).",
        "You can press Ctrl+Shift+º and see... uh oh...",
        "I didn't suppose to tell you that... Fine whatever.",
        "It doesn't work on mobile, jaja"
    ];

    let tipMessage = randomTip();
    let backgroundColor = randomColor();
    let container : HTMLDivElement;

    function randomColor() {
        return `#${Math.floor(Math.random() * 16777215).toString(16)}9f`;
    }

    function randomTip() {
        return tips[Math.floor(Math.random() * tips.length)];
    }

    onMount(() => {

        const {width, height} = container.getBoundingClientRect()
        // Cambiar color y mensaje periódicamente
        const colorInterval = setInterval(() => {
            backgroundColor = randomColor();
        }, 5000);

        const tipInterval = setInterval(() => {
            tipMessage = randomTip();
        }, 10000);

        // Configurar escena de Three.js
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(width, height);
        container.appendChild(renderer.domElement);

        const geometry = new THREE.BoxGeometry(1, 1, 1);
        const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        const cube = new THREE.Mesh(geometry, material);
        scene.add(cube);

        const gltfLoader = new GLTFLoader();
        gltfLoader.load(
            '/a-portfolio/app-5/TV.glb',
            (object) => {
                object.scene.traverse((child) => {
                    if (child.isMesh) {
                        console.log(child);
                    }
                });
            },
            (xhr) => {
                console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
            },
            (error) => {
                console.error(error);
            }
        );

        camera.position.z = 5;

        function animate() {
            requestAnimationFrame(animate);
            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;

            renderer.render(scene, camera);
        }

        animate();

        // Cleanup on component destroy
        return () => {
            clearInterval(colorInterval);
            clearInterval(tipInterval);
            renderer.dispose();
        };
    });
</script>

<style>
    /* #cover-container {
        width: 100vw;
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        transition: background-color 0.5s ease;
    }

    #tip-message {
        color: white;
        font-size: 1.5rem;
        margin-bottom: 20px;
    }

    #renderer-container {
        width: 100%;
        height: 100%;
        overflow: hidden;
    } */

    #app-container {
        width: 100%;
        height: 500px;
        background-color: aliceblue;
        color:white;
        display: flex;
        overflow: hidden;
        border-radius: 10px;
    }
</style>

<div bind:this={container} id="app-container">
    <!-- <div id="tip-message">{tipMessage}</div>
    <div id="renderer-container"></div> -->
</div>
