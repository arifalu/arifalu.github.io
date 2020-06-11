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
		autoplayTimeout: 3500,
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
	$(".owltow .owl-carousel").owlCarousel({
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

	// owlthree
	$(".owlthree .owl-carousel").owlCarousel({
		loop: true,
		margin: 10,
		autoplayHoverPause: true,
		autoplay: true,
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

	// kitchen
	$(".kitchen .owl-carousel").owlCarousel({
		loop: true,
		margin: 10,
		nav: true,
		autoplayHoverPause: true,
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
		autoplayHoverPause: true,
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
		autoplayHoverPause: true,
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
		autoplayHoverPause: true,
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
		autoplayHoverPause: true,
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
		autoplayHoverPause: true,
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
		autoplayHoverPause: true,
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
		autoplayHoverPause: true,
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

	// kitchen div

	Array.prototype.remByVal = function(val) {
		for (var i = 0; i < this.length; i++) {
			if (this[i] === val) {
				this.splice(i, 1);
				i--;
			}
		}
		return this;
	}
	
	// var rooms = ['hello', 'something']
	
	// rooms = rooms.remByVal('hello');


	// function delCurEle(curele){
	// 	var claName = [".kitchen",".smallkitchen",".windowdivarea",
	// 	".boxdivarea",".doordivarea",".curtaindivarea",".safetdivarea",".stairdivarea"];
	// 	var claName = claName.remByVal(curele);
	// 	 return claName ;
		
	// };
// var getV = delCurEle();


	// $('.finaldiv #kitbut').click(function (e) {
	// 	$('.kitchen').css("display", "visible").fadeToggle('slow');
	// var abc = delCurEle(.kitchen);
	// var abcd = delCurEle().toString();
	// 	$("abcd").fadeOut('slow');
	// });




	$('.finaldiv #kitbut').click(function (e) {
		$('.kitchen').css("display", "visible").fadeToggle('slow');
		if (e) {
			$('.smallkitchen,.windowdivarea,.boxdivarea,.doordivarea,\
			.curtaindivarea,.safetdivarea,.stairdivarea').fadeOut();
		}
	

	});





	// smallkitchen div
	$('.finaldiv #smlkitbut').click(function (e) {
		$('.smallkitchen').css("display", "visible").fadeToggle('slow');
		if (e) {
			$('.kitchen,.windowdivarea,.boxdivarea,.doordivarea,\
			.curtaindivarea,.safetdivarea,.stairdivarea').fadeOut();
		}
	});
	// window div
	$('.finaldiv #winbut').click(function (e) {
		$('.windowdivarea').css("display", "visible").fadeToggle('slow');
		if (e) {
			$('.kitchen,.smallkitchen,.boxdivarea,.doordivarea,\
			.curtaindivarea,.safetdivarea,.stairdivarea').fadeOut();
		}
	});
	// box div 
	$('.finaldiv #boxbut').click(function (e) {
		$('.boxdivarea').css("display", "visible").fadeToggle('slow');
		if (e) {
			$('.kitchen,.smallkitchen,.windowdivarea,.doordivarea,\
			.curtaindivarea,.safetdivarea,.stairdivarea').fadeOut();
		}
	});
	// door div 
	$('.finaldiv #doorbut').click(function (e) {
		$('.doordivarea').css("display", "visible").fadeToggle('slow');
		if (e) {
			$('.kitchen,.smallkitchen,.windowdivarea,.boxdivarea,\
			.curtaindivarea,.safetdivarea,.stairdivarea').fadeOut();
		}
	});
	// curtain div 
	$('.finaldiv #cutbut').click(function (e) {
		$('.curtaindivarea').css("display", "visible").fadeToggle('slow');
		if (e) {
			$('.kitchen,.smallkitchen,.windowdivarea,.boxdivarea,\
			.doordivarea,.safetdivarea,.stairdivarea').fadeOut();
		}
	});
	// safle div 
	$('.finaldiv #safetbut').click(function (e) {
		$('.safetdivarea').css("display", "visible").fadeToggle('slow');
		if (e) {
			$('.kitchen,.smallkitchen,.windowdivarea,.boxdivarea,\
			.doordivarea,.curtaindivarea,.stairdivarea').fadeOut();
		}
	});
	// stair div 
	$('.finaldiv #stairbut').click(function (e) {
		$('.stairdivarea').css("display", "visible").fadeToggle('slow');
		if (e) {
			$('.kitchen,.smallkitchen,.windowdivarea,.boxdivarea,\
			.doordivarea,.curtaindivarea,.safetdivarea').fadeOut();
		}
	});


});
















