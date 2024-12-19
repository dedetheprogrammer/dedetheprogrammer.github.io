<script lang="ts">
    import { onMount } from 'svelte';
    // == TIPS
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
        "It doesn't work on mobile, jaja",
        "The Ctrl+Shift+º was an idea I had, not working for now.",
        "Don't listen to the others, I'm really working on this (for now)."
    ]
    // let quitLoadingScreen = false;
    let tip = tips[Math.floor(Math.random() * tips.length)];
    let tipRef: HTMLHeadingElement;
    let tipState = 'fadeIn';  // Controlador para las animaciones (fadeIn, fadeOut)
    // Función para cambiar el tip
    const changeTip = () => {
        // Cambiar tip
        tip = tips[Math.floor(Math.random() * tips.length)];
        tipState = 'fadeOut';

        setTimeout(() => {
            tipState = 'fadeIn';
        }, 1000); // Esperar 2 segundos para el efecto fadeOut

        // Después de 12 segundos, reiniciar el proceso
        setTimeout(changeTip, 5000); 
    };
    // == LOGO
    let fstGear: HTMLHeadingElement;
    let sndGear: HTMLHeadingElement;
    const rotGear = 125;
    const gearRotationOnMouseEnter = () => {
        fstGear.style.transform = `rotate(${rotGear}deg)`;
        sndGear.style.transform = `rotate(-${rotGear}deg)`;
    };

    const gearRotationOnMouseLeave = () => {
        fstGear.style.transform = `rotate(0deg)`;
        sndGear.style.transform = `rotate(0deg)`;
    };

    // == ENTRIES
    let index: number = -1;

    // == ON MOUNT
    onMount(() => {
        setInterval(() => {
            if (tipState === 'idle') {
                setTimeout(() => {
                    tipState = 'fadeOut';
                    if (tipRef) tipRef.style.animationDuration = '2s';
                }, 10000);
            } else if (tipState === 'fadeOut') {
                setTimeout(() => {
                    if (tipRef) {
                    tip = tips[Math.floor(Math.random() * tips.length)];
                    tipState = 'fadeIn';
                    }
                }, 2000);
            } else if (tipState === 'fadeIn') {
                setTimeout(() => {
                    if (tipRef) {
                    tipState = 'idle';
                    tipRef.style.animationDuration = '10s';
                    }
                }, 2000);
            }
        }, 10000);
    });

</script>


