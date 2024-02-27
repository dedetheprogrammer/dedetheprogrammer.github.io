import type { Categories, Post } from '$lib/types.js';

export async function load({ fetch, url }) {

    const response = await fetch("api/posts");
    let posts: Post[] = await response.json();
    if (url.searchParams.get("categories")) {
        const categories = url.searchParams.get("categories")?.split(',')
        let final : Post[] = []
        for (let post of posts) {
            console.log(categories, post)
            if (categories?.some(category => post.categories.includes(category as Categories))) {
                post.slug = `/blog/${post.slug}`
                final.push(post)
            }
        }
        posts = final;
    } else {
        for (let post of posts) {
            post.slug = `/blog/${post.slug}`
        }
    }
    return { posts }

}