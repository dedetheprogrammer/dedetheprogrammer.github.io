<script lang="ts">
    import { onMount } from 'svelte';
    import * as THREE from 'three'

    let playing: boolean = false
    let container: HTMLDivElement;
    onMount(() => {
        const {width, height} = container.getBoundingClientRect();

        const z          = 12.9
        const scene      = new THREE.Scene()
        const bg_color   = '#aaa0a0'//0x0a0a1f
        scene.castShadow = true;
        const camera = new THREE.PerspectiveCamera(
            65,                                   // Field Of View 
            width/height, // Aspect Ratio
            0.1,                                  // Near cap
            1000                                  // Far cap
        );
        camera.position.set(0, 4, z);
        camera.lookAt(0, 0, 0);

        const renderer = new THREE.WebGLRenderer();
        renderer.shadowMap.enabled = true;
        renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        renderer.setClearColor(bg_color)
        renderer.setSize(width, height);
        container.appendChild(renderer.domElement)

        const floor = new THREE.Mesh(
            new THREE.PlaneGeometry(8,70),
            new THREE.MeshLambertMaterial({ 
                color: bg_color,
                side: THREE.DoubleSide,
            })
        )
        floor.receiveShadow = true
        floor.rotateX(-Math.PI/2)
        scene.add(floor)

        const backfloor = new THREE.Mesh(
            new THREE.PlaneGeometry(25,20),
            new THREE.MeshBasicMaterial({
                color: 0xffffff,
                side: THREE.DoubleSide
            })
        )
        backfloor.position.x = -17.68
        backfloor.rotateX(-Math.PI/2)
        backfloor.receiveShadow = true
        scene.add(backfloor)

        const back_near_right_wall = new THREE.Mesh(
            new THREE.PlaneGeometry(20,20),
            new THREE.MeshBasicMaterial({
                color: 0x999999,
                side: THREE.DoubleSide
            })
        )
        back_near_right_wall.position.set(-5.2, -10, 0)
        back_near_right_wall.rotateY(Math.PI/2)
        scene.add(back_near_right_wall)

        const back_far_right_wall = new THREE.Mesh(
            new THREE.PlaneGeometry(40,20),
            new THREE.MeshBasicMaterial({
                color: 0x999999,
                side: THREE.DoubleSide
            })
        )
        back_far_right_wall.position.set(-5.2, -5, -30)
        back_far_right_wall.rotateY(Math.PI/2)
        scene.add(back_far_right_wall)

        const backwall = new THREE.Mesh(
            new THREE.PlaneGeometry(45.5,15),
            new THREE.MeshBasicMaterial({
                color: 0xffffff,
                side: THREE.DoubleSide
            })
        )
        backwall.position.set(-27.95, 2,-10)
        scene.add(backwall)

        const background = new THREE.Mesh(
            new THREE.PlaneGeometry(width, height),
            new THREE.MeshBasicMaterial({
                color: bg_color
            })
        )
        background.position.z = -50
        scene.add(background)

        const N        = 9
        const geometry = new THREE.BoxGeometry(4,5,0.1)
        const planes: any[] = []
        for (let i = 0; i < N; i++) {
            planes.push(
                new THREE.Mesh(geometry, 
                    new THREE.MeshBasicMaterial({
                        color: bg_color, side: THREE.DoubleSide
                    })
                )
            )
            planes[i].position.set(-3.9, 1.5, 10 + -6*i)
            planes[i].rotateY(Math.PI/2)
            planes[i].castShadow = true
            scene.add(planes[i])
        }
        const left_wall = new THREE.Mesh(
            new THREE.PlaneGeometry(6, 70),
            new THREE.MeshBasicMaterial({
                color: bg_color,
                side: THREE.DoubleSide
            })
        )
        left_wall.position.set(-3.9, 7, 0)
        left_wall.rotateY(Math.PI/2)
        left_wall.rotateZ(Math.PI/2)
        left_wall.castShadow = true
        scene.add(left_wall)

        const right_wall = new THREE.Mesh(
            new THREE.PlaneGeometry(70, 20),
            new THREE.MeshLambertMaterial({
                color: bg_color,
                side: THREE.DoubleSide
            })
        )
        right_wall.position.set(4, 2, 0.1)
        right_wall.rotateY(Math.PI/2)
        right_wall.castShadow = true
        right_wall.receiveShadow = true
        scene.add(right_wall)

        const roof = new THREE.Mesh(
            new THREE.PlaneGeometry(10, 70),
            new THREE.MeshLambertMaterial({
                color: bg_color, 
                side: THREE.DoubleSide
            })
        )
        roof.position.y = 7
        roof.rotateX(Math.PI/2)
        roof.receiveShadow = true
        scene.add(roof)

        const light = new THREE.SpotLight(0xffffff, 7)
        light.castShadow = true
        light.position.set(-15,4,5)
        light.target = floor
        scene.add(light)

        const light_1 = new THREE.SpotLight(0xffffff, 2)
        light_1.castShadow = true
        light_1.position.set(-15,4,-10)
        light_1.target = floor
        scene.add(light_1)

        const light_2 = new THREE.AmbientLight(0xffffff, 1)
        light_2.castShadow = true
        scene.add(light_2)

        scene.fog = new THREE.Fog(0x555555, 5, 50)
        renderer.render(scene, camera);

        function animate() {
            if (playing) {
                for (let i = 0; i < N; i++) {
                    if (planes[i].position.z <= z) {
                        planes[i].position.z += 0.03;
                    } else {
                        planes[i].position.z = -6*(N-3);
                    }
                }
                renderer.render(scene, camera);
            }
            requestAnimationFrame(animate);
        }
        animate();
    })
    
</script>

<style>

    #app-container {
        width: 100%;
        height: 500px;
        overflow: hidden;
        background-color: gray;
        position: relative;
        border-radius: 10px;
    }

    #play-button {
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0px;
        top: 0px;
        z-index: 2;
        border: none;
        border-radius: 10px; 
        background-color: transparent;
        cursor: pointer;
        display: flex;
        align-items: start;
        justify-content: start;
    }

    #play-button-play {
        width: 50px;
        height: 50px;
        margin: 10px 0 0 10px;
        filter: drop-shadow(black 2px 2px 3px)
    }

    #play-button-pause {
        width: 50px;
        height: 50px;
        margin: 11px 0 0 8px;
        filter: drop-shadow(black 2px 2px 3px)
    }

</style>

<div bind:this={container} id="app-container">
    <button id="play-button" aria-label="Play" on:click={() => {
        playing = !playing
    }}>
        <img src="{!playing ? "/a-portfolio/app-2/play.png" : "/a-portfolio/app-2/pause.png"}" id="{!playing ? "play-button-play" : "play-button-pause"}" alt="Button icon"/>
    </button>
</div>