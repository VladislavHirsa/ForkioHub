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
 let reload = browserSync.reload;
 let sass = require('gulp-sass');
 // let watch = require('gulp-watch');
 const scssFiles = ['./sass/**/*.scss']
 const cssFiles = ['./build/css/normalize.css',
                       './build/css/style.css']



 function sAss() {
     return gulp.src(scssFiles)
         .pipe(sass().on('error', sass.logError))
         .pipe(gulp.dest('./build/css'));


 };

 function css() {
     return gulp.src(cssFiles)
         .pipe(concat("main.css"))
         .pipe(cleanCSS({
             level: 2
         }))
         .pipe(uncss({
             html: ['index.html']
         }))
         .pipe(autoprefixer({
             browsers: ['last 2 versions'],
             cascade: false
         }))
         .pipe(rename("main_min.css"))
         .pipe(gulp.dest('./build/css'));
 };


 gulp.task('scripts', function () {
     return gulp.src('js/*.js')
         .pipe(concat('all.js'))
         .pipe(uglify({
             toplevel: true
         }))
         .pipe(gulp.dest('build/js'));
 });


 gulp.task('img', () =>
     gulp.src('src/images/*')
     .pipe(imagemin())
     .pipe(gulp.dest('build/images'))
 );

 // function clean() {
 //     del(['./build/css/style.css']);
 // }



 //gulp.task('browser-sync', function() {
 //    browserSync.init({
 //        server: {
 //            baseDir: "./"
 //        }
 //    });
 //});

 function wat() {
     browserSync.init({
         server: {
             baseDir: "./"
         },
         tunnel: true
     });

//     gulp.watch('./sass/**/*.scss', sAss)
    return gulp.watch('./build/css/*.css', css)
     gulp.watch('./*.html', briuserSync.reload)


 };


 gulp.task('css', css);
 gulp.task('sAss', sAss);
 // gulp.task('clean', clean);
 gulp.task('wat', wat);
