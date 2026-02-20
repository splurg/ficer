var GHPATH = '';

if (navigator.serviceWorker) {
    navigator.serviceWorker.register(
        `${GHPATH}/sw.js`,
        { scope: `${GHPATH}/` }
    )
}