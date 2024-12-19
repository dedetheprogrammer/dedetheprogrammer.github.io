<script lang="ts">

    /* Banner */
    const original = "Hi, I'm Dede, and this is what I do"

    /*
    let active = Array.from({length: original.length}, _ => false);  
    let state = "Scramble"
    let index = 0;
    let intervalId = [0, 0]
    function randomChar() {
        return String.fromCharCode(Math.floor((Math.random() * 300) + 1));
    }
    $: {
        clearInterval(intervalId[0])
        if (!active.every(v => v === true)) {
            intervalId[0] = setInterval(() => {
                let i = Math.floor(Math.random() * active.length)
                while (active[i]) {
                    i = Math.floor(Math.random() * active.length)
                }
                active[i] = true;
            }, 200)
        } else {
            setTimeout(() => { state = "Descramble" }, 500);
        }
    }


    $: {
        clearInterval(intervalId[1])
        if (state == "Scramble") {
            intervalId[1] = setInterval(() => {
                shuffled = ""
                for (let i = 0; i < active.length; i++) {
                    shuffled += (active[i]) ? 
                    randomChar() :
                    original.charAt(i)
                }
            }, 70)
        } else if (state == "Descramble") {
            intervalId[1] = setInterval(() => {
                active[index] = false;
                shuffled = original.substring(0, index)
                for (let i = index; i < original.length; i++) {
                    shuffled += randomChar()    
                }
                if (index++ === original.length) {
                    index = 0;
                    state = "Waiting"
                }
            }, 70)
        } else {
            setTimeout(() => { state = "Scramble"; }, 3000)
        }
    }*/

    let index = -1;

</script>

<style>

    :root {
        --content-margin: 120px;
        --home-banner-height: 150px;
    }

    #app-container {
        width: 100%;
        height: 500px;
        margin-top: 10px;
        overflow: hidden;
        background-color: rgb(7, 7, 7);
        position: relative;
        border-radius: 10px;
    }

    #app-header {
        width: 100%;
        height: var(--home-banner-height);
        display: flex;
        flex-direction: column;
    }

    #app-header-navbar {
        width: 100%;
        height: 40%;
        display: flex;
        align-items: center;
    }

    #app-header-navbar h3 {
        font-family: 'Inter', system-ui, 'Avenir', Helvetica, Arial, sans-serif;
        margin-left: 20px;
        color: black;
        filter: drop-shadow(2px 2px white);
    }
    #app-header-navbar h3:hover {
        color: white;
        filter: drop-shadow(2px 2px black);
        cursor: pointer;
    }

    #app-header-navbar ul {
        display: flex;
    }

    #app-header-navbar ul li {
        margin-left: 35px;
        color: white;
    }

    #app-header-navbar ul li p {
        font-size: 10px;
        font-family: 'Inter', system-ui, 'Avenir', Helvetica, Arial, sans-serif;
        color: white;
    }

    #app-header-navbar ul li p:hover {
        
        cursor:pointer;
        text-decoration: underline;
    }

    #app-header-title {
        width: 50%;
        height: 60%;
    }

    #app-header-title h1 {
        font-family: 'Inter', system-ui, 'Avenir', Helvetica, Arial, sans-serif;
        color: white;
        width: 300px;
        margin: 40px 0 0 var(--content-margin);
        font-size: 20px;
        text-align: left;
    }

    #app-header-socials {
        width: 50%;
        height: 100%;
        display: flex;
        align-items: start;
        justify-content: end;
    }

    #app-body {
        width: 100%;
        height: calc(100% - var(--home-banner-height));
        display: flex;
        align-items: center;
        justify-content: center;
    }

    #app-body-entries {
        width: calc(100% - 40px);
        height: calc(100% - 40px);
        display: flex;
        flex-wrap: wrap;
    }

    .entry {
        width: calc(100% / 3);
        height: calc(100% / 2);
        background-position: center center;
        background-size: cover;
        background-repeat: no-repeat;
    }
    .entry:hover {
        cursor: pointer;
    }
    .entry h1 {
        color:white;
        font-family: 'Inter', system-ui, Avenir, Helvetica, Arial, sans-serif;
        text-align: center;
    }

    .entry-background {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover; /* Asegura que el video llene el contenedor */
        z-index: 0; /* Coloca el video detrás del contenido */
    }

    .entry-foreground {
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.586);
        transition: opacity 0.1s ease-in;
        -webkit-transition: opacity 0.1s ease-in;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .is-video {
        position: relative;
        z-index: 2;
    }

    @media (max-width: 480px) {
        #app-header-navbar {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }

        #app-header-navbar h3 {
            margin: 0;
        }

        #app-header-navbar ul {
            gap: 30px;
        }

        #app-header-navbar ul li {
            margin: 5px 0 0 0;
            list-style: none;
        }

        #app-header-navbar ul li p {
            font-size: 15px;
        }

        #app-header-title {
            width: 100%;
            height: 40%;
            margin-top: 30px;
        }
        
        #app-header-title h1{
            width: calc(100% - 40px);
            margin: 20px 20px 0 20px;
            text-align: center;
        }

        #app-header-socials {
            display: none;
        }
    }



