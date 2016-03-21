var gulp = require("gulp");
var imagemin = require('gulp-imagemin');
var plumber = require("gulp-plumber");
var changed = require('gulp-changed');
var config = require('../config');

gulp.task("img", function () {
    var imageminOptions = {
        optimizationLevel: 7
    };
    gulp.src(config.path.src.images + "/**/*.+(jpg|jpeg|png|gif|svg)")

        .pipe(changed(config.path.dest.images))

        .pipe(imagemin(
            //imageminOptions
        ))
        .pipe(gulp.dest(config.path.dest.images));
});