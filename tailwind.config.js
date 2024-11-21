module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				gilroy: ["Gilroy", "sans-serif"],
				silk: ["Silk Serif", "serif"],
				roboto: ["Roboto", "sans-serif"],
			},
			colors: {
				productbg: "#F2EDEA",
				productblue: "#274156",
				productblack: "#1D1C1F",
				greybg: "#E3E3E3",
				ratingyellow: "#F2C94C",
			},
			ontainer: {
				center: true,
				padding: "0",
			},
		},
	},
	plugins: [],
};
