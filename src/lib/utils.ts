
export function formatTimestamp(timeStampMs: number): string {
    const date    = new Date(timeStampMs)
    const hours   = date.getHours().toString()
    const minutes = date.getMinutes().toString().padStart(2,'0') 
    const day     = date.getDay().toString()
    const month   = (date.getMonth() + 1).toString()
    const year    = date.getFullYear()
    return `${hours}:${minutes} ${day}-${month}-${year}`
}

export function tagBgColor(name: string, color: string): string {
    name = name.toLowerCase()
    if (["javascript","js"].includes(name)) {
        return "#f3db1c"
    } else if (["typescript", "ts"].includes(name)) {
        return "#347cc4"
    } else if (["three.js", "3js", "three", "threejs"].includes(name)) {
        return "#ffffff"
    } else if (["express.js", "expressjs", "express"].includes(name)) {
        return "#ffffff"
    } else if (["react", "reactjs", "react.js"].includes(name)) {
        return "#242424"
    } else if (["twojs", "two.js", "two"].includes(name)) {
        return "#ffffff"
    } else if (["svelte", "svelte.js", "sveltejs"].includes(name)) {
        return "#fc3b04"
    } else if (["pixi", "pixi.js", "pixijs"].includes(name)) {
        return "#242424"
    } else {
        return color
    }
}

export function tagFgColor(name: string, color: string): string {
    name = name.toLowerCase()
    if (["javascript","js"].includes(name)) {
        return "#040404"
    } else if (["typescript", "ts"].includes(name)) {
        return "#ffffff"
    } else if (["three.js", "3js", "three", "threejs"].includes(name)) {
        return "#000000"
    } else if (["express.js", "expressjs", "express"].includes(name)) {
       return "#000000"
    } else if (["react", "reactjs"].includes(name)) {
        return "#63d9f9"
    } else if (["twojs", "two.js", "two"].includes(name)) {
        return "#fc9493"
    } else if (["svelte", "svelte.js", "sveltejs"].includes(name)) {
        return "#ffffff"
    }  else if (["pixi", "pixi.js", "pixijs"].includes(name)) {
        return "#df2362"
    } else {
        return color
    }
}
