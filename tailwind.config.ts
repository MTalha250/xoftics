import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
	container: {
		center : true,
		padding: {
		  DEFAULT: '1rem',
		  sm: '2rem',
		  lg: '4rem',
		  xl: '5rem',
		  '2xl': '6rem',
		},
	  },
  	extend: {
  		colors: {
  			primary: "#17b7ae",
  			secondary: '#fff',
			para:"#918EA0"
  		},	
  	}
  },
  plugins: [
	require("tailwindcss-animate"),
],
};
export default config;