<style>

    @import url('https://fonts.googleapis.com/css2?family=Afacad:ital,wght@0,400..700;1,400..700&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono&display=swap');

    :root {
        --header-height: 50px;
        --footer-height: 30px;
        --section-height: calc((100% - var(--header-height) - var(--footer-height)) / 2);
    }

    .animated {
        animation-fill-mode: both;
        -webkit-animation-fill-mode: both;
    }

    /** Fade out **/
    .fadeOut {
        animation-name: fadeOut;
        -webkit-animation-name: fadeOut;
    }

    @keyframes fadeOut {
        0%   { opacity: 1; }
        100% { opacity: 0; }
    }

    @-webkit-keyframes fadeOut {
        0%   { opacity: 1; }
        100% { opacity: 0; }
    }

    /** Fade in **/
    .fadeIn {
        animation-name: fadeIn;
        -webkit-animation-name: fadeIn;
    }

    @keyframes fadeIn {
        0%   { opacity: 0; }
        100% { opacity: 1; }
    }

    @-webkit-keyframes fadeIn {
        0%   { opacity: 0; }
        100% { opacity: 1; }
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
        background-image: url("/a-portfolio/app-4/background.jpg");
        background-size: cover;
        background-position: center center;
        background-repeat: no-repeat;
        -webkit-filter: blur(2px);
        -moz-filter: blur(2px);
        -o-filter: blur(2px);
        -ms-filter: blur(2px);
        filter: blur(2px);
    }

    #app-foreground {
        width: 100%;
        height: 100%;
        position: relative;
        color: white;
        background-color: #00000087;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    #app-foreground-header {
        width: 100%;
        height: var(--header-height);
        background-color: white;
        color: black;
        filter: drop-shadow(5px 5px 10px #000000);
        display: flex;

    }

    #app-foreground-header-logo {
        width: 80px;
        height: 100%;
        margin-left: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        cursor: pointer; 
    }

    #fst-gear {
        width: 40px;
        left: -7px;
        top: 9px;
        position: absolute;
        transition: transform 0.5s ease-in-out;
    }

    #snd-gear {
        width: 30px;
        left: 30px;
        top: 3px;
        position: absolute;
        transition: transform 0.5s ease-in-out;   
    }

    #app-foreground-header-body {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    #app-coming-soon {
        color: black;
        font-family: "Afacad";
        font-size: 22px;
    }

    #app-tip {
        color: rgb(164, 115, 23);
        font-weight: normal;
        font-size: 13px;
        transition: opacity 0.3s ease-in-out;
    }

    .app-section {
        width: 100%;
        height: var(--section-height);
        display: flex;
        flex-direction: column;
    }

    .app-section-title {
        font-family: 'IBM Plex Mono', monospace;
        margin: 10px 0px 10px 10px;
    }

    .app-section-entries {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: left;
        padding: 0px 0px 10px 20px;
    }

    .app-section-entry {
        width: calc((100% - 40px) / 4);
        height: 100%;
        background-color: #494949;
        position: relative;
        overflow: hidden;
    }

    .app-section-entry-background {
        width: 100%;
        height: 100%;
        background-position: center center;
        background-size: cover;
        position: absolute;
        transition: transform 0.1s ease-in-out;
    }
    .app-section-entry-background-hover {
        transform: scale(1.1) rotate(5deg);
    }

    .app-section-entry-foreground {
        width: 100%;
        height: 100%;
        position: relative;
        z-index: 2;
        background-color: rgba(0, 0, 0, 0.586);
        display: flex;
        align-items: flex-end;
        transition: background-color 0.1s ease-in;
        -webkit-transition: background-color 0.1s ease-in;
    }
    .app-section-entry-foreground:hover {
        background-color: rgba(0, 0, 0, 0);
        cursor: pointer;
    }
    .app-section-entry-foreground h1 {
        margin: 0px 0px 20px 20px;
        font-family: 'IBM Plex Mono', monospace;
        filter: drop-shadow(5px 5px 10px #000000);
        transition: opacity 0.1s ease-in;
        -webkit-transition: opacity 0.1s ease-in; 
    }

    #app-footer {
        width: 100%;
        height: var(--footer-height);
        background-color: #ffffff;
        display: flex;
        align-items: center;
        justify-content: center;
        filter: drop-shadow(5px -5px 10px #000000);
    }

    .App-footer-body {
        width: 100%;
        height: 100%;
        color:#494949;
        font-family: "Afacad";
        display: flex;
        align-items: flex-end;
        justify-content: center;
    }

    /* .App-footer-body-copy {
        margin-bottom: 4px;
        font-size: 13px;
    }
    .App-footer-body-copy a {
        text-decoration: none;
        color:rgb(227, 186, 108);
    }
    .App-footer-body-copy a:hover {
        text-decoration: underline;
        color:rgb(164, 115, 23);
    } */

</style>

<div id="app-container">
    <div id="app-background"></div>
    <div id="app-foreground">
        <div id="app-foreground-header">
            <!-- svelte-ignore a11y_no_static_element_interactions -->
            <div id="app-foreground-header-logo"
                on:mouseenter={gearRotationOnMouseEnter} 
                on:mouseleave={gearRotationOnMouseLeave}
            >
                <img bind:this={fstGear} src="/a-portfolio/app-4/gear.png" id="fst-gear" alt="A gear"/>
                <img bind:this={sndGear} src="/a-portfolio/app-4/gear.png" id="snd-gear" alt="A gear"/>
            </div>
            <div id="app-foreground-header-body">
                <h1 id="app-coming-soon">COMING SOON</h1>
                <h3 bind:this={tipRef} id="app-tip" class={`animated ${(tipState === 'fadeIn') ? 'fadeIn' : (tipState === 'fadeOut') ? 'fadeOut' : ''}`}>{tip}</h3>
            </div>
        </div>
        <div class="app-section">
            <h1 class="app-section-title">Videogames</h1>
            <div class="app-section-entries">
                <!-- svelte-ignore a11y_no_static_element_interactions -->
                <div class="app-section-entry" on:mouseenter={() => { index = 0 }} on:mouseleave={() => { index = -1}}>
                    <div class="app-section-entry-background {index === 0 ? "app-section-entry-background-hover" : ""}" style:background-image="url(/a-portfolio/app-4/entry-0.jpg)"></div>
                    <div class="app-section-entry-foreground">
                        <h1 style:opacity={index === 0 ? 1 : 0}>Builder (TBD)</h1>
                    </div>
                </div>
                <!-- svelte-ignore a11y_no_static_element_interactions -->
                <div class="app-section-entry" on:mouseenter={() => { index = 1 }} on:mouseleave={() => { index = -1}}>
                    <div class="app-section-entry-background {index === 1 ? "app-section-entry-background-hover" : ""}" style:background-image="url(/a-portfolio/app-4/entry-1.jpg)"></div>
                    <div class="app-section-entry-foreground">
                        <h1 style:opacity={index === 1 ? 1 : 0}>DEngine</h1>
                    </div>
                </div>
                <!-- svelte-ignore a11y_no_static_element_interactions -->
                <div class="app-section-entry" on:mouseenter={() => { index = 2 }} on:mouseleave={() => { index = -1}}>
                    <div class="app-section-entry-background {index === 2 ? "app-section-entry-background-hover" : ""}" style:background-image="url(/a-portfolio/app-4/entry-2.gif)"></div>
                    <div class="app-section-entry-foreground">
                        <h1 style:opacity={index === 2 ? 1 : 0}>Exorcism Needed</h1>
                    </div>
                </div>
                <!-- svelte-ignore a11y_no_static_element_interactions -->
                <div class="app-section-entry" on:mouseenter={() => { index = 3 }} on:mouseleave={() => { index = -1}}>
                    <div class="app-section-entry-background {index === 3 ? "app-section-entry-background-hover" : ""}" style:background-image="url(/a-portfolio/app-4/placeholder.gif)"></div>
                    <div class="app-section-entry-foreground">
                        <h1 style:opacity={index === 3 ? 1 : 0}>WIP</h1>
                    </div>
                </div>
            </div>
        </div>
        <div class="app-section">
            <h1 class="app-section-title">3d/Animation</h1>
            <div class="app-section-entries">
                <!-- svelte-ignore a11y_no_static_element_interactions -->
                <div class="app-section-entry" on:mouseenter={() => { index = 4 }} on:mouseleave={() => { index = -1}}>
                    <div class="app-section-entry-background {index === 4 ? "app-section-entry-background-hover" : ""}" style:background-image="url(/a-portfolio/app-4/entry-3.jpg)"></div>
                    <div class="app-section-entry-foreground">
                        <h1 style:opacity={index === 4 ? 1 : 0}>Pod 042</h1>
                    </div>
                </div>
                <!-- svelte-ignore a11y_no_static_element_interactions -->
                <div class="app-section-entry" on:mouseenter={() => { index = 5 }} on:mouseleave={() => { index = -1}}>
                    <div class="app-section-entry-background {index === 5 ? "app-section-entry-background-hover" : ""}" style:background-image="url(/a-portfolio/app-4/entry-4.jpg)"></div>
                    <div class="app-section-entry-foreground">
                        <h1 style:opacity={index === 5 ? 1 : 0}>Path-tracer renderer</h1>
                    </div>
                </div>
                <!-- svelte-ignore a11y_no_static_element_interactions -->
                <div class="app-section-entry" on:mouseenter={() => { index = 6 }} on:mouseleave={() => { index = -1}}>
                    <div class="app-section-entry-background {index === 6 ? "app-section-entry-background-hover" : ""}" style:background-image="url(/a-portfolio/app-4/placeholder.gif)"></div>
                    <div class="app-section-entry-foreground">
                        <h1 style:opacity={index === 6 ? 1 : 0}>WIP</h1>
                    </div>
                </div>
            </div>
        </div>
        <div id="app-footer"></div>
    </div>

</div>