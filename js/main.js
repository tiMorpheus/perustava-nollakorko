$(function () {
   $('.video-carousel-block').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      appendArrows: $('.arrows'),
      prevArrow: '<button id="prev" type="button" class="btn-juliet"><i class="fa fa-chevron-left" aria-hidden="true"></i></button>',
      nextArrow: '<button id="next" type="button" class=" btn-juliet"><i class="fa fa-chevron-right" aria-hidden="true"></i></button>'
   });
});



// define images
// var images = [
//    "./img/animation/1_Perustava_nk_2021_7_12_nelio.jpg",
//    "./img/animation/2_Perustava_nk_2021_7_12_nelio.jpg",
//    "./img/animation/3_Perustava_nk_2021_7_12_nelio.jpg",
//    "./img/animation/4_Perustava_nk_2021_7_12_nelio.jpg",
//    "./img/animation/5_Perustava_nk_2021_7_12_nelio.jpg",
//    "./img/animation/6_Perustava_nk_2021_7_12_nelio.jpg",
//    "./img/animation/7_Perustava_nk_2021_7_12_nelio.jpg",
//    "./img/animation/8_Perustava_nk_2021_7_12_nelio.jpg",
//    "./img/animation/9_Perustava_nk_2021_7_12_nelio.jpg",
//    "./img/animation/10_Perustava_nk_2021_7_12_nelio.jpg",
//    "./img/animation/11_Perustava_nk_2021_7_12_nelio.jpg",
//    "./img/animation/12_Perustava_nk_2021_7_12_nelio.jpg",
//    "./img/animation/13_Perustava_nk_2021_7_12_nelio.jpg",
//    "./img/animation/14_Perustava_nk_2021_7_12_nelio.jpg",
// ];

var images = [
   "./img/animation/gif/1_Perustava_nk_2021_7_12_nelio.gif",
   "./img/animation/gif/2_Perustava_nk_2021_7_12_nelio.gif",
   "./img/animation/gif/3_Perustava_nk_2021_7_12_nelio.gif",
   "./img/animation/gif/4_Perustava_nk_2021_7_12_nelio.gif",
   "./img/animation/gif/5_Perustava_nk_2021_7_12_nelio.gif",
   "./img/animation/gif/6_Perustava_nk_2021_7_12_nelio.gif",
   "./img/animation/gif/7_Perustava_nk_2021_7_12_nelio.gif",
   "./img/animation/gif/8_Perustava_nk_2021_7_12_nelio.gif",
   "./img/animation/gif/9_Perustava_nk_2021_7_12_nelio.gif",
   "./img/animation/gif/10_Perustava_nk_2021_7_12_nelio.gif"
 
];

// TweenMax can tween any property of any object. We use this object to cycle through the array
var obj = { curImg: 0 };

// create tween
var tween = TweenMax.to(obj, 0.5,
   {

      curImg: images.length - 1,	// animate propery curImg to number of images
      roundProps: "curImg",				// only integers so it can be used as an array index
      repeat: 0,									// repeat 3 times
      immediateRender: true,			// load first image automatically
      ease: Linear.easeNone,			// show every image the same ammount of time
      onUpdate: function () {
         $(".animation-img").attr("src", images[obj.curImg]); // set the image source
      }
   }
);

// init controller
var controller = new ScrollMagic.Controller();
var containerHeight = $('.features-section').innerHeight() - 400;
// build scene
var scene = new ScrollMagic.Scene({ triggerElement: "#trigger", duration: containerHeight })
   .setTween(tween)
   // .addIndicators() // add indicators (requires plugin)
   .addTo(controller);

// handle form change
$("form.move input[name=duration]:radio").change(function () {
   scene.duration($(this).val());
});


var text = $('.text-overflow'),
   btn = $('.btn-overflow'),
   hidebtn = $('.btn-overflow-hide');




btn.click(function (e) {
   e.stopPropagation();
   $(this).parent().clone(true).addClass('appended').appendTo($(this).parent());



});

hidebtn.click(function (e) {
   e.stopPropagation();
   $(this).parent().fadeOut().remove();



});






//------------------------


// $(document).ready(function () {
//    // Add smooth scrolling to all links
//    $("a.nav-link").on('click', function (event) {
//       event.preventDefault();
//       // Make sure this.hash has a value before overriding default behavior
//       if (this.hash !== "") {
//          // Prevent default anchor click behavior


//          // Store hash
//          var hash = this.hash;

//          let offset = $(hash).offset().top - $(".header").height() + 'px'

//          // Using jQuery's animate() method to add smooth page scroll
//          // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
//          $('html, body').animate({
//             scrollTop: offset
//          }, 800, function () {

//             console.log(offset)
//             // Add hash (#) to URL when done scrolling (default click behavior)
//             window.location.hash = hash;


//          });
//       } // End if
//    });
// });

$('a.nav-link').click(function () {
   $('.menu-btn').click()
});


$(function () {
   $('a[href*=#]:not([href=#])').click(function () {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
         && location.hostname == this.hostname) {

         var target = $(this.hash);
         target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
         if (target.length) {
            $('html,body').animate({
               scrollTop: target.offset().top - 125 //offsets for fixed header
            }, 1000);
            return false;
         }
      }
   });
   //Executed on page load with URL containing an anchor tag.
   if ($(location.href.split("#")[1])) {
      var target = $('#' + location.href.split("#")[1]);
      if (target.length) {
         $('html,body').animate({
            scrollTop: target.offset().top - 120 //offset height of header here too.
         }, 1000);
         return false;
      }
   }
});