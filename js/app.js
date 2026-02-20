var GHPATH = '/ficer';

if (navigator.serviceWorker) {
    navigator.serviceWorker.register(
        `${GHPATH}/sw.js`,
        { scope: `${GHPATH}/` }
    )
}