<script lang="ts">
	import { formatDate } from '$lib/utils'
	import * as config from '$lib/config'

	export let data
</script>

<svelte:head>
	<title>{config.title}</title>
</svelte:head>

<!-- Posts -->
<div class="tests">
	{#each data.posts as post}
		<div class="test">
			<a href={post.slug} class="title">
				<div class="preview" style:background-image="url({post.cover})"/>
			</a>
			<li class="post">
				<a href={post.slug} class="title">{post.title}</a>
				<p class="date">{formatDate(post.date)}</p>
				<p class="description">{post.description}</p>
			</li>
		</div>
	{/each}
</div>
	<!--ul class="posts">
		{#each data.posts as post}
			<li class="post">
				<a href={post.slug} class="title">{post.title}</a>
				<p class="date">{formatDate(post.date)}</p>
				<p class="description">{post.description}</p>
			</li>
		{/each}
	</ul-->

<style>

	.tests {
		width: 100%;
	}

	.test {
		width: 100%;
		height: 250px;
		background-color: rgba(83, 83, 83, 0.292);
		display: flex;
	}

	.test:not(:last-child) {
		margin-bottom: 25px;
	}

	.preview {
		width: 350px;
		height: 100%;
		background-color: #000000ff;
		background-position: center center;
		background-size: cover;
		background-repeat: no-repeat;
	}


	.posts {
		display: grid;
		gap: 2rem;
	}

	.post {
		margin-left: 30px;
		max-inline-size: var(--size-content-3);
		list-style-type: none;
	}

	.post:not(:last-child) {
		border-bottom: 1px solid var(--border);
		padding-bottom: var(--size-7);
	}

	.title {
		font-size: var(--font-size-fluid-3);
		text-transform: capitalize;
	}

	.date {
		color: var(--text-2);
	}

	.description {
		margin-top: var(--size-3);
	}
</style>
