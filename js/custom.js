jQuery(document).ready(function () {
	// block image
	$("img").bind("contextmenu", function (e) {
		return false;
	});

	//owlcaroset
	$(".owlone .owl-carousel").owlCarousel({
		loop: true,
		margin: 10,
		autoplay: true,
		dots: false,
		autoplayTimeout: 2500,
		responsive: {
			0: {
				items: 1,
			},
			768: {
				items: 1,
			},
			980: {
				items: 1,
			},
			1199: {
				items: 1,
			},
		},
	});

	// owltow
	$(".owltow .owl-carousel,.owlthree .owl-carousel").owlCarousel({
		loop: true,
		margin: 10,
		autoplay: true,
		mouseOver: true,
		autoplayHoverPause: true,
		autoplayTimeout: 3000,
		responsive: {
			0: {
				items: 1,
			},
			768: {
				items: 2,
			},
			980: {
				items: 4,
			},
			1199: {
				items: 4,
			},
		},
	});
	$(".smallkitchen .owl-carousel,.windowdivarea .owl-carousel,\
	.newowlthree .owl-carousel,.boxdivarea .owl-carousel,\
	.doordivarea .owl-carousel,.safetdivarea .owl-carousel,\
	.stairdivarea .owl-carousel").owlCarousel({
		loop: true,
		margin: 10,
		nav: true,
		responsive: {
			0: {
				items: 1,
			},
			768: {
				items: 2,
			},
			980: {
				items: 4,
			},
			1199: {
				items: 4,
			},
		},
	});

	// kitchen
	$(".kitchen .owl-carousel").owlCarousel({
		loop: true,
		margin: 10,
		nav: true,
		responsive: {
			0: {
				items: 1,
			},
			768: {
				items: 1,
			},
			980: {
				items: 1,
			},
			1199: {
				items: 1,
			},
		},
	});


	// curtaindivarea
	$(".curtaindivarea .owl-carousel").owlCarousel({
		loop: true,
		margin: 10,
		nav: true,
		responsive: {
			0: {
				items: 1,
			},
			768: {
				items: 1,
			},
			980: {
				items: 1,
			},
			1199: {
				items: 1,
			},
		},
	});

});
















