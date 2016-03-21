var gulp = require("gulp");
var sass = require("gulp-sass");
var autoprefixer = require("gulp-autoprefixer");
var plumber = require("gulp-plumber");
var config = require('../config');
var notify = require('gulp-notify');
var cache      = require('gulp-cached');
var csscomb = require('gulp-csscomb');

gulp.task("css", function() {
    gulp.src(config.path.src.css + "/**/*.css")
        .pipe(cache( 'css' ))
        .pipe(plumber({
            errorHandler: notify.onError("Error: <%= error.message %>")
        }))
        //.pipe(sass())
        .pipe(autoprefixer())
        .pipe(csscomb())
        //.pipe(gulp.dest(config.path.src.css))
        .pipe(gulp.dest(config.path.dest.css));
});
