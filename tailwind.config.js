const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    purge: [
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        "./resources/**/*.js",
        './resources/js/**/*.vue',
    ],
    theme: {
        extend: {
            fontFamily: {
                rubik: ['Rubik', ...defaultTheme.fontFamily.sans],
            },
        },
    },
    plugins: [],
}
