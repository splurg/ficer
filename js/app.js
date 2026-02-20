var GHPATH = '/github-page-pwa';

if (navigator.serviceWorker) {
    navigator.serviceWorker.register(
        '${GHPATH}/sw.js',
        { scope: '${GHPATH}/' }
    )
}