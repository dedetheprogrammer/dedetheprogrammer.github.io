<script lang="ts">
    import * as config from "$lib/config.js"
    export let data
</script>

<svelte:head>
    <title>{config.title}</title>
</svelte:head>


<h1>Welcome to SvelteKit</h1>
<h1>Posts under #{data.category}</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<section>
    <ul class="posts">
        {#each data.posts as post}
            <li class="post">
                <a href={post.slug} class="title">{post.title}</a>
                <p class="date">{post.date}</p>
                <p class="description">{post.description}</p>
            </li>
        {/each}
    </ul>
</section>