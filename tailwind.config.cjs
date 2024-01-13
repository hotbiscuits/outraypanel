const config = {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'
	],

	plugins: [require('flowbite/plugin')],

	darkMode: 'class',

	theme: {
		extend: {
			colors: {
				// flowbite-svelte
				primary: {
					50: '#FFF5F2',
					100: '#FFF1EE',
					200: '#FFE4DE',
					300: '#FFD5CC',
					400: '#FFBCAD',
					500: '#FE795D',
					600: '#EF562F',
					700: '#EB4F27',
					800: '#CC4522',
					900: '#A5371B'
				},
				indigo: {
					100: '#d5ddfc',
					200: '#acbcf9',
					300: '#829af6',
					400: '#5979f3',
					500: '#2f57f0',
					600: '#2646c0',
					700: '#1c3490',
					800: '#132360',
					900: '#091130'
				}
			},
			fontFamily: {
				sans: ['Inter', 'sans-serif'], // Set Inter as the default sans font
				roboto: ['Roboto', 'sans-serif']
			}
		}
	}
};

module.exports = config;
