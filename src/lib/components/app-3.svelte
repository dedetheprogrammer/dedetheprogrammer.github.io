<script lang="ts">
    const titles = ["HOME/NEWS", "PROJECTS", "ABOUT ME"]
    let index    = -1
</script>

<style>

    :root {
        --n-containers: 3
    }

    #app-container {
        width: 100%;
        height: 500px;
        background-color: aliceblue;
        color:white;
        display: flex;
        overflow: hidden;
        border-radius: 10px;
    }

    .app-container-category {
        width: calc(100% / var(--n-containers));
        height: 100%;
        overflow: hidden;
        transition: width 0.3s ease-in;
    }
    .app-container-category-body {
        width: 100%;
        height: 100%;
        cursor: pointer;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;
        display: flex;
        align-items: end;
        transition: transform 0.2s ease-in;
    }

    .active {
        width: 100%;
    }
    .inactive {
        width: calc(100% / var(--n-containers));
    }

    #app-container-category-1 {
        background-color: aquamarine;
        background-image: url("/a-portfolio/app-3/section-1.jpg");
    }
    #app-container-category-2 {
        background-color: rgb(165, 127, 255);
        background-image: url("/a-portfolio/app-3/section-2.jpg");
    }
    #app-container-category-3 {
        background-color: rgb(255, 242, 127);
        background-image: url("/a-portfolio/app-3/section-3.jpg");
    }

    #app-container-title-1 {
        margin-left: -70px;
    }
    #app-container-title-2 {
        margin-left: -50px;
    }
    #app-container-title-3 {
        margin-left: -50px;
    }

    .vertical-text {
        display: inline-block;
        font-size: 42px;
        text-align: left;
        transform: rotate(-90deg) translate(50%, 0%);
        font-family: 'Oswald', sans-serif;
        filter: drop-shadow(5px 5px 10px black);
    }

</style>

<div id="app-container">
    {#each [1,2,3] as i}
        <!-- svelte-ignore a11y_no_static_element_interactions -->
        <!-- svelte-ignore a11y_click_events_have_key_events -->
        <div class="app-container-category {index === i ? 'active' : 'inactive'}" on:click={() => { index = (index === i) ? -1 : i }}>
            <div id="app-container-category-{i}" class="app-container-category-body">
                <span id="app-container-title-{i}" class="vertical-text">{titles[i-1]}</span>
            </div>
        </div>
    {/each}
</div>