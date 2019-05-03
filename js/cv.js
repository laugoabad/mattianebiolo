jQuery(function($) {

  var seccionFadeIn = function() {
    $('.seccion').each(function(i) {
      var cursor = $(window).scrollTop() + $(window).height();
      var seccionTop = $(this).offset().top;
      if (cursor > seccionTop) {
        $(this).animate({'opacity': '1'},3000);
      }
    });
  };

  var stopScrollIndicator = function() {
    $scroll = $('.scroll');
    $scroll.removeClass('scroll');
  };

//   var animateSkills = function() {
//     var widthScreen = screen.width;
//     var skills = document.getElementsByClassName('saludo3');
//     skills.style.left = -200px;
//     $(".saludo3").animate([
//   // keyframes
//   { transform: 'translateX(-300px)' },
//   { transform: 'translateX(400px)'}
// ], {
//   // timing options
//   duration: 3000,
//   iterations: Infinity
// });
//  };

//  $('.saludo3').animate({'width': '150px', 'height': '150px', 'font-size': '2.4em'},3000);
  $(window).ready(seccionFadeIn);
  // $(window).ready(animateSkills);
  $(window).on('scroll', stopScrollIndicator);
  $(window).on('scroll', seccionFadeIn);

 });
