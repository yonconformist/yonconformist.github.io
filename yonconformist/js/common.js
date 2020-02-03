$(document).ready(function() {

	$(".popup").magnificPopup({
		type:"image",
		closeOnContentClick: true,
		showCloseBtn: false,
	   	mainClass: 'mfp-with-zoom mfp-img-mobile mfp-fade',
	   image: {
		   verticalFit: true,
		   cursor: 'null'
	   }
	});
	$(".popup_content").magnificPopup({
		type:"inline",
		midClick: true,
		mainClass: 'mfp-fade',
		closeOnContentClick: true,
		showCloseBtn: false
	});


	$(document).ready(function() {
		$('.popup-vimeo').magnificPopup({
			disableOn: 200,
			type: 'iframe',
			mainClass: 'mfp-fade',
			removalDelay: 160,
			preloader: false,
	
			fixedContentPos: false
		});
	});

});
