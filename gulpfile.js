/**
 * Created by john on 5/13/15.
 */
var gulp       = require('gulp');
var less       = require('gulp-less');
var sass       = require('gulp-sass');
var nodemon    = require('gulp-nodemon');
var webpack    = require('gulp-webpack');
var wrap       = require('gulp-wrap');
var handlebars = require('gulp-handlebars');
var jshint     = require('gulp-jshint');
var stylish    = require('jshint-stylish');


gulp.task('nodemon',
    function () {
        nodemon({
            script: 'app.js',

        });
    });


gulp.task('compile-less',
    function () {
        return gulp.src('src/client/less/**/*.less')
            .pipe(less('app.css'))
            .pipe(gulp.dest('src/public'));
    });

gulp.task('compile-sass',
    function() {
        return gulp.src('src/client/scss/**/*.scss')
            .pipe(sass('app.css'))
            .pipe(gulp.dest('src/public'));
    });


gulp.task('webpack',
    ['templates'],
    function () {
        return gulp.src('src/client/js/index.js')
            .pipe(webpack({
                output : {
                    filename: 'out.js'
                },
                resolve: {
                    alias: {
                        'handlebars': 'handlebars/runtime.js',
                        'jquery'    : 'jquery/dist/jquery.min.js',
                        //'underscore': 'underscore/underscore-min.js',
                        'backbone'  : 'backbone/backbone-min.js'
                    }
                }
            }))
            .pipe(gulp.dest('src/public'));
    });


gulp.task('templates',
    function () {
        return gulp.src('src/client/templates/**/*.html')
            .pipe(handlebars())
            .pipe(wrap('var handlebars = require("handlebars");  module.exports = handlebars.template(<%= contents %>);'))
            .pipe(gulp.dest('src/client/js/templates'));
    });


gulp.task('jshint',
    function () {
        return gulp.src(['src/client/js/**/*.js', '!src/client/js/templates/**/*.js'])
            .pipe(jshint())
            .pipe(jshint.reporter(stylish));
    });


gulp.task('default', ['compile-sass', 'webpack', 'jshint']);


gulp.task('watch',
    function () {
        gulp.watch(['src/client/js/**/*.js', '!src/client/js/out.js'], ['webpack', 'jshint']);
        //gulp.watch(['src/client/less/**/*.less'], ['compile-less']);
        gulp.watch(['src/client/scss/**/*.scss'], ['compile-sass']);
        gulp.watch(['src/client/templates/**/*.html'], ['templates']);
    });