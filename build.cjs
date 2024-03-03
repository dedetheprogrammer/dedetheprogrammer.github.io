// Dependencies
const { exec } = require("child_process")
const fs       = require("fs-extra")
const yargs    = require("yargs")
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
    process.on("close", () => {
        console.log("Cleaning source code. . .")
        for (const file of generated) {
            console.log(`- Deleting ${file}. . .`)
            fs.unlink(file)
        }
        console.log("\nSite has been built!")
        console.log("\nTry to use npm run preview or just wait to Github to setup your new page")

    })
    return process.exitCode
}

async function main() {
    console.log("\nBuilding site!")
    const generated = await copy_to_static()
    const exit_code = await build_site(generated)
}

main()