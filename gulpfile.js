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

gulp.task('copy', function(){
  gulp.src('client/index.html') // the thing we want to copy
  .pipe(gulp.dest('./dist')); // where we are copying it to (destination)
})

gulp.task('watch', function(){
  gulp.watch('client/**/*.js', ['build']);
  gulp.watch('client/*.html', ['copy']);
});

gulp.task('default', ['copy', 'build', 'watch']);
