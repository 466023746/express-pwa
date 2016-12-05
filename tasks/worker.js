/**
 * Created by loutao on 2016/12/5.
 */

var gulp = require('gulp');
var swPrecache = require('sw-precache');

var config = global.config,
    root = config.root,
    src = config.src,
    dist = config.dist;

gulp.task('worker', function(cb) {
    swPrecache.write(dist + '/service-worker.js', {
        staticFileGlobs: [
            dist + '/{javascripts,stylesheets,images}/**/*.{js,css,png,jpg,gif,svg,eot,ttf,woff}'
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
        stripPrefix: dist
    }, cb);
});

gulp.task('worker-watch', function () {
    gulp.watch([dist + '/**/*', root + '/views/**/*'], ['worker']);
});