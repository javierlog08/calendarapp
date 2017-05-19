'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');

gulp.task('sass', function () {
  return gulp.src('./app/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('app.css'))
    .pipe(gulp.dest('./app'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./app/**/*.scss', ['sass']);
});


gulp.task('default', function() {
  
});

