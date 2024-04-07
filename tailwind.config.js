/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                inter: ['inter', 'sans-serif'],
                lato: ['lato', 'sans-serif'],
                poppins: ['Poppins', 'sans-serif'],
            },
            colors: {
                'at-purple': '#6B3CC9', // Main Color
                'at-purple-light': '#FAF8FF',
                'at-green': '#4DCA79',
                'at-blue': '#1CBDDD',
                'at-orange': '#F28D35',
                'at-grey': '#6F6C90',
            },
            screens: {
                sm: '375px', // Small screens, like iPhone SE
                md: '768px', // Medium screens, like iPad
                lg: '1200px', // Large screens, like small desktops
                xl: '1440px', // Extra large screens, like large desktops
            },
            maxWidth: {
                custom: '1440px', // Custom max width value
            },
            maxHeight: {
                128: '40rem',
            },
        },
    },
    plugins: [],
};
