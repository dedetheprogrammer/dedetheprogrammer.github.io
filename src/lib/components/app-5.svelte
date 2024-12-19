<script lang="ts">
    import { onMount } from 'svelte';
    import * as THREE from 'three';

    let playing: boolean = false;
    let showing: boolean = true;
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
    });
    
</script>
  
<style>
    @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@500&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Quicksand&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Lora:wght@400&display=swap');

    :root {
        --app-header-height: 65px;
        --app-footer-height: 60px;
    }

    #app-container {
        width: 100%;
        height: 500px;
        overflow: hidden;
        background-color: gray;
        position: relative;
        border-radius: 10px;
    }

    #app-background {
        width: 100%;
        height: 100%;
        position: absolute;
    }

    #app-foreground {
        width: 100%;
        height: 100%;
        position: relative;
    }

    #app-header {
        width: 100%;
        height: 75px;
        display: flex;
        align-items: center;
        justify-content: right;
        background-color: white;
    }

    .app-header-option {
        width: 80px;
        height: 100%;
        margin-right: 2px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #ababab;
        padding: 10px;
        font-size: 14px;
        font-family: 'Lora', serif;
    }

    .app-header-option:hover {
        cursor:pointer;
        text-decoration: underline;
        color: #000;
    }

    #app-body{
        width: 100%;
        height: calc(100% - var(--app-header-height) - var(--app-footer-height));
        display: flex;
        position: relative;
        background-color: #47474783;
    }

    #app-body-left {
        width: 50%;
        height: 100%;
        color: white;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    #app-body-left-title {
        width: 100%;
        height: fit-content;
        display: flex;
        align-items: end;
        filter: drop-shadow(black 5px 5px 5px)
    }

    #app-body-left-title p {
        margin: 0 40px 0 80px;
        font-size: 16px;
        font-weight: bold;
        color: #ffffff;
        font-family: 'Lora', serif;
    }

    #app-body-right {
        width: 50%;
        height: 100%;
    }
 
    #app-footer {
        width: 100%;
        height: var(--app-footer-height);
        background-color: white;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    #app-footer-socials {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .icon {
        width: fit-content;
        height: fit-content;
        color:black;
        margin: 10px;
    }
    .icon:hover {
        filter: drop-shadow(2px 2px 1px #b01212);
    }

    #app-menu {
        width: 100px;
        height: 30px;
        position: absolute;
        top: 10px;
        left: 10px;
        border-radius: 5px;
        display: flex;
        filter: drop-shadow(black 2px 2px 3px)
    }

    #app-menu-play {
        width: 50%;
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
        border: none;
        border: black 1px solid;
        background: rgb(144,144,144);
        background: radial-gradient(circle, rgba(144,144,144,1) 0%, rgba(120,120,120,1) 100%);
    }
    #app-menu-play:hover {
        cursor: pointer;
    }
    #app-menu-play:active {
        background-color: #ababab;
        border-bottom: black 2px solid;
        border-left: black 2px solid;
        border-top: black 2px solid;
    }

    #app-menu-view {
        width: 50%;
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
        border: none;
        border: black 1px solid;
        background: rgb(144,144,144);
        background: radial-gradient(circle, rgba(144,144,144,1) 0%, rgba(120,120,120,1) 100%);
    }
    #app-menu-view:hover {
        cursor: pointer;
    }
    #app-menu-view:active {
        background-color: #ababab;
        border-bottom: black 2px solid;
        border-right: black 2px solid;
        border-top: black 2px solid;
    }

    #play-button-play {
        width: 16px;
        height: 16px;
        margin-left: 1px;
        filter: drop-shadow(black 2px 2px 3px)
    }

    #play-button-pause {
        width: 20px;
        height: 20px;
        filter: drop-shadow(black 2px 2px 3px)
    }

    #view-button {
        width: 20px;
        height: 20px;
        filter: drop-shadow(black 2px 2px 3px)
    }

</style>

<div id="app-container">
    <div id="app-background" bind:this={container}></div>
    {#if showing}
        <div id="app-foreground">
            <div id="app-header">
                <div class="app-header-option">HOME</div>
                <div class="app-header-option">PROJECTS</div>
                <div class="app-header-option">ABOUT ME</div>
            </div>
            <div id="app-body">
                <div id="app-body-left">
                    <div id="app-body-left-title">
                        <p>
                            Where the ideas begin and be born. Engineer, content creator, artist, 3d modeler and more incoming...
                        </p>
                    </div>
                </div>
                <div id="app-body-right"></div>
            </div>
            <div id='app-footer'>
                <div id="app-footer-socials">
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/dedetheprogrammer" aria-label="Github"><i class="icon fab fa-2x fa-github"></i></a>
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/dedetheprogrammer" aria-label="Instagram"><i class="icon fa-2x fab fa-instagram"></i></a>
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/dedetheprogrammer" aria-label="Tiktok"><i class="icon fa-2x fab fa-tiktok"></i></a>
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/dedetheprogrammer" aria-label="Twitch"><i class="icon fa-2x fab fa-twitch"></i></a>
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/dedetheprogrammer" aria-label="Twitter"><i class="icon fa-2x fab fa-twitter"></i></a>
                </div>
            </div>
        </div>
    {/if}
    <div id="app-menu">
        <button id="app-menu-play" on:click={() => {
            playing = !playing
        }}>
            <img src="{!playing ? "/a-portfolio/app-2/play.png" : "/a-portfolio/app-2/pause.png"}" id="{!playing ? "play-button-play" : "play-button-pause"}" alt="Button icon"/>
        </button>
        <button id="app-menu-view" on:click={() => {
            showing = !showing
        }}>
            <img src="{!showing ? "/a-portfolio/app-5/show.png" : "/a-portfolio/app-5/hide.png"}" id="view-button" alt="Button icon"/>
        </button>
    </div>
</div>
