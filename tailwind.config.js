module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				primary: "#1A3365",
				secondary: "#FFFFFF",
				highlight: "#24478E",
			},
			backgroundImage: {
				"hero-pattern": "url('/background.png')",
			},
		},
	},
	plugins: [],
};
