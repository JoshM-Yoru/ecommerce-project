/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            keyframes: {
                slideInFromRight: {
                    '0%': { transform: 'translateX(100%)', opacity: '0%' },
                    '100%': { transform: 'translateX(0px)', opacity: '100%' }
                },
                slideInFromLeft: {
                    '0%': { transform: 'translateX(-20%)', opacity: '0%' },
                    '100%': { transform: 'translateX(0px)', opacity: '100%' }
                }
            },
            animation: {
                slideInFromLeft: 'slideInFromLeft 1s',
                slideInFromRight: 'slideInFromRight 1s'
            }
        },
    },
    plugins: [],
}
