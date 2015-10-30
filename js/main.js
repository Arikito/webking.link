$(function(){

	// Disabling empty links click event
	$('a[href="#"]').on('click', function(e){
		e.preventDefault();
	});

	$('#page_wrap > section').css({
		"height": $(window).height()
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