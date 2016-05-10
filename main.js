(function () {
  if ('serviceWorker' in window.navigator) {
    navigator.serviceWorker.register('sw.js').then(function (registration) {
      console.log('service worker registration');
    }).catch(function (err) {
      console.log('error: ' + err);
    });

    navigator.serviceWorker.ready.then(function (serviceWorkerRegistration) {
      serviceWorkerRegistration.pushManager.subscribe({userVisibleOnly: true})
        .then(function (s) {
          console.log(s);
        }, function (err) {
          console.log('error: ' + err);
        });
    });
  }
}());
