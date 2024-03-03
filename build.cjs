// ==========================================================
// Pa compilar la pagina y que coja todos los archivos de los
// posts que si no los pongo en static no me los pilla
// ==========================================================

const exit_if = (error) => {
    if (error) {
        console.error(error)
        process.exit(1)
    }
}

const fs  = require("fs-extra")
const src = "src/posts"
const dst = "static1"
fs.readdir(src, (error, dirs) => {
    exit_if(error) // If error, bye bye
    // Read each post dir
    dirs.forEach(dir => {
        dir_src = `${src}/${dir}`
        console.log(dir_src)
        fs.readdir(dir_src, (error, assets) => {
            assets.forEach(asset => {
                if (asset.split('.').at(-1) !== "md") {
                    const asset_src = `${dir_src}/${asset}`
                    console.log(asset_src)
                }
            })
        })

        //dir_src = `${src}/${dir}`
        //fs.readdir(dir_src, (error, assets) => {
        //    exit_if(error)
        //    assets.forEach(asset => {
        //        const asset_src = `${dir_src}/${asset}`
        //        const asset_dst = `${dst}/${asset}`
        //        if (asset.split('.').at(-1) !== "md") {
        //            fs.copy(asset_src, asset_dst, error => exit_if(error))
        //        }
        //    })
        //})
    })
})

/*
const { exec } = require("child_process")
// === CONSTRUIR LA PAGINA ==================================
exec("npm run build", (error, stdout, stderr) => {
    exit_if(error) // If error, bye bye
    console.log(stdout)
    console.log(stderr)
    // === MOVER LOS ASSETS =====================================
    const fs  = require("fs-extra")
    const src = "src/posts"
    const dst = "docs"

    fs.readdir(src, (error, posts) => {
        exit_if(error) // If error, bye bye
        // Read each post folders
        posts.forEach(post => {
            const post_src = `${src}/${post}`
            const post_dst = `${dst}/${post}`
            // Read the content of the current post folder
            fs.readdir(post_src, (error, assets) => {
                exit_if(error) // If error, bye bye
                // Create a folder for the post folder assets in the build
                fs.mkdir(post_dst, { recursive: true }, error => exit_if(error))
                // Copy each asset that is not markdown
                assets.forEach(asset => {
                    const asset_src = `${post_src}/${asset}`
                    const asset_dst = `${asset}` 
                    if (asset.split('.').at(-1) !== "md") {
                        fs.copy(asset_src, asset_dst, error => exit_if(error))
                    }
                })
            })
        })
    })
})
*/
