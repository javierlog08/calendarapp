'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var shell = require('gulp-shell');

gulp.task('sass', function () {
  return gulp.src('./app/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('app.css'))
    .pipe(gulp.dest('./app'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./app/**/*.scss', ['sass']);
});

gulp.task('docs', shell.task([
  'node '+
  'node_modules/jsdoc/jsdoc.js ' +
  '-c jsdoc.conf.json ' +   // config file
  '-t node_modules/angular-jsdoc/default ' +   // template file
  '-d docs ' +      // output directory
  './README.md ' +  // to include README.md as index contents
  '-r '
  //'-r app'
]));

gulp.task('default', function () {

});

