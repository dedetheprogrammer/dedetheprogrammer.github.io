<script lang="ts">
    import { onMount } from 'svelte';

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

    @import url('https://fonts.googleapis.com/css2?family=Quicksand&display=swap');

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
    
    #page-container {
        width: 100%;
        height: 500px;
        overflow: hidden;
        background-image: url("/a-portfolio/app-1/background.jpg");
        background-size: cover;
        background-position: center center;
        border-radius: 10px;
    }

    #loading-screen {
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.438);
        backdrop-filter: blur(1px); /* Efecto desenfoque en el fondo */
        -webkit-backdrop-filter: blur(1px); /* Soporte para Safari */
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    #loading-screen h1,h2 {
        color: white;
        font-family: 'Quicksand', sans-serif;
    }

    #message-coming-soon {
        margin-top: 150px;
    }

    #message-tip {
        font-size: 20px;
        animation-duration: 10s;
    }

    .lds-container {
        margin-top: 100px;
    }

    .lds-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 4px;
      width: 50px;
      height: 50px;
    }
    .lds-grid div {
      width: 12px;
      height: 12px;
      background-color: #fff;
      border-radius: 50%;
      animation: lds-grid 1.2s linear infinite;
    }
    .lds-grid div:nth-child(1) {
      animation-delay: -0.4s;
    }
    .lds-grid div:nth-child(2) {
      animation-delay: -0.3s;
    }
    .lds-grid div:nth-child(3) {
      animation-delay: -0.2s;
    }
    @keyframes lds-grid {
      0% {
        transform: scale(0);
      }
      50% {
        transform: scale(1);
      }
      100% {
        transform: scale(0);
      }
    }

  </style>
  
<div id="page-container">
    <div id="loading-screen">
        <h1 id="message-coming-soon">COMING SOON</h1>
        <h2 bind:this={tipRef} id='message-tip' class={`animated ${(tipState === 'fadeIn') ? 'fadeIn' : (tipState === 'fadeOut') ? 'fadeOut' : ''}`}>{tip}</h2>
        <div class="lds-container">
            <div class="lds-grid">
                <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
            </div>
        </div>
    </div>
</div>

  