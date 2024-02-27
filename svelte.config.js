import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from "mdsvex"

/** @type {import('mdsvex').mdsvexOptions} */
const mdsvexOptions = {
	extensions: [ '.md' ]
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	extensions: [ '.svelte', '.md' ],
	preprocess: [ vitePreprocess(), mdsvex(mdsvexOptions) ],
	paths: {
		assets: 'https://dedetheprogrammer.github.io/dedetheprogrammer.github.io',
		base: '' | '/dedetheprogrammer.github.io',
	},
	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter(
			{
				pages: 'build',
				assets: 'build',
				strict: false,
				fallback: '404.html'
			}
		)
	}
};

export default config;
