(function () {
    document.addEventListener('DOMContentLoaded', function(event) {      
      if (!navigator.onLine) {
        checkConnectivity();
      }
      window.addEventListener('online', checkConnectivity, false);
      window.addEventListener('offline', checkConnectivity, false);
    });    
    function checkConnectivity() {
      
      if (navigator.onLine) {
        navigator.serviceWorker.ready
        .then(function (registration) {
         registration.showNotification('You are back online', {
          body: 'Page is ready to view',
          icon: '/android-icon-512x512.png',
          vibrate: [200, 100, 200, 100, 200, 100, 200],
          tag: 'You are back online',
          
        }); 
        });        
      }
      else {
        navigator.serviceWorker.ready
        .then(function (registration) {
          registration.showNotification('No Internet', {
          body: 'we will let you know when this page is ready',
          icon: '/android-icon-512x512.png',
          vibrate: [200, 100, 200, 100, 200, 100, 200],
          tag: 'No Internet'
        }); 
        });
      }
    }
  })();
