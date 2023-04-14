/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
        './app/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        fontFamily: {
            poppins: ["Bodoni Moda", "serif"]
        },
        extend: {
            backgroundImage: {
                'law-bck': "linear-gradient(to right bottom, rgba(15, 23, 42, 0.9), rgba(30, 41, 59, 0.6)), url('../public/images/img_law.jpg')"
            }
        },
    },
    plugins: [],
}
