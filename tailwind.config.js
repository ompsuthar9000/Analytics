/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	daisyui: {
		themes: ["light", "dark", "cupcake"],
	},
	theme: {
		container: {
			center: true,
			padding: "2rem",
		},
		extend: {
			backgroundImage: {
				"bg-bottom": "url('/background-bottom.png')",
				"bg-top": "url('/background-top (1).png')",
			},
			colors:{
				"primary" : "#0F1F4d"
			}
		},
	},
	plugins: [require("daisyui")],
};
