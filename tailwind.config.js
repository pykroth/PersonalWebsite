/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{html,js,jsx}'],
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                inter: ['inter', 'serif'],
            },
        },
    },
    plugins: [],
}