<script lang="ts">
    import Terminal from "$lib/terminal.svelte"
    import Footer from "./footer.svelte"
	import Header from "./header.svelte";
	import PageTransition from "./transition.svelte";

    export let data
</script>

<main>
    <PageTransition url={data.url}>
        <Terminal /> 
        <Header />
        <div class="content">
            <slot />
        </div>
        <Footer />
    </PageTransition>
</main>

<style>
    main {
        width: 100%;
        height: 100%;
    }

    .content {
        width: 100%;
        height: 100%;
        margin-top: 50px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

</style>
