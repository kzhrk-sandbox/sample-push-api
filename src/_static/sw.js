self.addEventListener('push', function(event) {
  console.log('Received a push message', event);

  var title = 'Sample Push API';
  var body = 'We have received a push message.';
  var icon = 'http://placekitten.com/192/192';

  event.waitUntil(
    self.registration.showNotification(title, {
      body: body,
      icon: icon
    })
  );
});
