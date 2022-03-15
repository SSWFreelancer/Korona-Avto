$(document).ready(function () {

   $('.slider__container').slick({
      arrows: true,
      dots: false,
      adaptiveHeight: true,
      slidesToShow: 1,
      speed: 600,
      easing: 'ease-in',
      infinite: true,
      autoplay: true,
      autoplaySpeed: 10000,
      pauseOnFocus: true,
      pauseOnHover: true,
      pauseOnDotsHover: true,
      draggable: true,
      swipe: true,
      touchThreshold: 5,
   });

});