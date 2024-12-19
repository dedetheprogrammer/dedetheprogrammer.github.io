<script>
	import { page } from '$app/stores'
</script>

<style>
	.error {
		height: 100%;
		display: grid;
		place-content: center;
	}
</style>

<div class="error">
	<h1>{$page.status}: {$page.error?.message}</h1>
</div>