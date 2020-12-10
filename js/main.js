$(function () {
   $('.header__burger').click(function (event) {
      $('.header__burger,.menu').toggleClass('active');
   });
   // slider
   $('.slider').slick({
      dots: true,
      arrows: false,
      infinite: true,
      autoplay: 1300,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 4,
      responsive: [
         {
            breakpoint: 1024,
            settings: {
               slidesToShow: 3,
               slidesToScroll: 3,
               infinite: true,
               dots: true
            }
         },
         {
            breakpoint: 600,
            settings: {
               slidesToShow: 2,
               slidesToScroll: 2
            }
         },
         {
            breakpoint: 480,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1
            }
         }
      ]
   });
   // Scroll
   $("#menu, #top").on("click", "a", function (event) {
      //отменяем стандартную обработку нажатия по ссылке
      event.preventDefault();
      //забираем идентификатор бока с атрибута href
      var id = $(this).attr('href'),
         //узнаем высоту от начала страницы до блока на который ссылается якорь
         top = $(id).offset().top;
      //анимируем переход на расстояние - top за 1500 мс
      $('body,html').animate({ scrollTop: top }, 1500);
   });
});