module.exports = {
    purge: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: "media", // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                feli: {
                    DEFAULT: "#f9a828",
                    light: "rgba(249, 168, 37, 0.1)",
                },
                dark: {
                    DEFAULT: "#0F0F0F",
                },
            },
            minHeight: {
                64: "64px",
                56: "56px",
                "screen-1/4": "25vh",
                "screen-1/2": "50vh",
                "screen-3/4": "75vh",
            },
        },
        fontFamily: {
            display: [
                "Quicksand",
                "Inter",
                "ui-sans-serif",
                "system-ui",
                "-apple-system",
                "BlinkMacSystemFont",
                "Segoe UI",
                "Roboto",
                "Helvetica Neue",
                "Arial",
                "Noto Sans",
                "sans-serif",
                "Apple Color Emoji",
                "Segoe UI Emoji",
                "Segoe UI Symbol",
                "Noto Color Emoji",
            ],
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
