var gulp = require("gulp");
var config = require('../config');
var prettify = require('gulp-prettify');
var htmlhint = require("gulp-htmlhint");
var plumber = require('gulp-plumber');
var notify = require('gulp-notify');
var cache      = require('gulp-cached');

gulp.task('html', function () {
    gulp.src(config.path.src.views + "**/*.html")
        .pipe(plumber({
            errorHandler: notify.onError("Error: <%= error.message %>")
        }))
        .pipe(cache( 'html' ))
        .pipe(htmlhint())
        .pipe(prettify({indent_size: 2}))
        .pipe(gulp.dest(config.path.dest.views));
});