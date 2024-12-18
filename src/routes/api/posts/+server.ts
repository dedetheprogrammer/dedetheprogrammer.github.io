import { json } from '@sveltejs/kit'
import type { Post } from '$lib/types'
import { dev } from '$app/environment'

async function getPosts() {

    // let posts: Post[] = []
    // for (let i = 0; i < 9; i++) {
    //     posts.push({
    //         "title": `${i} Fractures simulation in 3D environments`,
    //         "cover": `/src/1.png`,
    //         "slug": `${i}`,
    //         "description": `${i}`,
    //         "date": `${i}`,
    //         "published": false,
    //         "tags": ["A","B","C"]
    //     } satisfies Post)
    // }

	let posts: Post[] = []

	const paths = import.meta.glob('/src/posts/*/index.md', { eager: true })
	for (const path in paths) {
		const file  = paths[path]
		const slug  = path.split('/').at(-2)//?.replace('.md', '')
		if (file && typeof file === 'object' && 'metadata' in file && slug) {
			const metadata = file.metadata as Omit<Post, 'slug'>
			let post   = { ...metadata, slug } satisfies Post
			if (dev) {
				post.cover = `/src/posts/${slug}/${post.cover}`
			}
			post.published && posts.push(post)
		}
	}
    const n = 3
    if (posts.length < n) {
        return posts
    } else {
        let ordered_posts = []
        for (let i = 0; i < n; i++) {
            let j = 0
            while ((j*3 + 1) < posts.length) {
                ordered_posts.push(posts[j*3 + i])
                j += 1
            }
        }
        return ordered_posts
    }

}

export async function GET() {
    const posts = await getPosts()
    return json(posts)
}
