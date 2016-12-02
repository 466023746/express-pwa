/**
 * Created by loutao on 2016/12/2.
 */

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./service-worker.js')
        .then(function () {
            console.log('service worker registered');
        })
}