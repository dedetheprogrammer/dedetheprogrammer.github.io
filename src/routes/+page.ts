import type { Post } from '$lib/types.js';

export async function load({ fetch }) {
    const response = await fetch("api/posts");
    const all_posts: Post[] = await response.json();
    let posts: Post[] = [];
    for (let post of all_posts) {
        if (post.portfolio) {
            post.slug = `/blog/${post.slug}`
            posts.push(post);
        }
    }
    return { posts };
}