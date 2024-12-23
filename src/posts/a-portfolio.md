---
title: My portfolio
description: The evolution of my online portfolio through the years, starting with pure JavaScript, moving to React and Three.JS, and finally assembling in Svelte creating a Github Pages hosted static blog.
published: true
tags:
  - JavaScript
  - React
  - TypeScript
  - Three.js
  - Two.js
  - Svelte
cover: "/a-portfolio/cover.png"
---

<script>
  import App1 from '$lib/components/app-1.svelte'
  import App2 from '$lib/components/app-2.svelte'
  import App3 from '$lib/components/app-3.svelte'
  import App4 from '$lib/components/app-4.svelte'
  import App5 from '$lib/components/app-5.svelte'
  import App6 from '$lib/components/app-6.svelte'
  import Test from '$lib/components/test.svelte'
</script>

## First sight of the portfolio

This would be the first vision of the portfolio I started two years ago. At this point, it would only be built with pure <span style="color:#ef652a">HTML</span>, <span style="color:#33a9dc">CSS</span>, and <span style="color:#f3db1c">JavaScript</span>, and it wouldn't have any content, just a loading screen with funny phrases, as I was studying at the time. The idea ended up putting aside.

<App1 />

## Second sight of the portfolio

Months after the first version, the first breakthrough was made in which it continued to be used pure <span style="color:#ef652a">HTML</span>, <span style="color:#33a9dc">CSS</span>, and <span style="color:#f3db1c">JavaScript</span>. This time, the sections were finally implemented, along with pure CSS transitions between them. However, the idea stalled there and was eventually discontinued.

<App3 />

Click on the sections to see the transitions.

## Experiments with <span style:color=#fc9493>T</span><span style:color=#ffbc77>w</span><span style:color=#76d8c9>o</span>.js

After recovering the concept of the first version, one of the things I noticed was its background, a background that was a static image, something that seemed quite boring to me. The idea then was to generate a programmable dynamic background that would evolve on the fly, giving rise to a first version implemented in [Two.js](https://two.js.org), a 2D graphics API, and React.

The final result would be an infinite corridor in which panels would pass by, giving the effect that the corridor was being walked through infinitely.

<App2 />

Click on the play button to play/pause the animation. In the initial version of the hallway, there were only panels on the ceiling for performance reasons (explained in the next section), in the current version there are panels on all the walls in an optimized way and made in Svelte.

## Experiments with <span style="color:#000000; background-color:#ffffff">Three.js</span>

The tests with Two.js did not go very well, as it had severe performance problems added to the limitations of React, causing this solution to be discarded and other solutions to be investigated, such as [Three.js](https://threejs.org), a 3D graphics API.


<Test />

## Merging the front and the dynamic background

After having tested Three.js with small scenarios, it was time to combine both concepts, creating a 3D scenario that moved on the fly in Three.js and a front panel that had all the portfolio content in React, a fusion that would be done through [React-Three-Fiber](https://r3f.docs.pmnd.rs/getting-started/introduction), a library that ported the elements of Three.js to React for better performance.

The final result would be an infinite corridor, taking the idea from 2D to 3D and a small unpopulated front design to get an idea of ​​how it could look.

<App5 />

Click on the play button to play/pause the animation, and on the view button to show/hide the front.

## Forget about the background, it's time for the blog!

By this point, too much time had been spent making animations, or effects like a dynamic background for the portfolio, and as I noticed in the first version that it was boring to have a static background, no matter how many animations I had, if there was no work to show it wouldn't be of much use to me when presenting my skills.

The idea then stops focusing on making it dynamic, and focuses on creating a content/portfolio system to be able to put the different works done with a small description.

<App4 />

Therefore, the first step would be to create a small publication system in which, from a JSON file that defined the name, the image and the description of the works:

```javascript
// Videogames
import Cover_Builder from './assets/img/builder_tfg.jpeg'
import Cover_DEngine from './assets/img/Dengine-cover.png'
import Cover_ExorcismNeeded from './assets/gifs/exorcismneeded.gif'
// 3d/Animation
import Cover_Pod042 from './assets/img/pod_render-3.png'
import Cover_PortalScene from './assets/img/portal_scene.png'
// https://github.com/mjyc/tablet-robot-face?tab=readme-ov-file
import Cover_WIP from './assets/gifs/wip.gif'

const Content = {
    "Videogames": [
        {
            "title": "Builder (TBD)",
            "cover": Cover_Builder,
            "description": "My game thesis",
            "media": []
        },
        {
            "title": "DEngine",
            "cover": Cover_DEngine,
            "description": "A 2d videogame-engine based in Raylib.",
        },
        {
            "title": "Exorcism Needed",
            "cover": Cover_ExorcismNeeded,
            "description": `Exorcism Needed is a 2 player local multiplayer game where one player tries to survive being possessed by the other.

            Both players control the same character, one plays as the human, who has to survive a demonic possession, and the other plays as the demon, who has to kill the human while possessing them.
            
            
            There are many objects throughout the map that the human has to dispose of to stay safe while avoiding being exposed to danger, meanwhile the demon can take advantage of the environment and use objects to take the human's life.`
        },
        {
            "title": "WIP",
            "cover": Cover_WIP,
            "description": "It's just a WIP entry. Maybe it'll dissapear.",
        }
    ],
    "3d/Animation": [
        {
            "title": "Pod 042",
            "cover": Cover_Pod042,
            "description": "My first 3d model in Blender.",
        },
        {
            "title": "Path-tracer renderer",
            "cover": Cover_PortalScene,
            "description": "A ray-tracer/path-tracer engine in C++.",
        },
        {
            "title": "WIP",
            "cover": Cover_WIP,
            "description": "It's just a WIP entry. Maybe it'll dissapear.",
        }
    ]
}

