import $ from "jquery";

/*Tooltip*/
$(document).ready(function(){
	$('.status').click(function(){
		if (!$(this).hasClass("active")) {
			$(this).removeClass("active-ie")
		} else {
			$(this).addClass("active-ie");
			
		};
		let self = this; 
		setTimeout(function(){ 

		$(self).removeClass("active-ie") 
		},2500);
	});
});
/* FAVORITE */
$(document).ready(function(){
	$('.havet-account__btn-svg').click(function(){
		if ($('.favorite-window').hasClass("hide-window")) {
			$('.favorite-window').removeClass('hide-window')
			
		} else {
			$('.favorite-window').addClass('hide-window')
			
		};
		let self = this; 
		setTimeout(function(){ 

		$('.favorite-window').addClass('hide-window')
		},5500);
	})
});
/* FAVORITE name*/
$(document).ready(function(){
	$('.product-page-btn-name').click(function(){
		$('.havet-account__btn-svg').trigger('click');
	})

});
/*BASJET*/
$(document).ready(function(){
	$('.basket-btn').click(function(){
		if ($('.basket-window').hasClass("hide-window")) {
			$('.basket-window').removeClass('hide-window')
			
		} else {
			$('.basket-window').addClass('hide-window')
			
		};
		let self = this; 
		setTimeout(function(){ 

		$('.basket-window').addClass('hide-window')
		},5500);
	})
});
$(document).ready(function(){
	$('.basket-window__wrapper').mouseenter(function(){
		if ($('.basket-btn').hasClass("active")) {
			$('.basket-window').removeClass('hide-window')					
		} else {

		};
			setTimeout(function(){ 

			$('.basket-window').addClass('hide-window')
			},5500);	
	})
});

$(document).ready(function(){
	$('.my-basket__remove-button').click(function(){
		$(this).closest(".my-basket__accessories-item").fadeOut( "slow", function() {
    // Animation complete.
  });
	})
});
$(document).ready(function(){
	if($("section").hasClass('basket-page')){
		$('main').addClass("backet-background")
	}
		
});

$(document).ready(function(){
	$('#search-trigger').click(function(){
		$('#search-form').addClass('active')
		$('#search-trigger').addClass('active')		
		$('#search-form').removeClass('invisability')
	})
	if ($("section").hasClass('regpay-page')) {
		$('#search-trigger').hide()
	}
	
});

/*$('.desctop-navigation__catalog-burger-title').click(function(){
		$('.ham').click()
	})*/
