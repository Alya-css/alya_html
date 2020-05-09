$ (function() {

	/*fixed header*/ 

	let header = $("#header");
	let intro = $("#intro");
	let introH = intro.innerHeight();
	let scrollPos = $(window).scrollTop();
	let nav = $("#nav");
	let navToggle = $("#navToggle");

	checkScroll(scrollPos, introH);


	$(window).on("scroll resize", function() {
		introH = intro.innerHeight();
		scrollPos = $(this).scrollTop();

		checkScroll(scrollPos, introH);
	}); 


	function checkScroll (scrollPos, introH) {
		if( scrollPos > introH) {
			header.addClass("fixed"); 
		} else {
			header.removeClass("fixed");
		}
	} 

	


	/*smooth scroll*/ 
	$("[data-scroll]").on("click", function(event) {
		event.preventDefault();

		let elementID = $(this).data('scroll');
		let elementOffset = $(elementID).offset().top;

		nav.removeClass("s")

		$("html, body").animate ({
			scrollTop: elementOffset -65
		}, 700);
		
	});


/*navToggle*/ 

navToggle .on("click", function(event) {
	event.preventDefault();

	nav.toggleClass("show");
});


/*reviews__slider https://kenwheeler.github.io/slick/*/ 
let slider = $("#reviewsSlider");


slider.slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: true,
  arrows: false,
  dots: true
});

});