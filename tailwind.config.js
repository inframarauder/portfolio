module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				primary: "#2d2d2d",
				secondary: "#FFFFFF",
				highlight: "#2f80ed",
			},
			backgroundImage: {
				"hero-pattern": "url('/background.png')",
			},
		},
	},
	plugins: [],
};
