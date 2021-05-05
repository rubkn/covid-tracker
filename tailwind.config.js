module.exports = {
    purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {},
        container: {
            center: true,
            padding: '2rem',
        },
        fontFamily: {
            rubik: ['Rubik', 'sans-serif'],
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
