const gulp = require("gulp");
const njkRender = require("gulp-nunjucks-render");
const data = require("gulp-data");
const gutil = require("gulp-util");
// const connect = require("gulp-connect");
const sass = require("gulp-sass");
const concat = require('gulp-concat');

sass.compiler = require("node-sass");

const fs = require('fs');

//Render HTML
gulp.task("nunjucks", function() {
    //log
    gutil.log("=> Building HTML Pages...");
    // Get nunjucks template files
    return (
        gulp.src("app/src/pages/**/*.+(html|nunjucks|njk)")
        //add data
        .pipe(data(function() {
            return require("./app/data.json");
            // return JSON.parse(fs.readFileSync('./app/data.json'))
        }))
        // render nunjuck template files
        .pipe(njkRender({
            path: ['app/src/templates']
        }))
        //out to dist
        .pipe(gulp.dest('app/dist'))
    );
});

//Compile SCSS
gulp.task("sass-compile", function () {
    //log
    gutil.log("=> Building CSS Files...");
    //Compile SCSS
    return (
        gulp.src("app/src/scss/style.scss")
        //catch error
        .pipe(sass({style:'compressed'}).on('error', sass.logError))
        //output to dist/css
        .pipe(gulp.dest("app/dist/css"))
    );

});

//Transpile es6 modules
gulp.task("js-concat", function () {
    //log
    gutil.log("=> Building JS Files");
    //Transpile JS
    return (
        gulp.src("app/src/scripts/**/*.js")
        //transpile modules
        .pipe(concat('main.js'))
        //out to dist/js
        .pipe(gulp.dest('app/dist/js'))
    );
});

//Watch Changes
gulp.task('watch', function () {
    gulp.watch('app/src/**/*.+(html|nunjucks|njk)', gulp.series('nunjucks'));
    gulp.watch("app/src/scss/**/*.scss", gulp.series('sass-compile'));
    gulp.watch("app/src/scripts/**/*.js", gulp.series('js-concat'));
});

//Build
gulp.task('build', gulp.series('nunjucks', 'sass-compile', 'js-concat'));

