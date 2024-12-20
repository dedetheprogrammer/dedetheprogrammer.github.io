<script lang="ts">
	import PageTransition from '$lib/components/transition.svelte'
    import "../app.css"
    export let data
</script>

<style>

    #layout-header {
        width: 100%;
        height: 64px;
        position: fixed;
        background-color: rgba(0, 0, 0, 0.342);
        backdrop-filter: blur(10px); /* Efecto desenfoque en el fondo */
        -webkit-backdrop-filter: blur(10px); /* Soporte para Safari */
        color: white;
        font-weight: 400px;
        font-size: 21px;
        z-index: 10;
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
        color: rgb(190, 255, 115);
    }

    /* #layout-footer {
        width: 100%;
        height: 50px;
        color: white;
        display: flex;
        align-items: end;
        justify-content: center;
    } */

    @media (max-width: 480px) {
        #layout-header-options {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0;
            gap: 30px;
        }

        #layout-header-options a {
            font-size: 24px;
        }

    }

    @media (max-width: 768px) {
        /* Estilos para la mayoría de los teléfonos */
        #layout-header-options {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0;
            gap: 30px;
        }

        #layout-header-options a {
            font-size: 24px;
        }

    }

    @media (min-width: 768px) and (max-width: 1024px) {
        #layout-header-options {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0;
            gap: 30px;
        }

        #layout-header-options a {
            font-size: 24px;
        }

    }

    @media (min-width: 1024px) and (max-width: 1280px) {
        #layout-header-options {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0;
            gap: 30px;
        }

        #layout-header-options a {
            font-size: 26px;
        }
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
    <!-- <div id="layout-footer">
        <span>Created by <a href="https://github.com/dedetheprogrammer">Dede</a>.</span>
    </div> -->
</div>