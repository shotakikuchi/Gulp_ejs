var gulp = require("gulp");
var uglify = require("gulp-uglify");
var plumber = require("gulp-plumber");
var config = require('../config');
var notify = require('gulp-notify');
var cache      = require('gulp-cached');
var jshint = require('gulp-jshint');

gulp.task("js", function() {
  gulp.src(config.path.src.js + "/**/*.js")
      .pipe(plumber({
        errorHandler: notify.onError("Error: <%= error.message %>")
      }))
      .pipe(cache( 'js' ))
      .pipe(jshint())
      .pipe(uglify())
      .pipe(gulp.dest(config.path.dest.js));
});