</style>

<div id="app-container">
    <div id="app-header">
        <div id="app-header-navbar">
            <h3>DEDE'S HUB</h3> 
            <ul>
                <li><p>Home</p></li>
                <li><p>Blog</p></li>
            </ul>
        </div>
        <div id="app-header-title">
            <h1>Hi, I'm Dede, and this is what I do 👍⬇️</h1>
        </div>
        <div id="app-header-socials"></div>
    </div>
    <div id="app-body">
        <div id="app-body-entries">
            <!-- svelte-ignore a11y_no_static_element_interactions -->
            <div class="entry" style:background-image="url(/a-portfolio/app-6/entry-0.jpg)" on:mouseenter={ () => {index = 0} } on:mouseleave={() => {index = -1}}>
                <div class="entry-foreground" style:opacity={index === 0 ? 1 : 0}><h1>LOST Fragment</h1></div>
            </div>
            <!-- svelte-ignore a11y_no_static_element_interactions -->
            <div class="entry" style:background-image="url(/a-portfolio/app-6/entry-1.jpg)" on:mouseenter={ () => {index = 1} } on:mouseleave={() => {index = -1}}>
                <div class="entry-foreground" style:opacity={index === 1 ? 1 : 0}><h1>DEngine - Ice Climber</h1></div>
            </div>
            <!-- svelte-ignore a11y_no_static_element_interactions -->
            <div class="entry" style:background-image="url(/a-portfolio/app-6/entry-2.jpg)" on:mouseenter={ () => {index = 2} } on:mouseleave={() => {index = -1}}>
                <div class="entry-foreground" style:opacity={index === 2 ? 1 : 0}><h1>A Blender's House</h1></div>
            </div>
            <!-- svelte-ignore a11y_no_static_element_interactions -->
            <div class="entry" style:position="relative" on:mouseenter={() => { index = 3 }} on:mouseleave={() => { index = -1 }}>
                <video autoplay muted loop class="entry-background">
                    <source src="/a-portfolio/app-6/entry-3.mp4" type="video/mp4" />
                </video>
                <div class="entry-foreground is-video" style:opacity={index === 3 ? 1 : 0}>
                    <h1>NieR Automata - Pod 042</h1>
                </div>
            </div>
            <!-- svelte-ignore a11y_no_static_element_interactions -->
            <div class="entry" style:background-image="url(/a-portfolio/app-6/entry-4.jpg)" on:mouseenter={ () => {index = 4} } on:mouseleave={() => {index = -1}}>
                <div class="entry-foreground" style:opacity={index === 4 ? 1 : 0}><h1>Path-tracer Renderer</h1></div>
            </div>
            <!-- svelte-ignore a11y_no_static_element_interactions -->
            <div class="entry" style:background-image="url(/a-portfolio/app-6/entry-5.jpg)" on:mouseenter={ () => {index = 5} } on:mouseleave={() => {index = -1}}>
                <div class="entry-foreground" style:opacity={index === 5 ? 1 : 0}><h1>First post</h1></div>
            </div>
        </div>
    </div>
</div>