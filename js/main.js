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
var images = [
   "./img/animation/1_Perustava_nk_2021_7_12_nelio.jpg",
   "./img/animation/2_Perustava_nk_2021_7_12_nelio.jpg",
   "./img/animation/3_Perustava_nk_2021_7_12_nelio.jpg",
   "./img/animation/4_Perustava_nk_2021_7_12_nelio.jpg",
   "./img/animation/5_Perustava_nk_2021_7_12_nelio.jpg",
   "./img/animation/6_Perustava_nk_2021_7_12_nelio.jpg",
   "./img/animation/7_Perustava_nk_2021_7_12_nelio.jpg",
   "./img/animation/8_Perustava_nk_2021_7_12_nelio.jpg",
   "./img/animation/9_Perustava_nk_2021_7_12_nelio.jpg",
   "./img/animation/10_Perustava_nk_2021_7_12_nelio.jpg",
   "./img/animation/11_Perustava_nk_2021_7_12_nelio.jpg",
   "./img/animation/12_Perustava_nk_2021_7_12_nelio.jpg",
   "./img/animation/13_Perustava_nk_2021_7_12_nelio.jpg",
   "./img/animation/14_Perustava_nk_2021_7_12_nelio.jpg",
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
var containerHeight = $('.sticky-container').innerHeight();
// build scene
var scene = new ScrollMagic.Scene({ triggerElement: "#trigger", duration: containerHeight })
   .setTween(tween)
   // .addIndicators() // add indicators (requires plugin)
   .addTo(controller);

// handle form change
$("form.move input[name=duration]:radio").change(function () {
   scene.duration($(this).val());
});
