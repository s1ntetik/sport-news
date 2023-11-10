/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./*.{html,js,vue}'],
    theme: {
        extend: {
            colors: {
                blue: {
                    dark: '#10175B',
                    light: '#141D6E',
                },
                cyan: '#1A91FF',
            },
        }
    },
}