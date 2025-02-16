import type { Post } from '$lib/types'
export async function load({ fetch }) {
    const response = await fetch('api/posts')
    const posts: Post[] = await response.json()

    const highlights: Post[] = []
    const featured: Post[] = []
    posts.forEach(post => {
        if (post.highlighted) {
            highlights.push(post)
        }
        if (post.featuredTitle) {
            featured.push(post)
        }
    })
    return { highlights, featured }
}