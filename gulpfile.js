 let gulp = require('gulp');
 let autoprefixer = require('gulp-autoprefixer');
 let concat = require('gulp-concat');
 let cleanCSS = require('gulp-clean-css');
 let rename = require("gulp-rename");
 let uncss = require('gulp-uncss');
 let uglify = require('gulp-uglify');
 const imagemin = require('gulp-imagemin');
 let del = require('del');
 const browserSync = require('browser-sync').create();
var minifyjs = require('gulp-js-minify');

 let sass = require('gulp-sass');
 let watch = require('gulp-watch');
 const scssFiles = ['./src/sass/style.scss'];
const css_normalizeFiles = ['./src/sass/normalize.css','./src/sass/style.css'];
 const styleCss = ['./build/css/main_min.css'];
 const mainCss = ['./buld/css/main_min.css'];
 const img = ['src/img/*'];
let js = ['src/js/*.js'];

 gulp.task('sass', function () {
     return gulp.src(scssFiles)
         .pipe(sass())
         .pipe(gulp.dest('./src/sass'))
         .pipe(browserSync.stream());
 });

 gulp.task('css',function () {
     gulp.src(css_normalizeFiles)
         .pipe(concat("main.css"))
         .pipe(cleanCSS({
             level: 2
         }))
         .pipe(autoprefixer({
             browsers: ['last 2 versions'],
             cascade: false
         }))
         .pipe(rename("main_min.css"))
         .pipe(gulp.dest('./build/css'))
         .pipe(browserSync.stream());
 });


 gulp.task('scripts', function () {
     gulp.src(js)
         .pipe(concat('all.js'))
         .pipe(minifyjs())
         .pipe(gulp.dest('./build/js'))
         .pipe(browserSync.stream());

 });


 gulp.task('img',function() {
     gulp.src(img)
     .pipe(imagemin())
     .pipe(gulp.dest('build/img'))
     .pipe(browserSync.stream());
 });

 // function clean() {
 //     del(['./build/css/style.css']);
 // }







 gulp.task('serve', ['sass', 'css', 'scripts', 'img'], function () {
     browserSync.init({
         server: './'
     });

     gulp.watch(scssFiles, ['sass']); 
     gulp.watch(css_normalizeFiles, ['css']); 
     gulp.watch(js, ['scripts']); 
     gulp.watch(img, ['img']); 

     
     gulp.watch('./index.html').on('change', browserSync.reload);
 });
//
// gulp.task('ser', ['scripts'], function () {
//     browserSync.init({
//         server: './'
//     });
//     gulp.watch(js, ['scripts']); 
//
//     
//     gulp.watch('./*.html').on('change', browserSync.reload);
// });
//gulp.task('js', ['ser']);

 gulp.task('watch', ['serve']);
