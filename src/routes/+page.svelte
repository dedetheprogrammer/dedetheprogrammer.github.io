<script lang="ts">
	import { formatDate } from '$lib/utils'
	import * as config from '$lib/config'

	export let data
</script>

<svelte:head>
	<title>{config.title}</title>
</svelte:head>

<!-- Posts -->
<!--div style="width:100%; height: 500px; background-color:darkkhaki; margin-bottom: 30px;">
a
</div-->
<!--div class="tests">
	{#each data.posts as post}
		<div class="test">
			<a href={post.slug} 
				style="
				width:350px;
				height: 100%;
				display:flex;
				align-items:center;
				justify-content: center;
				margin:0;
				padding:0;"
			>
				<div class="preview" style:background-image="url({post.cover})"/>
			</a>
			<div class="test-in">
				<a href={post.slug} class="title">{post.title}</a>
				<div class="date">{formatDate(post.date)}</div>
				<div class="description">{post.description}</div>
				<div class="tags">

				</div>
			</div>
		</div>
	{/each}
</div-->



<!--div style="width: 100%; height: 680px; background-color: #dddddd; display:flex; align-items:center; justify-content:center; color:black; margin-bottom: 50px;">
ELDEN RIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIING
</div-->
<div style="width: 100%; display:flex; align-items:center; justify-content:center;">
	<div style="width:calc(100% - 300px);">
		{#each data.posts as post}
			<div style="width:100%; height:230px; margin-bottom:20px; display:flex;">

				<div style="width: 370px; height: 100%; padding: 15px 0px;">
					<a href={post.slug}>
						<div class="post-cover" style="background-image:url({post.cover})" />
					</a>
				</div>

				<div style="width:calc(100% - 220px); height: 100%; padding: 25px; ">
					<div style="width:100%; height:20px; margin-bottom: 5px; display:flex; align-items:center; font-size: 14px; font-weight:100; color: #eeeeee;">{formatDate(post.date)}</div>
					<div style="width:100%; min-height:35px; display:flex; font-size:17px; letter-spacing: 0.5px; font-weight:bolder; align-items:center; color: #eeeeee;">
						<a href={post.slug}>{post.title}</a>
					</div>
					<div style="width:100%; font-size:17px; letter-spacing: 0.5px; color: #eeeeee;">{post.description}</div>
				</div>
			</div>
		{/each}
	</div>
	<div style="width:400px; background-color: #bbbbbb; padding: 15px">
		<div style="width:100%; background-color: #aaaaaa"></div>
	</div>
</div>

<style>

	.post-cover {
		width:100%;
		height:100%; 
		background-position: center center;
		background-size: cover;
		border: solid 7px black;
		border-radius: 10px;
		transition: border 0.3s ease-in-out;
		transition: transform 0.4s ease-in-out;
	}
	.post-cover:hover {
		border: solid 7px white;
		transform: scale(1.4) rotate(5deg)
	}

	.tests {
		margin: 0px 150px;
		width: calc(100% - 300px);
		
	}

	.test {
		width: 100%;
		height: 250px;
		display: flex;
	}

	.test-in {
		width: calc(100% - 60px - 350px);
		height: 100%;
		margin: 0px 30px;
		background-color: aquamarine;
		display: flex;
		flex-direction: column;
	}

	.test:not(:last-child) {
		margin-bottom: 30px;
	}

	.preview {
		width: 100%;
		height: 90%;
		margin: 0px;
		padding: 0px;
		background-color: #000000ff;
		background-position: center center;
		background-size: cover;
		background-repeat: no-repeat;
		border-radius: 25px;
	}


	.posts {
		display: grid;
		gap: 2rem;
	}

	.post {
		width: 700px;
		height: calc(100% - 60px);
		margin: 30px;
		background-color: black;
		list-style-type: none;
	}

	.post:not(:last-child) {
		border-bottom: 1px solid var(--border);
		padding-bottom: var(--size-7);
	}

	.title {
		width: 100%;
		height: fit-content;
		margin: 0;
		font-size: var(--font-size-fluid-2);
		text-transform: capitalize;
		background-color: aqua;
	}

	.date {
		color: var(--text-2);
		background-color: rgb(0, 231, 231);
	}

	.description {
		height: 40%;
		margin-top: var(--size-3);
		background-color: rgb(14, 141, 99);
	}
</style>
