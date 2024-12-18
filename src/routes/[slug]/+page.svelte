<script lang="ts">
	// import { formatDate } from '$lib/utils'
	export let data
</script>

<style>

	article {
		/* background-color: aliceblue; */
		min-height: 100vh;
		max-inline-size: var(--size-content-3);
		margin: 0 400px;
		padding: 100px;
	}

	article img {
		width: 100%;
	}

	#title {
		margin-bottom: 10px;
		font-size: 96px;
		font-weight: 100;
		color: white;
	}

	#tags {
		margin-bottom: 30px;
		display: flex;
        flex-wrap: wrap;
        gap: 10px;
    }

    .tag {
        background-color: rgb(0, 0, 0);
        width: 72px;
		height: 32px;
        border-radius: 4px;
        text-align: center;
		display: flex;
		align-items: center;
		justify-content: center;
        color: white;
    }

</style>

<!-- SEO -->
<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<article>
  	<!-- Title -->
	<hgroup>
		<h1 id="title">{data.meta.title}</h1>
		<!-- <p>Published at {formatDate(data.meta.date)}</p> -->
	</hgroup>

	<img src={data.meta.cover} alt="a">

  	<!-- Tags -->
	<div id="tags">
		{#each data.meta.tags as tag}
			<span class="tag">{tag}</span>
		{/each}
	</div>

  	<!-- Post -->
	<div class="prose">
		<svelte:component this={data.content} />
	</div>
</article>