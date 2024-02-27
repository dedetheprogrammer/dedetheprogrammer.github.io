<script lang="ts">
    /* Terminal */
    let consoleInput = {
      value: "",
      lowbar: "",
      intervalId: 0,
    }
    $: {
      clearInterval(consoleInput.intervalId)
      consoleInput.intervalId = setInterval(() => {
        consoleInput.lowbar = (consoleInput.lowbar === "") ? "_" : ""
      }, 1000)
    }
</script>

<style>
    .terminal {
        width: 100vw;
        height: 100vh;
        background-color: #000000;
        color: white;
        position: fixed;
        top: 0;
        left: 0;
        z-index: -2;
    }
    
    .terminal-input {
        width: calc(100% - 50px);
        height: calc(100% - 50px);
        margin: 25px;
        display: flex;
        align-items: end;
        justify-content: left;
    }

    .terminal-cover {
        width: 100vw;
        height: 100vh;
        background-color: #000000aa;
        position: fixed;
        top: 0;
        left: 0;
        z-index: -1;
    }
</style>

<!-- Terminal -->
<div class="terminal">
    <div class="terminal-input">
        >{consoleInput.value}{consoleInput.lowbar}
    </div>
</div>

<div class="terminal-cover" />