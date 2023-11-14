$(document).ready(function () {
  let bg = document.querySelectorAll('.mouse-parallax-bg');

  for (let i = 0; i < bg.length; i++){
    window.addEventListener('mousemove', function(e) {
      let x = e.clientX / window.innerWidth;
      let y = e.clientY / window.innerHeight;
      bg[i].style.transform = 'translate(-' + x * 40 + 'px, -' + y * 40 + 'px)';
    });
  }
});