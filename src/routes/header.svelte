<script lang="ts">
    import * as config from "$lib/config"
</script>

<style>

    nav {
        --header-height: 50px;
        width: 100%;
        height: var(--header-height);
        display: flex;
        align-items: center;
        position: fixed;
        top: 0;
        left: 0;
        /*
        flex-direction: column;
        align-items: center;
        z-index: 2;
        */
    }

    h3 {
        margin-left: 20px;
        color: black;
        filter: drop-shadow(2px 2px white);
    }

    h3:hover {
        color: white;
        filter: drop-shadow(2px 2px black);
        cursor: pointer;
    }

    ul {
        margin-left: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    ul li {
        font-size: 18px;
        margin-left: 40px;
    }

</style>

<!-- Header -->
<nav>
    <a href="/">
        <h3>{config.title}</h3>   
    </a>
    <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/blog">Blog</a></li>
    </ul>
    <!--div class="app-header-header-light-dark-toggler">
      <div class="checkbox-wrapper">
        <input type="checkbox" id="switch" />
        <label for="switch"></label>
      </div>  
    </div-->
</nav>
