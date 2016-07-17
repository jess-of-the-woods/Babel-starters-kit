'use strict';

var gulp = require('gulp');
var babelify = require('babelify');
var browserify = require('browserify');
var source = require('vinyl-source-stream');

gulp.task('build', function(){
  browserify({
    entries: './client/app/main.js',
    debug: true
  })
  .transform(babelify)
  .bundle()
  .pipe(source('app.bundle.js'))
  .pipe(gulp.dest('./dist'));
});
