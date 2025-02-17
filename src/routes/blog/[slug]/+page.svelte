<script lang="ts">
	import { onMount } from "svelte";
	import { tagBgColor, tagFgColor } from "$lib/utils"
	export let data
	
	let articleProseRef: HTMLDivElement;
	onMount(() => {
		articleProseRef.querySelectorAll('a').forEach(link => {
			link.setAttribute('target', '_blank');
		});
	});
</script>

<style>

	main {
        width: min(90%, 800px);
		min-width: 300px;
        max-width: 100%;
		margin: 0 auto 0 auto;
        padding: 100px clamp(10px, 5vw, 20px) 100px clamp(10px, 5vw, 20px);
	}

	article {
		margin-bottom: 0px;
	}

	#article-title {
		margin-bottom: 10px;
		font-size: 50px;
		color: white;
	}

	#article-description {
		text-align: justify;
		margin-bottom: 15px;
	}

	#article-cover {
		width: 100%;
		aspect-ratio: 16 / 9;
		border-radius: 10px;
		margin-bottom: 10px;
		background-position: center center;
		background-repeat: no-repeat;
		background-size: cover;
	}

	#article-tags {
		margin-bottom: 30px;
		display: flex;
        flex-wrap: wrap;
        gap: 10px;
	}
	.article-tags-tag {
		background-color: aquamarine;
        min-width: 72px;
		padding: 2px 4px;
		height: fit-content;
		font-size: 12px;
		min-height: 24px;
        border-radius: 4px;
        text-align: center;
		display: flex;
		align-items: center;
		justify-content: center;
        color: rgb(0, 0, 0);
	}

</style>

<main>
	<article>
		<a id="go-back" href="/">Back</a>
		<h1 id="article-title">{data.meta.title}</h1>
		<!-- <p style:color="white">Published at {data.meta.date}</p> -->
		<p id="article-description">
			{data.meta.description}
		</p>
		<div id="article-cover" style:background-image="url({data.meta.cover})"></div>
		<div id="article-tags">
			{#each data.meta.tags as tag}
				<span class="article-tags-tag" style="background-color:{tagBgColor(tag, '#222222')}; color:{tagFgColor(tag, '#ffffff')}" >{tag}</span>
			{/each}
		</div>
		<div id="article-prose" bind:this={articleProseRef}>
			<svelte:component this={data.content} />
		</div>
	</article>
</main>
