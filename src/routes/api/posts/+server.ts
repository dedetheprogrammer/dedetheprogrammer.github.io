import { json } from '@sveltejs/kit'
import type { Post } from '$lib/types'
import { dev } from '$app/environment'


async function getPosts() {
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

	posts = posts.sort((first, second) =>
    	new Date(second.date).getTime() - new Date(first.date).getTime()
	)

	return posts
}

export async function GET() {
	const posts = await getPosts()
	return json(posts)
}
