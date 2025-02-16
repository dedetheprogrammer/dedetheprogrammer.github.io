<script lang="ts">
	import '../app.css';
	import PageTransition from '$lib/components/transition.svelte'
    export let data
</script>

<style>
	footer {
		margin-top: 50px;
		width: 100%;
		font-size: 10px;
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>

<main>
	<PageTransition url={data.url}>
		<slot />
	</PageTransition>
	<footer>
		Powered by Github Pages
	</footer>
</main>
