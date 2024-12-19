<script lang="ts">
	export let data
</script>

<style>

	article {
		min-height: 100vh;
		margin: 0px 350px 0px 350px;
		padding: 100px;
	}

	article img {
		width: 100%;
		border-radius: 10px;
		margin-bottom: 10px;
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
        background-color: aquamarine;
        width: 72px;
		height: 32px;
        border-radius: 4px;
        text-align: center;
		display: flex;
		align-items: center;
		justify-content: center;
        color: rgb(0, 0, 0);
		font-size: 24px;
    }

	@media (max-width: 480px) {

		article {
			min-height: 100vh;
			margin: 0;
			padding: 60px 10px;
		}

		#title {
			font-size: 72px;
		}

    }

    @media (max-width: 768px) {
		article {
			min-height: 100vh;
			margin: 0;
			padding: 60px 10px;
		}

		#title {
			font-size: 72px;
		}
	}

    @media (min-width: 768px) and (max-width: 1024px) {
		article {
			min-height: 100vh;
			margin: 0 100px;
			padding: 60px 10px;
		}

		#title {
			font-size: 72px;
		}
	}

	@media (min-width: 1024px) and (max-width: 1280px) {
		article {
			min-height: 100vh;
			margin: 0 150px;
			padding: 60px 10px;
		}

		#title {
			font-size: 72px;
		}
    }

	@media (min-width: 1281px) and (max-width: 1600px) {
		article {
			min-height: 100vh;
			margin: 0 300px;
			padding: 60px 10px;
		}

		#title {
			font-size: 72px;
		}
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
	<h1 id="title">{data.meta.title}</h1>
	<!-- <p style:color="white">Published at {data.meta.date}</p> -->
	<img src="{data.meta.cover}" alt="Post cover">

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