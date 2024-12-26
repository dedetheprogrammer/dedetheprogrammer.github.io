<script lang="ts">
    import { onMount } from "svelte";
	import { tagBgColor, tagFgColor } from "$lib/utils"
    export let data

    let activeSocial: string = "";
    function setSocial(social: string = "") {
        activeSocial = social;
    }
    let activeSlug : string = ""; // Almacena el ID o 'slug' del post que está activo
    // Funciones para manejar los eventos de mouse
    function setSlug(slug: string = "") {
        activeSlug = slug;
    }

    // let entryActive: HTMLDivElement;
    // let entryHidden: HTMLDivElement;

    let activeEntries: HTMLDivElement[] = new Array(data.posts.length);
    let hiddenEntries: HTMLDivElement[] = new Array(data.posts.length);

    onMount(() => {
        console.log(activeEntries)
        console.log(hiddenEntries)
    })


</script>

<style>

    @import url('https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300..900;1,300..900&display=swap');

    :root {
        --page-header-navbar-height: 64px;
        --page-header-body-margin-horizontal: 100px;
        --page-x-margin-bottom: 96px;
        --entries-margin-horizontal: 300px;
        --entries-per-row: 3;
        --entries-gap: 30px;
        --entry-margin: 30px;
    }

    #page-header {
        width: 100%;
        height: 100vh;
        background-color: rgb(5, 5, 5);
        color: white;
        display: flex;
        margin-bottom: var(--page-x-margin-bottom);
    }

    #page-header-background {
        position: relative;
        width: 100%;
        height: 100%;
        background-image: url("/background.png");
        background-position: center center;
        background-size: cover;
    }

    #page-header-foreground {
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.527);
    }

    #page-header-body {
        width: calc(100% - 2 * var(--page-header-body-margin-horizontal));
        height: calc(100% - var(--page-header-navbar-height));
        padding: var(--page-header-navbar-height) var(--page-header-body-margin-horizontal) 0 var(--page-header-body-margin-horizontal);
        display: flex;
        flex-direction: column;
    }

    #page-header-body-left {
        width: 100%;
        height: 40%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    #page-header-body-left h4 {
        font-size: 64px;
        font-weight: normal;
        text-align: center;
    }

    #page-header-body-left p {
        width: 100%;
        font-size: 24px;
        color: rgb(212, 241, 179);
        text-align: center;
    }

    #page-header-body-right {
        width: 100%;
        height: 60%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: start;
        gap: 30px;
        font-size: 20px;
    }

    #page-header-body-right p {
        height: 20%;
        text-align: center;
    }

    #socials {
        width: 100%;
        height: 80%;
        display: flex;
        justify-content: center;
        gap: 10px;
    }

    #socials-cat {
        aspect-ratio: 1/1; /* Hace que el alto sea igual al ancho */
        height: 100%;
        border-radius: 10px;
        background-image: url("/working-cat.gif");
        background-repeat: no-repeat;
    }

    #socials-body {
        width: 200px;
        height: 100%;
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    #socials-body a {
        width: 100%;
        height: calc(100% / 3);
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 20px;
        border-radius: 10px;
        text-decoration: none;
        color: white;
    }
    #socials-body a:hover {
        cursor: pointer;
    }
    .socials-body-icon {
        width: 100px;
        height: 100px;
        background-position: center center;
        background-repeat: no-repeat;
        background-size: 40%;
        transition: background-position 0.2s ease-in-out;
    }
    .socials-body-icon h1 {
        font-size: 20px;
        word-break: break-all;
        margin: 0 0 0 80px;
        opacity: 0%;
        transition: opacity 0.2s ease-in-out;
        font-family: "Rubik", serif;
    }

    #socials-linkedin {
        background-color: #007ebb;
        background-image: url(/icons/linkedin.svg);
    }
    #socials-itch-io {
        background-color: #fa5c5c;
        background-image: url(/icons/itch-io.png);
    }
    #socials-github {
        background-color: #f3f3f3;
        background-image: url(/icons/github.svg);
    }
    #socials-github h1 {
        color: #1b1f23;
    }

    #page-body {
        margin-bottom: calc(var(--page-x-margin-bottom) - var(--entries-gap));
        display: flex;
        justify-content: center;
    }

    .entries {
        width: calc(100% - 2 * var(--entries-margin-horizontal));
        margin: 0 var(--entries-margin-horizontal);
        gap: var(--entries-gap);
    }

    #entries-less-than-n {
        display: flex;
        justify-content: left;
        flex-wrap: wrap;
        flex-grow: 1;
    }
    #entries-less-than-n figure {
        width: calc((100% - var(--entries-gap) * (var(--entries-per-row) - 1)) / var(--entries-per-row));
    }
    #entries-less-than-n .entry {
        margin: 0 0 var(--entries-gap) 0;
    }

    #entries-more-than-n {
        column-count: var(--entries-per-row);
    }
    #entries-more-than-n figure {
        width: 100%;
        break-inside: avoid;
    }
    #entries-more-than-n .entry {
        margin: 0 0 var(--entries-gap) 0;
    }

    .entry {
        height: fit-content;
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
        position: relative;
    }
    .entry a {
        width: fit-content;
        color: rgb(212, 241, 179);
    }
    .entry a:hover {
        color: rgb(197, 255, 131);
    }
    .entry a h1 {
        font-size: 36px;
        font-weight: normal;
    }
    .entry p {
        color: rgb(235, 235, 235);
        font-size: 22px;
        text-align: justify;
        overflow-wrap: break-word; /* Propiedad moderna */
        white-space: normal; /* Permite que el texto se ajuste */
    }
    .entry-body-active {
        width: calc(100% - 2 * var(--entry-margin));
        padding: var(--entry-margin);
        background-color: #000000af;
        backdrop-filter: blur(5px);
        -webkit-backdrop-filter: blur(30px);
        display: flex;
        flex-direction: column;
        gap: 15px;
        transition: opacity 0.3s ease; 
    }
    .entry-body-active.opacity {
        opacity: 0;
    }

    .entry-body-hidden {
        width: calc(100% - 2 * var(--entries-gap));
        padding: var(--entries-gap);
        position: absolute;
        bottom: 0;
        transition: opacity 0.3s ease; 
        display: flex;
        align-items: end;
        background-color: #00000069;
    }
    .entry-body-hidden.opacity {
        opacity: 0;
    }
    .entry-body-hidden h1 {
        color: white;
        font-weight: normal;
        filter: drop-shadow(black 5px 5px 5px);
    }
 
    .entry-tags {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
    }

    .entry-tag {
        min-width: 32px;
        padding: 1px 4px;
        border-radius: 2px;
        text-align: center;
        background-color: white;
    }


    @media (max-width: 600px) {
        :root {
            --entries-margin-horizontal: 0px;
            --entries-per-row: 1;
        } 

        #socials {
            align-items: center;
            justify-content: center;
            flex-direction: column;
            gap: 10px
        }

        #socials-cat {
            aspect-ratio: 1/1;
            height: 50%;
        }

        #socials-body {
            width: 100%;
            height: 20%;
            align-items: center;
            justify-content: center;
            flex-direction: row;
        }
                
        #socials-body a {
            width: 100%;
            height: 100%;
        }

        .socials-body-icon {
            height: 100%;
        }

        #entries-less-than-n .entry {
            margin: 0;
        }
    }

    @media (min-width: 601px) and (max-width: 768px) {
        :root {
            --entries-margin-horizontal: 150px;
            --entries-per-row: 1;
        }

        #socials {
            align-items: center;
            justify-content: center;
            flex-direction: column;
            gap: 10px
        }

        #socials-cat {
            aspect-ratio: 1/1;
            height: 70%;
        }

        #socials-body {
            width: 100%;
            height: 20%;
            align-items: center;
            justify-content: center;
            flex-direction: row;
        }
                
        #socials-body a {
            width: 100%;
            height: 100%;
        }

        .socials-body-icon {
            height: 100%;
        }

        #entries-less-than-n .entry {
            margin: 0;
        }
    }

    @media (min-width: 769px) and (max-width: 1050px) {
        :root {
            --entries-margin-horizontal: 100px;
            --entries-per-row: 2;
        }
        #entries-less-than-n .entry {
            margin: 0;
        }
    }

    @media (min-width: 1051px) and (max-width: 1280px) {
        :root {
            --entries-margin-horizontal: 200px;
            --entries-per-row: 2;
        }
        #entries-less-than-n .entry {
            margin: 0;
        }
    }

    @media (min-width: 1281px) and (max-width: 1440px) {
        :root {
            --entries-margin-horizontal: 150px;
            --entries-per-row: 3;
            --page-header-body-left-margin-left: 200px;
            --page-header-body-left-margin-right: var(--page-header-body-left-margin-left);
        }
        #entries-less-than-n .entry {
            margin: 0;
        }
    }

