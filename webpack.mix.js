let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/assets/js/frontend/app.js', 'public/js/app.js')
	.js('resources/assets/js/backend/app.js', 'public/js/app-admin.js')
	.sass('resources/assets/sass/frontend/app.scss', 'public/css')
	.sass('resources/assets/sass/backend/app.scss', 'public/css/app-admin.css');
