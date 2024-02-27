import type { Post } from "$lib/types";
import { json } from "@sveltejs/kit";

async function getPosts() {
    let posts : Post[] = [];
    const p_paths = import.meta.glob("/src/posts/*/index.md", {eager:true})
    const c_paths = import.meta.glob("/src/posts/*/cover.*", {eager:true})

    for (const p_path in p_paths) {
        const file = p_paths[p_path];
        const path = p_path.split('/').slice(0,-1).join('/')
        const slug = `${p_path.split('/').at(-2)}`;
        if (file && typeof file === "object" && "metadata" in file && slug) {
            const meta  = file.metadata as Omit<Post, 'slug'>
            const cover = (() => {
                for (let c_path in c_paths) {
                    if (c_path.includes(path)) {
                        return c_path
                    }
                }
                return "";
            })()
            const post = { ...meta, slug, cover } satisfies Post
            post.published && posts.push(post)
        }
    }
    return posts.sort((fst, snd) => fst.priority - snd.priority);
}

export async function GET() {
    const posts = await getPosts()
    return json(posts);
};