export type Categories = 'sveltekit' | 'svelte'
export type Post = {
    blog_title: string,
    portfolio_title: string,
    description: string,
    slug: string,
    date: string,
    categories: Categories[],
    priority: number,
    published: boolean,
    portfolio: boolean,
    cover: string
}