</style>

<svelte:head>
	<title>Dede's Hub</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content="Dede's Hub" />
</svelte:head>

<div id="page-header">
    <div id="page-header-background"></div>
    <div id="page-header-foreground">
        <div id="page-header-body">
            <div id="page-header-body-left">
                <h4>Welcome back</h4>
                <p>Computer engineer in my full time, videogames developer, kind of a hacker student and an artist in my free time who also writes sometimes.</p>
            </div>
            <div id="page-header-body-right">
                <div id="socials">
                    <div id="socials-cat"></div>
                    <div id="socials-body">
                        <!-- svelte-ignore a11y_mouse_events_have_key_events -->
                        <a
                            on:mouseover ={() => setSocial("linkedin")} 
                            on:mouseleave={() => setSocial()}
                            id="socials-linkedin"
                            class="socials-body-icon"
                            href="https://www.linkedin.com/in/ddok/"
                            aria-label="Linkedin"
                            target="_blank"
                            style:background-position="{activeSocial === "linkedin" ? "10%" : "center"} center"
                        >
                            <h1 style:opacity={activeSocial === "linkedin" ? "100%" : "0%"}>Linkedin</h1>
                        </a>
                        <!-- svelte-ignore a11y_mouse_events_have_key_events -->
                        <a
                            on:mouseover ={() => setSocial("itch.io")} 
                            on:mouseleave={() => setSocial()}
                            id="socials-itch-io"
                            class="socials-body-icon"
                            href="https://varondede.itch.io"
                            aria-label="Itch.io"
                            target="_blank"
                            style:background-position="{activeSocial === "itch.io" ? "10%" : "center"} center"
                        >
                            <h1 style:opacity={activeSocial === "itch.io" ? "100%" : "0%"}>Itch.io</h1>
                        </a>
                        <!-- svelte-ignore a11y_mouse_events_have_key_events -->
                        <a
                            on:mouseover ={() => setSocial("github")} 
                            on:mouseleave={() => setSocial()}
                            id="socials-github"
                            class="socials-body-icon"
                            href="https://github.com/dedetheprogrammer"
                            aria-label="Github"
                            target="_blank"
                            style:background-position="{activeSocial === "github" ? "10%" : "center"} center"
                        >
                            <h1 style:opacity={activeSocial === "github" ? "100%" : "0%"}>Github</h1>
                        </a>
                    </div>
                </div>
                <p>Please, be patient, I'm working step by step to maintain the quality of the page.</p>
            </div>
        </div>
    </div>
</div>

<div id="page-body">
    <div id={data.posts.length <= 3 ? "entries-less-than-n" : "entries-more-than-n"} class="entries">
        {#each data.posts as post, index}
            <!-- svelte-ignore a11y_mouse_events_have_key_events -->
            <figure
                class="entry"
                on:mouseover ={() => setSlug(post.slug)} 
                on:mouseleave={() => setSlug()}
                style:background-image="url({post.cover})"
            >
                <div class="entry-body-hidden" class:opacity={activeSlug === post.slug}>
                    <h1>{post.title}</h1>
                </div>
                <div class="entry-body-active" class:opacity={activeSlug !== post.slug}>
                    <a href="{post.slug}"><h1>{post.title}</h1></a>
                    <div class="entry-tags">
                        {#each post.tags as tag}
                            <div class="entry-tag" style="background-color:{tagBgColor(tag, '#111111')}; color:{tagFgColor(tag, '#ffffff')}">{tag}</div>
                        {/each}
                    </div>
                    <p>{post.description}</p>
                </div>
            </figure>
        {/each}
    </div>
</div>
