// Update footer year automatically
document.getElementById('currentYear').textContent = new Date().getFullYear();

// Smooth scroll
$(document).on('click', '.smooth-scroll', function (e) {
  console.log("dun clickered");
  e.preventDefault();
  var target = $(this).attr('href');
  $('html, body').animate({
    scrollTop: $(target).offset().top
  }, 1000);
});

// Collapse nav menu after click
$(document).ready(function () {
  $('.navbar-nav .nav-link').click(function () {
    $('.navbar-collapse').collapse('hide');
  });
});
