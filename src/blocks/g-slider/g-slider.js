"use strict";
// o2.initSlider = function ()
// {
// 	$('.g-slider').slick({
// 		infinite: true,
// 		slidesToShow: 5,
// 		slidesToScroll: 3,
// 		prevArrow: '<div class="prev-arrow"></div>',
// 		nextArrow: '<div class="next-arrow"></div>'
// 	});
// };


// o2.initSlider = function ()
// {
// 	$('.g-slider').slick({
// 		infinite: true,
// 		slidesToShow: 5,
// 		slidesToScroll: 3,
// 		prevArrow: '<div class="prev-arrow"></div>',
// 		nextArrow: '<div class="next-arrow"></div>'
// 	});
// };

o2.initSlider = function ()
{
	$('.g-slider').each(function(key, item) {

	  let sliderIdName = 'slider' + key;
	  // let prevArrowIdName = 'prevArrow' + key;
	  // let nextArrowIdName = 'nextArrow' + key;
	  this.id = sliderIdName;
	  let sliderId = '#' + sliderIdName;

	  $(sliderId).slick({
	    infinite: true,
		slidesToShow: 5,
		slidesToScroll: 3,
		prevArrow: '<div class="prev-arrow"></div>',
		nextArrow: '<div class="next-arrow"></div>'
	  });

	});
};

// $('.slider-for').each(function(key, item) {

//   var sliderIdName = 'slider' + key;
//   var sliderNavIdName = 'sliderNav' + key;

//   this.id = sliderIdName;
//   $('.slider-nav')[key].id = sliderNavIdName;

//   var sliderId = '#' + sliderIdName;
//   var sliderNavId = '#' + sliderNavIdName;

//   $(sliderId).slick({
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrows: false,
//     fade: true,
//     asNavFor: sliderNavId
//   });

//   $(sliderNavId).slick({
//     slidesToShow: 4,
//     slidesToScroll: 1,
//     asNavFor: sliderId,
//     dots: true,
//     arrows: true,
//     centerMode: false,
//     focusOnSelect: true
//   });

// });