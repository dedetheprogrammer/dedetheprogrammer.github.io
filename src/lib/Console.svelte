<script>
	let name = 'world';
	let hello = []
	let max = 10;
	let inn

	function onKeyDown(e) {
		inn.focus()
	}

	function cmd(command) {
		let output
		switch (command) {
			default:
				output = ["command '" + command + "' not found."]
		}
		return ['~$ ' + command].concat(output)
	}

	function onKeyUp(e) {
		if (e.key === "Enter") {
			let output = cmd(inn.value)
			let i = Math.min(max, output.length)
			hello = hello.slice(i).concat(output.slice(max - i))
			console.log(output, i, max-i)
			//let i = max - Math.max(max, res.length)
			//res = res.slice(i)
			// hello.push("~$ " + )
			//hello = hello
			inn.value = ""
		}
	}
	
</script>

<div style="width:100%; height: calc(100% - 25px);">
	{#each hello as line}
		<div style="width:100%; height: calc(100% / {max});">{line}</div>
	{/each}
</div>
<input style="width:100%; height:20px; margin: 10px 0px 0px 0px;" type="text" bind:this={inn} />
<svelte:window on:keydown={onKeyDown} on:keyup={onKeyUp}/>
