const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function scss() {
  console.log('call scss ....')
  return gulp.src('./*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./assets/css'));
};

function watching() {
  return gulp.watch('./*scss', scss)
}

exports.scss = scss;
exports.watch = watching;