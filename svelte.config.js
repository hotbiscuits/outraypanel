import { preprocessMeltUI, sequence } from '@melt-ui/pp';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import adapter from '@sveltejs/adapter-node';
/** @type {import('@sveltejs/kit').Config}*/
const config = {
	kit: {
		adapter: adapter()
	},
	preprocess: sequence([vitePreprocess({}), preprocessMeltUI()])
};

export default config;
