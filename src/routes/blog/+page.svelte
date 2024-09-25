<script lang="ts">
    import Lazy from "$lib/lazy-load/lazy.svelte";
    import * as config from "$lib/config.js"
    export let data
</script>

<style>

    .posts {
        width: calc(100% - 500px);
        height: 100%;
    }
    .posts ul {
        width: 100%;
    }

    .post {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
    }
    .post:not(:last-child) {
        margin-bottom: 50px;
    }


    .post-cover {
        width: 400px;
        height: 250px;
        background-position: center center;
        background-size: cover;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
    }
    .post-cover video {
        width: 100%;
        height: auto;
    }

    .post-info {
        width: 100%;
        height: 100%;
        margin-left: 50px;
        display: flex;
        flex-direction: column;
    }
    .post-info-title {
        width: 100%;
        height: 15%;

    }
    .post-info-date {
        width: 100%;
        height: 5%;
    }
    .post-info-description {
        width: 100%;
        height: 65%;
    }
    .post-info-tags {
        width: 100%;
        height: 15%;
    }



</style>

<svelte:head>
    <title>{config.title}</title>
</svelte:head>

<div class="posts">
    <ul >
        {#each data.posts as post}
            <li class="post">
                <Lazy fadeOption={{delay:10, duration:400 }}>
                    {#if post.cover.endsWith(".jpg") || post.cover.endsWith(".png") || post.cover.endsWith(".gif")}
                        <div class="post-cover" style:background-image=url({post.cover}) />
                    {:else if post.cover.endsWith(".mp4")}
                        <div class="post-cover">
                            <!-- svelte-ignore a11y-media-has-caption -->
                            <video src={post.cover} autoplay loop muted />
                        </div>
                    {/if}
                </Lazy>
                <div class="post-info">
                    <div class="post-info-title"><a href={post.slug}><h1>{post.blog_title}</h1></a></div>
                    <p class="post-info-date">{post.date}</p>
                    <p class="post-info-description">{post.description}</p>
                    <div class="post-info-tags"></div> 
                </div>
            </li>
        {/each}
    </ul>
</div>

<!--div class="posts-">
    <ul class="posts-content">
        {#each data.posts as post}
            <li class="post">
                <a href={post.slug} class="title">{post.blog_title}</a>
                <p class="date">{post.date}</p>
                <p class="description">{post.description}</p>
            </li>
        {/each}
    </ul>
</div-->
