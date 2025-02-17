import { json } from '@sveltejs/kit'
import type { Post } from '$lib/types'
import fs from 'fs'
import { formatTimestamp } from '$lib/utils'

async function getPosts() {

	let posts: Post[] = []
	const paths = import.meta.glob('/src/posts/*.md', { eager: true })
	for (const path in paths) {
		const file  = paths[path]
		const slug  = `blog/${path.split('/').at(-1)?.replace('.md', '')}`
		if (file && typeof file === 'object' && 'metadata' in file && slug) {
			const metadata = file.metadata as Omit<Post, 'slug'>
            const stats = fs.statSync(`${process.cwd()}${path}`.replace(/\\/g, '/'))
            metadata["date"] = formatTimestamp(stats["mtimeMs"])
			let post   = { ...metadata, slug } satisfies Post
			post.cover = `${post.cover}`
            post.tags  = post.tags.sort()
            post.published && posts.push(post)
		}
	}
    // Ordenar los posts por fecha de modificación descendente
    posts.sort((a, b) => {
        const dateA = new Date(a.date).getTime();
        const dateB = new Date(b.date).getTime();
        return dateB - dateA; // Descendente
    });

    return posts;

}

export async function GET() {
    const posts = await getPosts()
    return json(posts)
}
