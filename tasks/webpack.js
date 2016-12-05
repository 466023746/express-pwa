/**
 * Created by loutao on 2016/12/5.
 */

var gulp = require('gulp');
var webpack = require('webpack-stream');
var argv = require('yargs').argv;
var named = require('vinyl-named');

var config = global.config,
    root = config.root,
    src = config.src,
    dist = config.dist;

var name = argv.path ? argv.path : 'index';
var parentConfig = require(root + '/webpack.config');
var currentConfig = require(root + '/webpack.' + name + '.config');
var resultConfig = Object.assign(parentConfig, currentConfig);
var source = src + '/javascripts/' +  name + '/app.js';
var target = dist + '/javascripts/' +  name;

gulp.task('webpack', function () {
    return gulp.src(source)
        .pipe(named(function (file) {
            return 'app.bundle'
        }))
        .pipe(webpack(resultConfig))
        .pipe(gulp.dest(target));
});

gulp.task('webpack-watch', function () {
    return gulp.src(source)
        .pipe(named(function (file) {
            return 'app.bundle'
        }))
        .pipe(webpack(Object.assign({}, resultConfig, {watch: true})))
        .pipe(gulp.dest(target));
});