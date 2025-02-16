import { mdsvex, escapeSvelte } from "mdsvex";
import { getSingletonHighlighter } from 'shiki'
import adapter from '@sveltejs/adapter-static';
import { addCopyButton } from 'shiki-transformer-copy-button'
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import path from 'path'
import fs from 'fs/promises';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    // Consult https://svelte.dev/docs/kit/integrations
    // for more information about preprocessors
    preprocess: [vitePreprocess(), mdsvex({
        extensions: [".md"],
        highlight: {
            highlighter: async (code, lang = 'text') => {
                const highlighter = await getSingletonHighlighter({
                    themes: ['material-theme-darker'],
                    langs: ['javascript', 'typescript', 'yaml']
                })
                await highlighter.loadLanguage('javascript', 'typescript', 'yaml')
                await highlighter.loadTheme('material-theme-darker')
                const html = escapeSvelte(highlighter.codeToHtml(code, { 
                    lang,
                    theme: 'material-theme-darker',
                    transformers: [
                        addCopyButton({toggle: 2000})
                    ]
                }))
                return `{@html \`${html}\` }`
            }
        }
    })],

    kit: {
		// adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://svelte.dev/docs/kit/adapters for more information about adapters.
		adapter: adapter(),
        prerender: {
            entries: await (async() => {
                const folders = await fs.readdir(path.resolve('src/posts'), {withFileTypes: true})
                const slugs   = folders
                    .map(dir => `/blog/${dir.name}`.replace(".md",""))
                return slugs
            })()
        }
	},
    extensions: [".svelte", ".md"]
};

export default config;
