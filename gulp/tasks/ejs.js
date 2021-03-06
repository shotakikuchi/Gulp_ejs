var gulp = require("gulp");
var ejs = require("gulp-ejs");
var plumber = require("gulp-plumber");
var config = require('../config');
var notify = require('gulp-notify');
var cache = require('gulp-cached');
var rename = require('gulp-rename');
var prettify = require('gulp-prettify');
var htmlhint = require("gulp-htmlhint");

gulp.task("ejs", function () {
    gulp.src(
        [config.path.src.views + "/**/*.ejs", '!' + config.path.src.views +"/**/_*.ejs"]
        )
        .pipe(cache('ejs'))
        .pipe(plumber({
            errorHandler: notify.onError("Error: <%= error.message %>")
        }))
        .pipe(ejs())
        .pipe(rename({
            extname: '.html'
        }))
        .pipe(htmlhint())
        .pipe(prettify({indent_size: 2}))
        .pipe(gulp.dest(config.path.dest.views))
});