export default Content
```

And with this, the page was populated so as not to manually define each entry and it was more automatic, everything implemented in React:

```javascript
const entries = []
const Sections = Object.keys(Content)
for (let i = 0; i < Sections.length; i++) {
    const sectionEntries = []
    for (let j = 0; j < Content[Sections[i]].length; j++) {
        const key = JSON.stringify({"section": i, "entry": j, "desc": false})
        sectionEntries.push(<Entry key={key} id={key} title={Content[Sections[i]][j].title} cover={Content[Sections[i]][j].cover} description={Content[Sections[i]][j].description}/>)
    }
    entries.push(sectionEntries)
}
return entries
```

## Second version of the blog

It would take some time after having made the previous version, since, it must be remembered, the development of the portfolio has been carried out simultaneously while I was studying.

This, added to the fact that React has a more complex implementation and that it had already been used for quite some time, led to the search for a new technology that was also more efficient. The result would be a blog implemented in [Svelte](https://svelte.dev):

<App6 />

The page also works with dynamic routing, where each endpoint will be a Markdown file:

- The entries of the publications are automatically generated with the metadata of each file.

- A route is generated for each file that leads to the file processed in HTML.

- The files are divided into folders, where each folder contains the Markdown file and the images it uses, the number of the folder will be the number of the routed: 

![Posts structure](/a-portfolio/posts-structure.png)

- A compilation file is implemented that automatically moves the images to the `/static` folder to compile the page statically and be able to upload it to [Github Pages](https://pages.github.com):

```javascript
// Dependencies
const { exec } = require("child_process")
const fs       = require("fs-extra")
// const yargs    = require("yargs")
// Move files to the static folder
async function copy_to_static() {
    let generated = [] 
    const dirs = await fs.readdir("src/posts")
    for (const dir of dirs) {
        const assets = await fs.readdir(`src/posts/${dir}`)
        console.log(dir, assets)
        for (const asset of assets) {
            if (asset.split('.').at(-1) !== "md") {
                const dst = `static/${asset}`
                await fs.copy(`src/posts/${dir}/${asset}`, dst)
                console.log(`Copying '${dir}/${asset}' in the static folder. . .`)
                generated.push(dst)    
            }
        }
    }
    return generated
}
// Build the site and recover the original state of the static folder
async function build_site(generated) {
    const process = await exec("npm run build");
    process.stdout.on("data", (data) => {
        console.log(data)
    })
    process.stderr.on("data", (data) => {
        console.log(data)
    })
    process.on("close", (exitCode) => {
        console.log("Cleaning source code. . .")
        for (const file of generated) {
            console.log(`- Deleting ${file}. . .`)
            fs.unlink(file)
        }
        if (exitCode === 0) {
            console.log("\nSite has been built!")
            console.log("\nTry to use npm run preview or just wait to Github to setup your new page")
        } else {
            console.log("\nSomething went wrong :(")
        }

    })
    return process.exitCode
}

