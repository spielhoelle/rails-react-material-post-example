'use strict';

const gulp = require('gulp');
const svgmin = require('gulp-svgmin');
const svgstore = require('gulp-svgstore');
const bs = require('browser-sync').create(); // create a browser sync instance.

var setupWatchers = function() {
  gulp.watch(['./app/views/**/*.haml',
              './app/assets/javascripts/**/*.js'], ['reload']);
  gulp.watch(['./app/assets/stylesheets/**/*.sass'], ['reloadCSS'])
};

gulp.task('reload', function(){
  return bs.reload();
});

gulp.task('reloadCSS', function() {
  return bs.reload('*.css');
});

gulp.task('init', function() {
  bs.init({
      proxy: 'localhost:3000',
      port: 8000,
      open: false,
      ui: {
        port: 8001
      }
  });

  setupWatchers();
});

gulp.task('bs', ['init']);

gulp.task('svgicons', function () {
  return gulp
    .src('app/assets/images/icons/*.svg')
    .pipe(svgmin(function (file) {
      return {
        plugins: [{
          cleanupIDs: {
            minify: true
          }
        }]
      }
    }))
    .pipe(svgstore())
    .pipe(gulp.dest('app/assets/images/'));
});
