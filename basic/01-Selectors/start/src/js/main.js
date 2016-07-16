
(function($) {
     
	var header = $("#header"),
		h1 = $("h1"),
		intro = $(".intro"),
		firstItem = $("li:first-child"),
		secondItem = $("li:nth-child(2)"),
		lastItem = $("li:last-child"),
		img = $("img");

	TweenLite.from(img, 1.5, {opacity: 0, x: -50});	

})(jQuery);


