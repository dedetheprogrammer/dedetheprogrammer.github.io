import type { Categories, Post } from '$lib/types.js';
import { error } from '@sveltejs/kit'

export async function load({ fetch, params }) {
    try {
        const response = await fetch("/api/posts");
        const posts: Post[] = await response.json();
        let final: Post[] = [];
        for (let post in posts) {
            posts[post].categories.includes(params.category as Categories) &&
                final.push({ ...posts[post], "slug": `/${posts[post].slug}`})
        }

        console.log(params.category as Categories)
        return { 
            "category": params.category,
            "posts": final
        }
    } catch(e) {
        throw error(404, `Could not find /${params.category}`)
    }
    //const temps: Post[] = 
    //return { temps }
}

/*
export async function load({ params }) {
    try {
        const post = await import (`../../posts/${params.slug}.md`)
        console.log(post.default)
        console.log(post.metadata)
    
        return {
            content: post.default,
            metadata: post.metadata
        }
    
    } catch (e) {
        throw error(404, `Could not find /${params.slug}`)
    }
}
*/