<script lang="ts">
	import PageTransition from '$lib/components/transition.svelte'
    import "../app.css"
    export let data
</script>

<style>
    #layout-header {
        width: 100%;
        height: var(--page-header-navbar-height);
        position: fixed;
        background-color: rgba(0, 0, 0, 0.342);
        backdrop-filter: blur(10px); /* Efecto desenfoque en el fondo */
        -webkit-backdrop-filter: blur(10px); /* Soporte para Safari */
        color: white;
        font-weight: 400px;
        font-size: 21px;
        z-index: 2;
        display: flex;
        align-items: center;
        justify-content: right; 
    }

    #layout-header-options {
        width: fit-content;
        height: fit-content;
        margin-right: 20px;
        display: flex;
        gap: 20px;
    }

    .layout-header-option {
        color: rgb(92, 131, 118);
    }
    .layout-header-option:hover {
        color: aquamarine;
    }

    #layout-footer {
        width: 100%;
        height: 50px;
        color: white;
        display: flex;
        align-items: end;
        justify-content: start;
    }

</style>

<div class="layout">
    <div id="layout-header">
        <div id="layout-header-options">
            <a class="layout-header-option" href="/">/home</a>
            <a class="layout-header-option" href="/">/projects</a>
        </div>
    </div>
    <main>
        <PageTransition url={data.url}>
            <slot />
        </PageTransition>
    </main>
    <div id="layout-footer">
        <span>Created by <a href="https://github.com/dedetheprogrammer">Dede</a>.</span>
    </div>
</div>