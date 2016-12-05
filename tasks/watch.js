/**
 * Created by loutao on 2016/12/5.
 */

var gulp = require('gulp');
var runSequence = require('run-sequence');

var allTasks = ['sass', 'webpack', 'worker'];

gulp.task('watch', function () {
    runSequence(
        allTasks.map(v => v + '-watch')
    )
});