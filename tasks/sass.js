/**
 * Created by loutao on 2016/12/5.
 */

var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
    return gulp.src(global.config.src + "/stylesheets/**/*.scss")
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(global.config.dist + '/stylesheets/'));
});

gulp.task('sass-watch', function () {
    gulp.watch(global.config.src + '/stylesheets/**/*.scss', ['sass']);
});