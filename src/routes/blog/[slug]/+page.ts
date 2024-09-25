import { error } from '@sveltejs/kit'



async function getCover(slug : string) {
    let extensions : string[] = ["jpg","png","gif","mp4"]
    let cover : string = "";
    for (let extension of extensions) {
        cover = (await import (`/src/posts/${slug}/cover.${extension}`))["default"]
        if (cover.startsWith("/src")) {
            return cover
        }
    }
    return "";
}

export async function load({ params }) {
    try {
        let path    = `/src/posts/${params.slug}/index.md`
        console.log(params, path)
        const post  = await import(path)
        let cover   = await getCover(params.slug)

        /*
        const cover = await ()()*/
        console.log(post.default)
        console.log(post.metadata)
        
        return {
            content: post.default,
            metadata: post.metadata,
            cover: cover
        }
    
    } catch {
        try {
            let path    = `/src/posts/${params.slug}/index.md`
            console.log(params, path)
            const post  = await import(path)
            let cover   = await getCover(params.slug)
    
            /*
            const cover = await ()()*/
            console.log(post.default)
            console.log(post.metadata)
            
            return {
                content: post.default,
                metadata: post.metadata,
                cover: cover
            }
        } catch (e) {
            console.log(e)
            throw error(404, `Could not find /${params.slug}`)
        }

    }
}