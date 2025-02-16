<script lang="ts">
    export let data;
</script>

<style>

    :root {
        --socials-n-entries: 3;
        --featured-n-entries: 3;
    }

    header {
        width: 100%;
        height: 300px;
        margin-top: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 20px;
    }

    #header-picture {
        width: 130px;
        border-radius: 50%;
        border: solid 15px black;
        box-sizing: content-box;
    }

    #header-biography {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 10px;
    }

    main {
        width: min(90%, 800px);
        min-width: 300px;
        max-width: 100%;
        margin: 0 auto 0 auto;
        padding: 0 clamp(10px, 5vw, 20px);
    }

    section {
        width: 100%;
        margin-bottom: 40px;
    }
    section > * {
        margin-bottom: 20px;
    }

    #socials {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
    }
    .socials-entry {
        width: calc((100% - (var(--socials-n-entries) - 1) * 10px) / var(--socials-n-entries));
        max-width: calc((100% - (var(--socials-n-entries) - 1) * 10px) / var(--socials-n-entries));
        aspect-ratio: 16 / 9;
        background-color: gainsboro;
        border-radius: 10px;
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
        overflow: hidden;
    }
    .socials-entry a {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0%;
        transition: opacity 0.15s ease-in-out;
    }
    .socials-entry a:hover {
        box-shadow: 0px 3px 10px rgba(0,0,0,.25);
        opacity: 100%;
    }
    .socials-entry a img {
        width: 90px;
    }

    #socials-entry-bluesky {
        background-color: #0085FF;
    }
    #socials-entry-instagram {
        background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%);
    }
    #socials-entry-github {
        background-color: #24292E;
    }

    .highlights-entry {
        width: 100%;
        background-color: rgb(16, 17, 19);
        border-radius: 10px;
        overflow: hidden;
        display: flex;
        flex-direction: column;
    }
    .highlights-entry-cover {
        width: 100%;
        aspect-ratio: 16 / 9;
        background-position: center 35%;
        background-repeat: no-repeat;
        background-size: cover;
    }
    .highlights-entry-description {
        width: calc(100% - 2 * 25px);
        margin: 35px 25px;
        display: flex;
        flex-direction: column;
        gap: 15px;
    }
    /*
    #featured {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
    }
    .featured-entry {
        width: calc(100% / var(--featured-n-entries) - 2 * 20px);
        aspect-ratio: 3 / 4;
        perspective: 1000px;
        background-color: #000000;
        border-radius: 15px;
        position: relative;
    }
    .featured-entry:hover .featured-entry-flipper {
        transform: rotateY(180deg);
    }
    .featured-entry-flipper {
        width: 100%;
        height: 100%;
        position: absolute;
        transition: transform 0.6s ease;
        transform-style: preserve-3d;
    }
    .featured-entry-flipper:hover {
        transform: rotateY(180deg);
    }

    .featured-entry-flipper-front, .featured-entry-flipper-back {
        width: 100%;
        height: 100%;
        position: absolute;
        backface-visibility: hidden;
        border-radius: 15px;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
    }
    .featured-entry-flipper-face {
        width: calc(100% - 2 * 20px);
        height: calc(100% - 2 * 10px);
        padding: 10px 20px;
    }
    .featured-entry-flipper-front {
        position: absolute;
        z-index: 0;
        background: linear-gradient(
            45deg,
            #999 5%,
            #fff 10%,
            #ccc 30%,
            #ddd 50%,
            #ccc 70%,
            #fff 80%,
            #999 95%
        );
        display: flex;
        flex-direction: column;
        align-items: start;
        justify-content: start;
        gap: 5px;
    }
    .featured-entry-flipper-front::before {
        content: "";
        position: absolute;
        width: 96.5%;
        height: 97.5%;
        top: 1.2%;
        left: 1.8%;
        background-color: rgb(16, 17, 19);
        border-radius: 14px;
        z-index: -1;
        pointer-events: none;
    }

    .featured-entry-flipper-back {
        background-color: rgb(16, 17, 19);
        color: white;
        transform: rotateY(180deg);
    }
    .featured-entry-flipper-back a {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        text-decoration: none;
        color: rgb(172, 241, 155);
    }
    .featured-entry-flipper-back a:hover {
        color: rgb(172, 241, 155);
    }

    .featured-entry-cover-border {
        width: 100%;
        aspect-ratio: 4 / 3;
        background: linear-gradient(
            45deg,
            #999 5%,
            #fff 10%,
            #ccc 30%,
            #ddd 50%,
            #ccc 70%,
            #fff 80%,
            #999 95%
        );
        border-radius: 10px;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .featured-entry-cover {
        background-size: cover;
        background-position: center center;
        width: calc(100% - 8px);
        height: calc(100% - 8px);
        border-radius: 8px;
    }
    */

</style>

<header>
    <img id="header-picture" src="/profile_picture.gif" alt="Profile"/>
    <div id="header-biography">
        <h2>Dede has a lot of socials</h2>
        <p>Traditional and 2D pixel artist.</p>
    </div>
</header>

<main>
    <section>
        <h1>Let's connect!</h1>
        <div id="socials">
            <div class="socials-entry"  style:background-image="url(/images/thumbnail_bluesky.gif)">
                <a id="socials-entry-bluesky" href="https://bsky.app/profile/yosoydede.bsky.social/" target="_blank" aria-label="Bluesky">
                    <img src="/icons/bluesky.svg" alt="Bluesky icon"/>
                </a>
            </div>
            <div class="socials-entry" style:background-image="url(/images/thumbnail_instagram.jpg)">
                <a id="socials-entry-instagram" href="https://www.instagram.com/dede_makes_things/" target="_blank" aria-label="Instagram">
                    <img src="/icons/instagram.svg" alt="Instagram icon"/>
                </a>
            </div>
            <div class="socials-entry" style:background-image="url(/images/thumbnail_github.gif)">
                <a id="socials-entry-github" href="https://github.com/dedetheprogrammer" target="_blank" aria-label="Instagram">
                    <img src="/icons/github.svg" alt="Github icon"/>
                </a>
            </div>
        </div>
    </section>
    <section>
        <h1>Highlights!</h1>
        {#each data.highlights as post}
            <div class="highlights-entry">
                <div class="highlights-entry-cover" style:background-image="url({post.cover})"></div>
                <div class="highlights-entry-description">
                    <h2><a href="/{post.slug}">{post.title}</a></h2>
                    <p>{post.description}</p>
                </div>
            </div>
        {/each}
    </section>
    <section>
        <!--
        <h1>Projects!</h1>
        <div id="featured">
            {#each data.featured as post}
                <div class="featured-entry">
                    <div class="featured-entry-flipper">
                        <div class="featured-entry-flipper-face featured-entry-flipper-front">
                            <h4>{post.featuredTitle}</h4>
                            <div class="featured-entry-cover-border">
                                <div class="featured-entry-cover" style="background-image: url({post.cover})"></div>
                            </div>
                        </div>
                        <div class="featured-entry-flipper-face featured-entry-flipper-back">
                            <a href="{post.slug}">
                                {post.description}
                            </a>
                        </div>
                    </div>
                </div>
            {/each}
        </div>
        -->
    </section>
</main>

