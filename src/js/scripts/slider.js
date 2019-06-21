import $ from "jquery";
import slickSlider from 'slick-carousel';
$(document).ready(function(){
	 $('.slider-main').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.slider-bar'
	});
	$('.slider-bar').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: '.slider-main',
		dots: true,
		centerMode: true,
		vertical: true,
		verticalSwiping: true,
		focusOnSelect: true
	});
});


