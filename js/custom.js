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

	// newowlthree
	$(".newowlthree .owl-carousel").owlCarousel({
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
	// smallkitchen
	$(".smallkitchen .owl-carousel").owlCarousel({
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
				items: 3,
			},
			1199: {
				items: 4,
			},
		},
	});

	// granitedivarea
	$(".granitedivarea .owl-carousel").owlCarousel({
		loop: true,
		margin: 10,
		nav: true,
		dots: false,
		responsive: {
			0: {
				items: 1,
			},
			768: {
				items: 2,
			},
			980: {
				items: 3,
			},
			1199: {
				items: 4,
			},
		},
	});

	// windowdivarea
	$(".windowdivarea .owl-carousel").owlCarousel({
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
				items: 3,
			},
			1199: {
				items: 4,
			},
		},
	});

	// boxdiv
	$(".boxdivarea .owl-carousel").owlCarousel({
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
				items: 3,
			},
			1199: {
				items: 4,
			},
		},
	});
	// doordivarea
	$(".doordivarea .owl-carousel").owlCarousel({
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
				items: 3,
			},
			1199: {
				items: 4,
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
	// safetdivarea
	$(".safetdivarea .owl-carousel").owlCarousel({
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
				items: 3,
			},
			1199: {
				items: 4,
			},
		},
	});
	// stairdivarea
	$(".stairdivarea .owl-carousel").owlCarousel({
		loop: true,
		margin: 10,
		nav: true,
		dots: false,
		responsive: {
			0: {
				items: 1,
			},
			768: {
				items: 2,
			},
			980: {
				items: 3,
			},
			1199: {
				items: 4,
			},
		},
	});
});












