$('.custom-slider').slick({
	slide: 'div',
	adaptiveHeight: false,
	slidesToShow: 2,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 2000,
	enterPadding: 0,
	centerMode: false,
	draggable: true,
	responsive: [{
			breakpoint: 1200,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
				infinite: true,
				dots: false
			}
                },
		{
			breakpoint: 900,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				infinite: true,
				dots: false
			}
                },
		{
			breakpoint: 550,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: true,
				dots: false
			}
                }
            ]
});

