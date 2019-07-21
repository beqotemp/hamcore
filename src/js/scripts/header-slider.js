import $ from "jquery";
import slickSlider from 'slick-carousel';
$(document).ready(function(){
  $('.header-slider').slick({
  	slidesToShow: 1,
  	slidesToScroll: 1,
    infinite: true,
    dots:false,
    arrows:false,
    asNavFor: '.header-slider__controls'
  });
});
 
$('.header-slider__controls').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: '.header-slider',
  dots: false,
  centerMode: true,
  focusOnSelect: true
});