// Viewport detection
$(document).ready(function() {
  $('.post').addClass("hidden").viewportChecker({
      classToAdd: 'visible animated fadeInUp',
      offset: 50
  });
});

// Survey block
$(document).ready(function() {
  $(".close").click(function() {
    $('.survey').addClass("disabled");
  });
});

// Cookie bar
$(document).ready(function() {
  $('.cookie-message').cookieBar({ closeButton : '.my-close-button', hideOnClose: false });
  $('.cookie-message').on('cookieBar-close', function() { $(this).slideUp(); });
});

// Header apperence
$(document).scroll(function() {
  var scroll = $(window).scrollTop();
  if (scroll >= 640) {
    $(".header").slideDown(400);
  } else {
    $(".header").slideUp(400);
  }
});
