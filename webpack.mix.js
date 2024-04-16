let mix = require('laravel-mix');
// your Wordpress theme name here
mix.setPublicPath(`public`);

mix.sass(`resources/scss/main.scss`, `public/css`).sourceMaps()
    .js(`resources/js/main.js`, `public/js`)
    .copy('resources/img', 'public/img')
    .copy('resources/fonts', 'public/fonts')
    .options({
        processCssUrls: false
    });

mix.browserSync({
    proxy: 'http://portfolio-wordpress.test',
    files: [
        '**/*.php',
        '**/*.js',
        '**/*.css'
    ]
});