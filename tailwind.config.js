module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                brand: {
                    light: '#76b3e8',
                    DEFAULT: '#64a6d4',
                    dark: '#4c91ba'
                }
            },
            outline: {
                blue: '2px solid #0000ff',
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [
        require('@tailwindcss/forms')
    ]
};
