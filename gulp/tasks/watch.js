var gulp = require("gulp");
var watch = require( 'gulp-watch' );

//パス
var config = require('../config');

gulp.task("watch", function () {

    watch([config.path.src.scss + "/**/*.scss"], function(event){
        gulp.start(['sass']);
    });

    watch([config.path.src.views + "/style.scss"], function(event){
        gulp.start(['stylecss']);
    });

    watch([config.path.src.views + "/**/*.ejs"], function(event){
        gulp.start(['ejs']);
    });

    watch([config.path.src.js + "/**/*.js"], function(event){
        gulp.start(['js']);
    });

    watch([config.path.src.images + "/**/*.+(jpg|jpeg|png|gif|svg)"], function(event){
        gulp.start(['img']);
    });

    //gulp.watch(config.path.src.scss + "/**/*.scss", ["sass"]);
    //gulp.watch(config.path.src.views + "/style.scss", ["stylecss"]);
    //gulp.watch(config.path.src.views + "/**/*.ejs", ["ejs"]);
    //gulp.watch(config.path.src.js + "/**/*.js", ["js"]);

    //gulp.watch(config.path.src.img + "/**/*.+(jpg|jpeg|png|gif|svg)", ["images_min"]);
});
