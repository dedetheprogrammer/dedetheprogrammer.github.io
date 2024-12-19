<script lang="ts">
	import { tagBgColor, tagFgColor } from "$lib/utils"
    export let data

    let activeHeight : number = 0;
    let activeSlug   : string = ""; // Almacena el ID o 'slug' del post que está activo

    // Funciones para manejar los eventos de mouse
    function showTest(height: number, slug: string) {
        activeHeight = height;
        activeSlug   = slug; // Establece el post como activo, lo que hará que se muestre .test y se oculte .entry
    }

    function hideTest() {
        activeHeight = 0;
        activeSlug   = "";
    }
</script>

<style>

    :root {
        --page-header-navbar-height: 64px;
        --page-header-body-left-margin-left: 300px;
        --page-header-body-left-margin-right: 100px;
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
        width: 100%;
        height: calc(100% - var(--page-header-navbar-height));
        margin: var(--page-header-navbar-height) 0 0 0;
        display: flex;
    }

    #page-header-body-left {
        width: calc(50% - (var(--page-header-body-left-margin-left) + var(--page-header-body-left-margin-right)));
        height: 100%;
        margin-left: var(--page-header-body-left-margin-left);
        margin-right: var(--page-header-body-left-margin-right);
        display: flex;
        flex-direction: column;
        align-items: left;
        justify-content: center;
    }

    #page-header-body-left h4 {
        font-size: 64px;
        font-weight: normal;
    }

    #page-header-body-left p {
        font-size: 24px;
        color: rgb(212, 241, 179);
        text-align: justify;
    }

    #page-header-body-right {
        width: 50%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    #page-body {
        margin-bottom: calc(var(--page-x-margin-bottom) - var(--entries-gap));
    }

    #entries-less {
        width: calc(100% - 2 * var(--entries-margin-horizontal));
        margin: 0 var(--entries-margin-horizontal);
        display: flex;
        flex-wrap: wrap;
        gap: var(--entries-gap);
    }

    #entries-less figure {
        width: calc((100% - var(--entries-gap) * 3) / var(--entries-per-row));
        margin: 0 0 var(--entries-gap) 0;
        display: inline-block;
        background-color: rgb(212, 241, 179);
        position: relative;
    }

    #entries-more {
        width: calc(100% - 2 * var(--entries-margin-horizontal));
        margin: 0 var(--entries-margin-horizontal);
        column-count: var(--entries-per-row);
        gap: var(--entries-gap);
    }

    #entries-more figure {
        width: 100%;
        margin: 0 0 var(--entries-gap) 0;
        display: inline-block;
        background-color: rgb(212, 241, 179);
        position: relative;
    }

    .entry-background {
        width: 100%;
        height: 100%;
        background-size: cover;
        background-position: center center;
        background-repeat: no-repeat;
        position: absolute; /* Posiciona .test sobre el contenido de .entry */
        z-index: 1;         /* Asegura que .test quede en el fondo */
        opacity: 0;
        transition: opacity 0.3s ease; /* Transición suave */
    }
    .entry-background.opacity {
        opacity: 1;
    }

    .entry-foreground {
        width: calc(100% - 2 * var(--entry-margin));
        height: calc(100% - 2 * var(--entry-margin));
        margin: var(--entry-margin);
        display: flex;
        flex-direction: column;
        gap: 15px;
        position: relative; /* Posiciona .entry sobre .test */
        z-index: 2;         /* Asegura que .entry quede encima de .test */
        opacity: 1;
        transition: opacity 0.3s ease; /* Transición suave */
    }
    .entry-foreground.opacity {
        opacity: 0;
    }

    .entry-foreground img {
        cursor: pointer;
        border-radius: 3px;
    }

    .entry-moreground h1{

        font-size: 40px;
    }


    .entry-moreground p {
        font-size: 20px;
    }

    .entry-moreground {
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.219);
        backdrop-filter: blur(5px); /* Efecto desenfoque en el fondo */
        -webkit-backdrop-filter: blur(30px); /* Soporte para Safari */
        position: relative; /* Posiciona .entry sobre .test */
        z-index: 3;         /* Asegura que .entry quede encima de .test */
        opacity: 0;
        transition: opacity 0.3s ease; /* Transición suave */
    }
    .entry-moreground.opacity {
        opacity: 1;
    }

    .entry-moreground-body {
        padding: var(--entry-margin);
        display: flex;
        flex-direction: column;
        gap: 15px;
        color: white;
    }
    .entry-moreground-body p {
        color: rgb(194, 221, 161);
    }

    .entry-tags {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
    }

    .entry-tag {
        background-color: rgb(0, 0, 0);
        min-width: 32px;
        padding: 0 4px;
        border-radius: 2px;
        text-align: center;
        color: white;
    }

    a {
        text-decoration: none;
        color: white;
    }
    a:hover {
        text-decoration: line-through;
    }

    a h1 {
        font-weight: normal;
    }

    @media (max-width: 480px) {
        /* Estilos para dispositivos muy pequeños */
        :root {
        	--entries-margin-horizontal: 0px;
        }

        #page-header-foreground {
            position: absolute;
            width: 100%;
            height: calc(100% + var(--page-header-navbar-height));
            /* margin-top: var(--page-header-navbar-height); */
            background-color: rgba(0, 0, 0, 0.527);
        }

        #page-header {
            margin: 0;
        }

        #page-header-body {
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        #page-header-body-left {
            width: 100%;
            height: 40%;
            margin: 0;
            display: flex;
            justify-content: end;
        }

        #page-header-body-left h4 {
            text-align: center;
        }

        #page-header-body-left p {
            margin: 0 20px;
            text-align: center;
        }

        #page-header-body-right {
            width: 100%;
            height: 60%;
        }

        #page-body {
            margin: 0;
        }

        #entries-less, #entries-more {
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            gap: 0;
        }

        #entries-more figure, #entries-less figure {
            width: 100%;
            margin: 0;
        }

        #entries-more figure p, #entries-less figure p {
            width: 100%;
            margin: 0;
            font-size: 24px;
        }

    }

    @media (max-width: 768px) {
        /* Estilos para la mayoría de los teléfonos */
        :root {
        	--entries-margin-horizontal: 0px;
        }

        #page-header-foreground {
            position: absolute;
            width: 100%;
            height: calc(100% + var(--page-header-navbar-height));
            /* margin-top: var(--page-header-navbar-height); */
            background-color: rgba(0, 0, 0, 0.527);
        }

        #page-header {
            margin: 0;
        }

        #page-header-body {
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        #page-header-body-left {
            width: 100%;
            height: 40%;
            margin: 0;
            display: flex;
            justify-content: end;
        }
        
        #page-header-body-left h4 {
            text-align: center;
        }

        #page-header-body-left p {
            margin: 0 20px;
            text-align: center;
        }

        #page-header-body-right {
            width: 100%;
            height: 60%;
        }

        #page-body {
            margin: 0;
        }

        #entries-less, #entries-more {
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            gap: 0;
        }

        #entries-more figure, #entries-less figure {
            width: 100%;
            margin: 0;
        }

        #entries-more figure p, #entries-less figure p {
            width: 100%;
            margin: 0;
            font-size: 24px;
        }
    }

    @media (min-width: 768px) and (max-width: 1024px) {
    /* Estilos para tabletas en modo vertical y horizontal */
        /* Estilos para la mayoría de los teléfonos */
        :root {
        	--entries-margin-horizontal: 50px;
        }

        #page-header-foreground {
            position: absolute;
            width: 100%;
            height: calc(100% + var(--page-header-navbar-height));
            /* margin-top: var(--page-header-navbar-height); */
            background-color: rgba(0, 0, 0, 0.527);
        }

        #page-header {
            margin-bottom: 30px;
        }

        #page-header-body {
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        #page-header-body-left {
            width: 100%;
            height: 40%;
            margin: 0;
            display: flex;
            justify-content: end;
        }
        
        #page-header-body-left h4 {
            text-align: center;
            font-size: 76px;
        }

        #page-header-body-left p {
            margin: 0 20px;
            text-align: center;
            font-size: 26px;
        }

        #page-header-body-right {
            width: 100%;
            height: 60%;
        }

        #page-body {
            margin: 30px;
        }

        #entries-less, #entries-more {
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            gap: 10;
        }

        #entries-more figure, #entries-less figure {
            width: calc(100% - 100px); 
            margin: 0;
        }

        #entries-more figure p, #entries-less figure p {
            width: 100%;
            margin: 0;
            font-size: 24px;
        }
    }

    @media (min-width: 1024px) and (max-width: 1280px) {
        /* Estilos para dispositivos medianos */
        :root {
        	--entries-margin-horizontal: 20px;
            --entries-gap: 20px;
            --entries-per-row: 2;
        }

        #page-header-foreground {
            position: absolute;
            width: 100%;
            height: calc(100% + var(--page-header-navbar-height));
            /* margin-top: var(--page-header-navbar-height); */
            background-color: rgba(0, 0, 0, 0.527);
        }

        #page-header {
            margin-bottom: 30px;
        }

        #page-header-body {
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        #page-header-body-left {
            width: 100%;
            height: 40%;
            margin: 0;
            display: flex;
            justify-content: end;
        }
        
        #page-header-body-left h4 {
            text-align: center;
            font-size: 76px;
        }

        #page-header-body-left p {
            margin: 0 20px;
            text-align: center;
            font-size: 26px;
        }

        #page-header-body-right {
            width: 100%;
            height: 60%;
        }

        #page-body {
            margin: 0;
        }

        #page-body {
            margin-bottom: calc(var(--page-x-margin-bottom) - var(--entries-gap));
        }

        #entries-less {
            width: calc(100% - 2 * var(--entries-margin-horizontal));
            margin: 0 var(--entries-margin-horizontal);
            display: flex;
            flex-wrap: wrap;
            gap: var(--entries-gap);
        }

        #entries-less figure {
            width: calc((100% - var(--entries-gap) * 2) / var(--entries-per-row));
            margin: 0 0 0 0;
            display: inline-block;
            background-color: aquamarine;
            position: relative;
        }

        #entries-more {
            width: calc(100% - 2 * var(--entries-margin-horizontal));
            margin: 0 var(--entries-margin-horizontal);
            column-count: var(--entries-per-row);
            gap: var(--entries-gap);
        }

        #entries-more figure {
            width: 100%;
            margin: 0 0 var(--entries-gap) 0;
            display: inline-block;
            background-color: aquamarine;
            position: relative;
        }



    }

