<script lang="ts">
    import { onMount } from 'svelte';
    import Two from 'two.js';
  
    let playing: boolean = false;
    let playground: HTMLDivElement
    let container: HTMLDivElement;


    onMount(() => {
        // Canvas configuration
        const { width, height } = container.getBoundingClientRect();
        const two = new Two({
            fullscreen: false,
            autostart: true,
            width: width,
            height: height
        });
    
        let canvas = two.renderer.domElement;

        playground.appendChild(canvas);
    
        let spawned           = false;
        const xcenter         = two.width/2
        const ycenter         = two.height/2
        const velocity_factor = 0.002 
        const vectors         = [
            [ [-xcenter, -ycenter], [ xcenter, -ycenter] ],
            [ [-xcenter, -ycenter], [ xcenter, -ycenter] ],
            [ [ xcenter,  ycenter], [-xcenter,  ycenter] ],
            [ [ xcenter,  ycenter], [ xcenter, -ycenter] ] 
        ]
        const velocities      = [
            [ [vectors[0][0][0]*velocity_factor, vectors[0][0][1]*velocity_factor], [vectors[0][1][0]*velocity_factor, vectors[0][1][1]*velocity_factor] ],
            [ [vectors[1][0][0]*velocity_factor, vectors[1][0][1]*velocity_factor], [vectors[1][1][0]*velocity_factor, vectors[1][1][1]*velocity_factor] ],
            [ [vectors[2][0][0]*velocity_factor, vectors[2][0][1]*velocity_factor], [vectors[2][1][0]*velocity_factor, vectors[2][1][1]*velocity_factor] ],
            [ [vectors[3][0][0]*velocity_factor, vectors[3][0][1]*velocity_factor], [vectors[3][1][0]*velocity_factor, vectors[3][1][1]*velocity_factor] ]
        ]

        const vertices        = [
            [
                [xcenter + vectors[0][0][0] * 0.05, ycenter + vectors[0][0][1] * 0.05],
                [xcenter + vectors[0][1][0] * 0.05, ycenter + vectors[0][1][1] * 0.05],
                [xcenter, ycenter],
                [xcenter, ycenter]
            ],
            [
                [xcenter + vectors[1][0][0] * 0.05, ycenter + vectors[1][0][1] * 0.05],
                [xcenter + vectors[1][1][0] * 0.05, ycenter + vectors[1][1][1] * 0.05],
                [xcenter, ycenter],
                [xcenter, ycenter]
            ],
            [
                [xcenter + vectors[2][0][0] * 0.05, ycenter + vectors[2][0][1] * 0.05],
                [xcenter + vectors[2][1][0] * 0.05, ycenter + vectors[2][1][1] * 0.05],
                [xcenter, ycenter],
                [xcenter, ycenter]
            ],
            [
                [xcenter + vectors[3][0][0] * 0.05, ycenter + vectors[3][0][1] * 0.05],
                [xcenter + vectors[3][1][0] * 0.05, ycenter + vectors[3][1][1] * 0.05],
                [xcenter, ycenter],
                [xcenter, ycenter]
            ]
        ];

        let index    = Math.floor(Math.random() * 4);
        let velocity = velocities[index].map(vertex => [...vertex]);
        let figure   = vertices[index].map(vertex => [...vertex]);

        [
            two.makeLine(xcenter, ycenter, 0,         0         ),
            two.makeLine(xcenter, ycenter, two.width, 0         ),
            two.makeLine(xcenter, ycenter, two.width, two.height),
            two.makeLine(xcenter, ycenter, 0,         two.height)
        ].forEach((line) => {
            line.linewidth = 3;
            line.stroke = 'white';
        });

        const update = () => {
            if (playing) {
                // Dibujar el fondo negro
                two.clear(); // Borra el lienzo

                // Dibuja líneas guía (puedes omitir esto si no las necesitas)
                [
                    two.makeLine(xcenter, ycenter, 0, 0),
                    two.makeLine(xcenter, ycenter, two.width, 0),
                    two.makeLine(xcenter, ycenter, two.width, two.height),
                    two.makeLine(xcenter, ycenter, 0, two.height),
                ].forEach((line) => {
                    line.linewidth = 3;
                    line.stroke = 'white';
                });

                // Lógica para la plataforma
                if (!spawned) {
                    if (Math.round(Math.random() * 101) > 50) {
                        spawned = true;
                        index = Math.floor(Math.random() * 4);
                        velocity = velocities[index].map((vertex) => [...vertex]);
                        figure = vertices[index].map((vertex) => [...vertex]);
                    }
                } else {
                    // Incrementar el factor de perspectiva
                    const perspectiveFactor = 1.03; // Incremento por cuadro

                    // Mover los vértices de la plataforma y aplicar perspectiva
                    for (let i = 0; i < figure.length; i++) {
                        // Aplicar movimiento básico
                        figure[i][0] += velocity[i % 2][0];
                        figure[i][1] += velocity[i % 2][1];

                        // Calcular distancia al centro
                        const dx = figure[i][0] - xcenter;
                        const dy = figure[i][1] - ycenter;

                        // Aplicar perspectiva: escalar la posición desde el centro
                        figure[i][0] = xcenter + dx * perspectiveFactor;
                        figure[i][1] = ycenter + dy * perspectiveFactor;
                    }

                    // Crear la plataforma (rastro blanco)
                    const topWall = two.makePath(
                        [
                            new Two.Anchor(figure[1][0], figure[1][1]), // Superior derecho
                            new Two.Anchor(figure[0][0], figure[0][1]), // Superior izquierdo
                            new Two.Anchor(figure[2][0], figure[2][1]), // Inferior derecho
                            new Two.Anchor(figure[3][0], figure[3][1]), // Inferior izquierdo
                        ]
                    );
                    topWall.linewidth = 0; // Sin borde
                    topWall.fill = '#ffffff'; // Plataforma de color blanco

                    // Si la plataforma sale del área visible, reiniciamos
                    if (
                        figure.every((vertex) => vertex[1] < 0 || vertex[1] > two.height) || // Vertical
                        figure.every((vertex) => vertex[0] < 0 || vertex[0] > two.width) // Horizontal
                    ) {
                        spawned = false;
                    }
                }
            }

            // Solicitar la próxima actualización de animación
            requestAnimationFrame(update);
        };

        // Comenzar la animación
        requestAnimationFrame(update);
    });
</script>

<style>
    #page-container {
        width: 100%;
        height: 500px;
        overflow: hidden;
        border-radius: 10px;
    }

    #playground {
        position:absolute;
        z-index: 0;
    }

    #play-button {
        width: 100%;
        height: 100%;
        position: relative;
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
  
<div bind:this={container} id="page-container">
    <div id="playground" bind:this={playground}></div>
    <button id="play-button" aria-label="Play" on:click={() => {
        playing = !playing
    }}>
        <img src="{!playing ? "/a-portfolio/app-2/play.png" : "/a-portfolio/app-2/pause.png"}" id="{!playing ? "play-button-play" : "play-button-pause"}" alt="Button icon"/>
    </button>
</div>

  