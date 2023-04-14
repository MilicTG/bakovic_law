/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
        './app/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        fontFamily: {
            'serif': ["Bodoni Moda", "serif"],
            'sans-serif': ["Montserrat", "sans-serif"]
        },
        extend: {
            backgroundImage: {
                'law-bck': "linear-gradient(to right bottom, rgba(15, 23, 42, 0.9), rgba(30, 41, 59, 0.3)), url('/images/img_law.jpg')"
            },
            colors: {
                'primary-color': "#A97C50"
            },
            animation: {
                slideup: 'slideup 1s ease-in-out',
                slidedown: 'slidedown 1s ease-in-out',
                slideleft: 'slideleft 1s ease-in-out',
                slideright: 'slideright 1s ease-in-out',
                wave: 'wave 1.2s linear infinite',
                slowfade: 'slowfade 2.2s ease-in-out',
                blob: "blob 7s infinite",
            },
            keyframes: {
                slowfade: {
                    from: {opacity: 0},
                    to: {opacity: 1},
                },
                slideup: {
                    from: {opacity: 0, transform: 'translateY(25%)'},
                    to: {opacity: 1, transform: 'none'},
                },
                slidedown: {
                    from: {opacity: 0, transform: 'translateY(-25%)'},
                    to: {opacity: 1, transform: 'none'},
                },
                slideleft: {
                    from: {opacity: 0, transform: 'translateX(-20px)'},
                    to: {opacity: 1, transform: 'translateX(0)'},
                },
                slideright: {
                    from: {opacity: 0, transform: 'translateX(20px)'},
                    to: {opacity: 1, transform: 'translateX(0)'},
                },
                wave: {
                    '0%': {transform: 'scale(0)'},
                    '50%': {transform: 'scale(1)'},
                    '100%': {transform: 'scale(0)'},
                },
            },
        },
    },
    plugins: [],
}
