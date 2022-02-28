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
				highlight: "#EF5350",
			},
			backgroundImage: {
				"hero-pattern": "url('/background.png')",
			},
		},
	},
	plugins: [],
};
