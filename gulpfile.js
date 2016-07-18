'use strict';

var gulp = require('gulp');
var babelify = require('babelify');
var browserify = require('browserify');
var source = require('vinyl-source-stream');

gulp.task('build', function(){
  browserify({
    entries: './client/app/main.js', // root file that calls in all the rest of them.
    debug: true
  })
  .transform(babelify)
  .bundle() // stitch it all together (browserify terminology)
  .pipe(source('app.bundle.js'))
  .pipe(gulp.dest('./dist')); // set destination folder.. pipe to it
});
