<script lang="ts">
    import Lazy from "$lib/lazy-load/lazy.svelte";

    export let data

    let headingWidth : number
    let headingHeight : number

</script>

<style>

    article {
        --margin-article: 150px;
        width: calc(100% - calc(2 * var(--margin-article)));
        height: calc(100% - 40px);
        margin: 20px var(--margin-article) 20px var(--margin-article);
    }

    article h1 {
        font-size: 72px;
    }

    article hgroup {
        margin-bottom: 50px;
    }

    .tags {
        margin: 10px 0px 30px 0px;
        display: flex;
        flex-wrap: wrap;
    }
    .tag {
        margin-right: 7px;
        padding: 10px;
        color: rgb(255, 251, 225);
        background-color: rgb(40, 40, 40);
        border-radius: 25px;
        cursor: pointer;
    }
    .tag:hover {
        color: rgb(40, 40, 40);
        background-color: rgb(255, 251, 225);
    }

    .cover {
        width: 100%;
        height: calc(calc(9 * var(--heading-width)) / 16);
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
    }
    .cover video {
        width: 100%;
        height: auto;
    }

    .prose {
        width: 100%;
        min-height: 820px;
        /*background-color: violet;*/
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .prose-content {
        width: calc(100% - 200px);
        min-height: calc(100% - 100px);
        margin: 50px 100px 50px 100px;
        /*background-color: blueviolet;*/
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }


</style>

<svelte:head>
    <title>{data.metadata.blog_title}</title>
    <meta property="og:type" content="article" />
    <meta property="og:title" content={data.metadata.blog_title} />
</svelte:head>


<article style:--heading-width="{headingWidth}px" bind:clientWidth={headingWidth}>
    <hgroup>
        <h1>{data.metadata.blog_title}</h1>
        <!-- svelte-ignore a11y-missing-attribute -->
        <p>Published at {data.metadata.date}</p>
        <div class="tags">
            {#each data.metadata.categories as category}
                <a href="/blog?categories={category}" class="tag">&num;{category}</a> 
            {/each}
        </div>
        <Lazy fadeOption={{delay:10, duration:400 }}>
            {#if data.cover.endsWith(".jpg") || data.cover.endsWith(".png") || data.cover.endsWith(".gif")}
                <div class="cover" style:background-image=url({data.cover}) />
            {:else if data.cover.endsWith(".mp4")}
                <div class="cover">
                    <!-- svelte-ignore a11y-media-has-caption -->
                    <video src={data.cover} autoplay loop muted />
                </div>
            {/if}
        </Lazy> 
    </hgroup>

    <div class="prose">
        <div class="prose-content">
            <svelte:component this={data.content} />
        </div>
    </div>

</article>