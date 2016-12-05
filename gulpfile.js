/**
 * Created by loutao on 2016/11/30.
 */
var gulp = require('gulp');
var runSequence = require('run-sequence');

global.config = {
    src: 'public',
    dist: 'dist',
    root: __dirname
};

require('require-all')({dirname: __dirname + '/tasks'});

var allTasks = ['sass', 'webpack'];

gulp.task('default', function() {
    runSequence(
        allTasks,
        'worker'
    )
});

gulp.task('dev', function () {
    runSequence(
        allTasks,
        'worker',
        'watch'
    )
});