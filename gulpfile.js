/**
 * Created by john on 5/13/15.
 */
var gulp = require('gulp');
var nodemon = require('gulp-nodemon');


gulp.task('nodemon',
    function () {
        nodemon({
            script: 'app.js',

        });
    });