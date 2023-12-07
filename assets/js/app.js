$(document).ready(function () {
  let parallaxBg = document.querySelectorAll('.mouse-parallax-bg');

  for (let i = 0; i < parallaxBg.length; i++) {
    window.addEventListener('mousemove', function (e) {
      let x = e.clientX / window.innerWidth;
      let y = e.clientY / window.innerHeight;
      parallaxBg[i].style.transform = 'translate(-' + x * 40 + 'px, -' + y * 40 + 'px)';
    });
  }

  if ($('main').hasClass('hero-page')) {
    $('.page-header').addClass('big-logo');
  } else {

  }

  if ($(document).scrollTop() > 50) {
    $('.page-header').removeClass('big-logo')
  }

  $(window).on('scroll', function () {
    if ($(this).scrollTop() > 30) {
      $('.page-header').removeClass('big-logo')
      $('.page-header').addClass('scrolling');
    } else {

      if ($('main').hasClass('hero-page')) {
        $('.page-header').addClass('big-logo');
      }
      $('.page-header').removeClass('scrolling');
    }
  });
});