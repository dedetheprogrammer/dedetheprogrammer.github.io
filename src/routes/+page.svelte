<script lang="ts">

    //import Arrow from "../assets/arrow.png"
    import Entry from "./entry.svelte"
    export let data;

    /* Banner */
    const original = "Hi, I'm Dede, and this is what I do"
    const shuffled = original;
    /*
    let active = Array.from({length: original.length}, _ => false);  
    let state = "Scramble"
    let index = 0;
    let intervalId = [0, 0]
    function randomChar() {
        return String.fromCharCode(Math.floor((Math.random() * 300) + 1));
    }
    $: {
        clearInterval(intervalId[0])
        if (!active.every(v => v === true)) {
            intervalId[0] = setInterval(() => {
                let i = Math.floor(Math.random() * active.length)
                while (active[i]) {
                    i = Math.floor(Math.random() * active.length)
                }
                active[i] = true;
            }, 200)
        } else {
            setTimeout(() => { state = "Descramble" }, 500);
        }
    }


    $: {
        clearInterval(intervalId[1])
        if (state == "Scramble") {
            intervalId[1] = setInterval(() => {
                shuffled = ""
                for (let i = 0; i < active.length; i++) {
                    shuffled += (active[i]) ? 
                    randomChar() :
                    original.charAt(i)
                }
            }, 70)
        } else if (state == "Descramble") {
            intervalId[1] = setInterval(() => {
                active[index] = false;
                shuffled = original.substring(0, index)
                for (let i = index; i < original.length; i++) {
                    shuffled += randomChar()    
                }
                if (index++ === original.length) {
                    index = 0;
                    state = "Waiting"
                }
            }, 70)
        } else {
            setTimeout(() => { state = "Scramble"; }, 3000)
        }
    }*/

    /* Entries portfolio */
    let length: number;


</script>

<style>

    :root {
        --content-margin: 200px;
        --welcome-height: 400px;
        --n-entries-x: 3;
        --n-entries-y: 4.5;
    }

    /* HOME BANNER */
    .home-banner {
        --home-banner-height: 350px;
        width: 100%;
        height: var(--home-banner-height);
        display: flex;
    }

    .home-banner-title {
        width: 50%;
        height: 100%;
        display: flex;
        align-items: center;
    }
    .home-banner-title h1 {
        width: 100%;
        margin-left: var(--content-margin);
        font-size: 30px;
        text-align: left;
    }
    /*
    .arrow {
        width: 50px;
        height: 45px;
        background-position: center center;
        background-size: contain;
        background-repeat: no-repeat;
    }
    */

    .home-banner-socials {
        width: 50%;
        height: 100%;
        display: flex;
        align-items: start;
        justify-content: end;
    }

    .home-portfolio {
        width: 100%;
        height: fit-content;
        display: flex;
        justify-content: center;
    }

    .home-portfolio-posts {
        width: calc(100% - var(--content-margin));
        height: fit-content;
        display: flex;
        flex-wrap: wrap;
    }

    @media screen and (min-width: 320px) and (max-width: 480px) {
      :root {
        --n-entries-x: 1;
        --n-entries-y: 1.5;
        --content-margin: 50px;
        }
    }
  
    @media screen and (min-width: 481px) and (max-width: 768px) {
      :root {
        --n-entries-x: 1;
        --n-entries-y: 1.5;
        --content-margin: 75px;
      }
    }
  
    @media screen and (min-width: 769px) and (max-width: 1024px) {
      :root {
        --n-entries-x: 2;
        --n-entries-y: 3;
        --content-margin: 100px;
      }
    }
  
    @media screen and (min-width: 1025px) and (max-width: 1200px) {
      :root {
        --n-entries-x: 3;
        --n-entries-y: 4.5;
        --content-margin: 125px;
      }
    }

</style>

<!-- Banner -->
<div class="home-banner">
  <div class="home-banner-title">
      <h1>{shuffled} 👍⬇️</h1>
  </div>
  <div class="home-banner-socials">
  
  </div>
</div>
<!-- Portfolio -->
<div class="home-portfolio">
  <div class="home-portfolio-posts" style:--length="{length}px" bind:clientWidth={length}>
      {#each data.posts as post}
          <Entry color="#aaaaaa" title={post.portfolio_title} cover={post.cover} slug={post.slug} />
      {/each}
  </div>
</div>