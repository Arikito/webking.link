$(function(){

	// Disabling empty links click event
	$('a[href="#"]').on('click', function(e){
		e.preventDefault();
	});

	$('#page_wrap > section').css({
		"height": $(window).height()
	});

	$('a[href*=#]:not([href=#])').on('click', function(e){
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				$('html,body').stop(true, true).animate({
					scrollTop: target.offset().top
				}, 600);
				return false;
			}
		}
	});

	$(window).scroll(function(){
		if($(this).scrollTop() >= $('nav').offset().top+$('nav').outerHeight() && $('.fixed_nav').is(":not(:visible)")){
			$('.fixed_nav').fadeIn('slow');
			console.log($(this).scrollTop());
		}else if($(this).scrollTop() < $('nav').offset().top+$('nav').outerHeight() && $('.fixed_nav').is(":visible")){
			$('.fixed_nav').fadeOut('slow');
		}
	});
	// $('.map').scroll(function(e){
	// 	e.preventDefault;
	// 	return false;
	// });
	// $(".map iframe").gmap({'scrollwheel':false});
	// var map;
	// function initMap(){
	// 	map = new google.maps.Map(
	// 		$('.map'),
	// 		{
	// 			center: {
	// 				lat: -34.397,
	// 				lng: 150.644
	// 			},
	// 			zoom: 8
	// 		}
	// 	);
	// }

});