import { error } from '@sveltejs/kit'
export async function load({ params }) {
	try {
		const post = await import(`../../../posts/${params.slug}.md`)
		post.metadata.tags = post.metadata.tags.sort()
		return {
			content: post.default,
			meta: post.metadata
		}
	} catch (e) {
		console.log(e)
		error(404, `Could not find ${params.slug}`)
	}
}
