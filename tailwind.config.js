module.exports = {
	purge: [
		'./src/pages/**/*.{js,ts,jsx,tsx}',
		'./src/components/**/*.{js,ts,jsx,tsx}',
	],
	darkMode: false, // or 'media' or 'class'
	theme: {
		screens: {
			sm: '320px',
			md: '672px',
			lg: '1056px',
			xl: '1312px',
			max: '1584px',
		},
		extend: {},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
