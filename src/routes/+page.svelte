<script lang="ts">
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
        background-image: url("/src/2.png");
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
        color: aquamarine;
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

    .entry-tags {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
    }

    .entry-tag {
        background-color: rgb(0, 0, 0);
        width: 32px;
        border-radius: 2px;
        text-align: center;
        color: white;
        cursor: pointer;
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
    <div id={data.posts.length < 3 ? "entries-less" : "entries-more"}>
        {#each data.posts as post}
            <figure
                class="entries-figure"
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
                                    <div class="entry-tag">{tag}</div>
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
