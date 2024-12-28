import daisyui from "daisyui";
import daisyUIThemes from "daisyui/src/theming/themes";
/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {},
	},
	plugins: [daisyui],

	daisyui: {
		themes: [
			"light",
			{
				black: {
					...daisyUIThemes["black"],
					primary: "rgb(128, 0, 128)",
					secondary: "rgb(25, 26, 25)",
				},
			},
		],
	},
};