 let gulp = require('gulp');
let autoprefixer = require('gulp-autoprefixer');
let concat = require('gulp-concat');
 let cleanCSS = require('gulp-clean-css');
let rename = require("gulp-rename");
let uncss = require('gulp-uncss');
let uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');



gulp.task('default', function () {
  return gulp.src('css/*.css')
    .pipe(concat("main.css"))
       .pipe(cleanCSS({level: 2}))
    .pipe(uncss({html: ['index.html']}))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))

    .pipe(rename("main.min.css"))
    
    .pipe(gulp.dest('build/css'));
});


gulp.task('scripts', function() {
  return gulp.src('js/*.js')
    .pipe(concat('all.js'))
    .pipe(uglify({toplevel: true}))
    .pipe(gulp.dest('build/js'));
})
 



 
gulp.task('img', () =>
    gulp.src('src/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('build/images'))
);