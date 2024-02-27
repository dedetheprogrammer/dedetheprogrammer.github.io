<script lang="ts">
    import Lazy from "$lib/lazy-load/lazy.svelte";
    export let color : string;
    export let cover : string;
    export let title : string;
    export let slug  : string;
    let isHover = false;
    const onEntryEnter = () => {
        isHover = true;
    }
    const onEntryLeave = () => {
        isHover = false;
    }


</script>

<style>

    .entry {
        width: calc(var(--length) / var(--n-entries-x));
        height: calc(var(--length) / var(--n-entries-y));
        display: flex;
        align-items: center;
        justify-content: center;
        cursor:pointer;
        position: relative;
        overflow: hidden;
    }

    .entry-background {
        width: 100%;
        height: 100%;
        position: absolute;
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
        transition: transform 0.2s ease-in-out;
        -webkit-transition: transform 0.2s ease-in-out;
    }
    .entry-background video {
        width: 100%;
        height: auto;
    }

    .entry-preview {
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.586);
        position: absolute;
        transition: opacity 0.1s ease-in;
        -webkit-transition: opacity 0.1s ease-in;
    }

    .entry-preview-content {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .entry-preview-content h1 {
        font-size: 30px;
    }

    
    @media screen and (min-width: 320px) and (max-width: 480px) {
        .entry {
            margin-bottom: 15px;
        }
    }

    @media screen and (min-width: 481px) and (max-width: 768px) {
        .entry {
            margin-bottom: 15px;
        }
    }

    @media screen and (min-width: 1025px) and (max-width: 1200px) {

    }

</style>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- style:transform={!isHover ? "scale(1) rotate(0deg)" : "scale(1.2) rotate(5deg)"} -->
<Lazy fadeOption={{delay:10, duration:400 }}>
    <div
        class="entry"
        style:background-color={color}
        style:background-image="url({cover})"
        on:mouseenter={onEntryEnter}
        on:mouseleave={onEntryLeave}
    >
        {#if cover.endsWith(".jpg") || cover.endsWith(".png") || cover.endsWith(".gif")}
            <div class="entry-background" style:background-image=url({cover}) />
        {:else if cover.endsWith(".mp4")}
            <div class="entry-background">
                <!-- svelte-ignore a11y-media-has-caption -->
                <video src={cover} autoplay loop muted />
            </div>
        {/if}
            <div class="entry-preview" style:opacity={!isHover ? 0 : 1} >
                <a href={slug} class="entry-preview-content">
                    <h1>{title}</h1>
                </a>
            </div>
    </div>
</Lazy>