async function main() {
    console.log("\nBuilding site!")
    const generated = await copy_to_static()
    return await build_site(generated)
}

return main()
```

- Now we have to build the static page and upload it into Github Pages. First we have to set a custom pipeline with Github Actions, because the default pipeline do not work with Node and it's needed to build the page:

```yaml
# Simple workflow for deploying static content to GitHub Pages
name: Deploy static content to Pages

on:
  # Runs on pushes targeting the default branch
  push:
    branches: ["main"]

  # Allows you to run this workflow manually from the Actions tab
  workflow_dispatch:

# Sets permissions of the GITHUB_TOKEN to allow deployment to GitHub Pages
permissions:
  contents: read
  pages: write
  id-token: write

# Allow only one concurrent deployment, skipping runs queued between the run in-progress and latest queued.
# However, do NOT cancel in-progress runs as we want to allow these production deployments to complete.
concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  # Single deploy job since we're just deploying
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      - name: Install and Build
        run: |
          npm install
          node build.cjs
      - name: Clean Build
        run: |
          shopt -s extglob && shopt -s dotglob
          mkdir tmp
          mv ./!(tmp) tmp
          mv tmp/docs/* .
          rm -rf tmp
      - name: Setup Pages
        uses: actions/configure-pages@v4
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          # Upload entire repository
          path: '.'
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

- Once the new pipeline is setted, we will have the updated static page with each push.

## The current portfolio

And finally, the latest version of the portfolio for 2024, which takes the idea from the previous version and improves it:

![Portfolio Preview](/a-portfolio/portfolio-preview.png)

- Now the posts are directly the markdown files and are not structured as folders, moreover, the images are directly stored in the `/static` folder. This is because when processing the files it causes fewer problems than having them all in their own folders. 

- It's been half a year since the last release and some things have changed, so the way the static page is generated is different. Now, you have to tell Svelte which paths to look at when generating the files:

```javascript
// In the svelte.config.js file:
// ...
kit: {
    // adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
    // If your environment is not supported, or you settled on a specific environment, switch out the adapter.
    // See https://svelte.dev/docs/kit/adapters for more information about adapters.
    adapter: adapter(),
    prerender: {
        entries: await (async() => {
            const folders = await fs.readdir(path.resolve('src/posts'), {withFileTypes: true})
            const slugs   = folders
                .map(dir => `/${dir.name}`.replace(".md",""))
            return slugs
        })()
    }
},
//...
```

- Each snippet was implemented in Svelte and these are interactive, and not videos.

### Future changes

These are the future changes planned for the portfolio:

- [x] Remake the entries structure in the main page.
- [x] Fix wrong page titles.
- [x] Add information in the main page.
- [ ] Add a 'Comissions' page.
- [ ] Add an 'About me' page.
- [ ] Add new posts about my projects:
  - [ ] My Fractures in 3D Environments Simulator project.
  - [ ] The Cattan Game in React/PIXI.JS + Express.
  - [ ] Path-tracer renderer.
  - [ ] 2D Videogame engine based in Raylib.
- [ ] Add somewhere my hacking trayectory.
- [ ] Add a Table of contents.
- [ ] Add a button for going up to the page.
- [ ] Add a 'Blog' page.
- [ ] Enhace responsivity.

