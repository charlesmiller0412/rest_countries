module.exports = {
    purge: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: "class",
    theme: {
        colors: {
            darkBlue: "hsl(209, 23%, 22%)",
            veryDarkBlueD: "hsl(207, 26%, 17%)",
            veryDarkBlueL: "hsl(200, 15%, 8%)",
            darkGray: "hsl(0, 0%, 52%)",
            lightGray: "hsl(0, 0%, 98%)",
            white: "hsl(0, 0%, 100%)",
        },
        fontWeight: { light: 300, semiBold: 600, extraBold: 800 },
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
