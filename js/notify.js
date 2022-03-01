(function () {
    if (!("Notification" in window)) {
        alert("Browser does not support notifications");
    }
    else if (Notification.permission === "granted") {
        navigator.serviceWorker.ready
            .then(function (registration) {
               
                registration.showNotification('App Notification', {
          body: 'Welcome back to our app',
          icon: '/android-icon-512x512.png',
          vibrate: [200, 100, 200, 100, 200, 100, 200],
          tag: 'App Notification'
        }); 
            
            });
    }
    else if (Notification.permission !== "denied") {
        Notification.requestPermission(function (permission) {
            if (permission === "granted") {
                navigator.serviceWorker.ready
                    .then(function (registration) {
                 registration.showNotification('App Notification', {
          body: 'Welcome back to our app',
          icon: '/android-icon-512x512.png',
          vibrate: [200, 100, 200, 100, 200, 100, 200],
          tag: 'App Notification'
        }); 
                    });
            }
        });
    }
})();
