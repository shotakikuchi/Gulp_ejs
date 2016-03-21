var gulp = require("gulp");
var browserSync = require("browser-sync").create();
var config = require('../config');

gulp.task("server", function () {

    browserSync.watch([
        config.path.dest.views,
        config.path.dest.css,
        config.path.dest.js,
        config.path.dest.images
    ]).on('change', browserSync.reload);

    browserSync.init({
        server: {
            baseDir: config.path.dest.views
        },ghostMode: {
            location: true
        }
    });
});