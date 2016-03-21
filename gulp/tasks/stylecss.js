var gulp = require("gulp");
var sass = require("gulp-sass");
var autoprefixer = require("gulp-autoprefixer");
var plumber = require("gulp-plumber");
var config = require('../config');
var notify = require('gulp-notify');
var cache      = require('gulp-cached');
var csscomb = require('gulp-csscomb');
var cmq = require('gulp-combine-media-queries');

gulp.task("stylecss", function() {
    gulp.src(config.path.src.views + "/style.scss")
        .pipe(cache( 'sass' ))
        .pipe(plumber({
            errorHandler: notify.onError("Error: <%= error.message %>")
        }))
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(csscomb())
        .pipe(cmq({
            log: true
        }))
        //.pipe(gulp.dest(config.path.src.css))
        .pipe(gulp.dest(config.path.dest.views));
});
