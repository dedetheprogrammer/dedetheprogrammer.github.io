import { json } from '@sveltejs/kit'
import { dev } from '$app/environment'
import type { Post } from '$lib/types'
// import fs from 'fs';
// import { formatTimestamp } from '$lib/utils';

async function getPosts() {

	let posts: Post[] = []
	const paths = import.meta.glob('/src/posts/*.md', { eager: true })
	for (const path in paths) {
		const file  = paths[path]
		const slug  = path.split('/').at(-1)?.replace('.md', '')
		if (file && typeof file === 'object' && 'metadata' in file && slug) {
			const metadata = file.metadata as Omit<Post, 'slug'>
            // const stats = fs.statSync(`${process.cwd()}${path}`.replace(/\\/g, '/'))
            // metadata["date"] = formatTimestamp(stats["mtimeMs"])
			let post   = { ...metadata, slug } satisfies Post
			if (dev) {
				post.cover = `${post.cover}`
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
