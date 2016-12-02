/**
 * Created by loutao on 2016/11/30.
 */
var gulp = require('gulp');
var swPrecache = require('sw-precache');

gulp.task('worker', function(callback) {
    swPrecache.write('public/service-worker.js', {
        staticFileGlobs: [
            'public/**/*.{js,css,png,jpg,gif,svg,eot,ttf,woff}'
        ],
        dynamicUrlToDependencies: {
            '/': ['views/index.ejs']
        },
        runtimeCaching: [
            {
                urlPattern: /^http:\/\/img\.tuniucdn\.com\/site\/m2015\/js\/modules\/chat\/lib\/isShowChatEntry\.js$/,
                handler: 'fastest'
            }
        ],
        stripPrefix: 'public'
    }, callback);
});

gulp.task('worker-watch', ['worker'], function() {
    gulp.watch([
        'public/**/*.{js,css,png,jpg,gif,svg,eot,ttf,woff}',
        'views/**/*'
    ], ['worker'])
});