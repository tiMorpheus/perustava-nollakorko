$(window).scroll(function () {
   var nav1 = $('.nav_container'),
      nav2 = $('.nav_container2'),
      scroll = $(window).scrollTop();

   if (scroll >= 40) {
      nav2.show();
      nav1.hide();


   }
   else {
      nav1.show();
      nav2.hide();

   }
});