</style>

<div id="page-header">
    <div id="page-header-background"></div>
    <div id="page-header-foreground">
        <div id="page-header-body">
            <div id="page-header-body-left">
                <h4>Welcome back</h4>
                <p>Computer engineer in my full time, videogames developer, kind of a hacker student and an artist in my free time who also writes sometimes.</p>
            </div>
            <div id="page-header-body-right">
                Nothing to see here rn.
            </div>
        </div>
    </div>
</div>

<div id="page-body">
    <div id={data.posts.length <= 3 ? "entries-less" : "entries-more"}>
        {#each data.posts as post}
            <figure
                on:mouseover={(event) => showTest(activeSlug === post.slug ? activeHeight : event.currentTarget.offsetHeight , post.slug)} 
                on:mouseleave={() => hideTest()}
                on:focus={() => console.log("hi")}
            >
                <div class="entry-background" class:opacity={activeSlug === post.slug} style:background-image="url({post.cover})"></div>
                {#if activeSlug !== post.slug}
                    <div class="entry-foreground" class:opacity={activeSlug === post.slug}>
                        <img src={post.cover} alt={post.title}/>
                        <h1>{post.title}</h1>
                    </div>
                {:else}
                    <div class="entry-moreground" class:opacity={activeSlug === post.slug} style:height="{activeHeight + 0.25}px">
                        <div class="entry-moreground-body">
                            <a href="{post.slug}"><h1>{post.title}</h1></a>
                            <div class="entry-tags">
                                {#each post.tags as tag}
                                    <div class="entry-tag" style="background-color:{tagBgColor(tag, '#000000')}; color:{tagFgColor(tag, '#ffffff')}">{tag}</div>
                                {/each}
                            </div>
                            <p>{post.description}</p>
                        </div>
                    </div>
                {/if}
            </figure>
        {/each}
    </div>
</div>
