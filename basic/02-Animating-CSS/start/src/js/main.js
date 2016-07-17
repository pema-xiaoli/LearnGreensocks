(function($) {
    
	var img = $('img'),
		h2 = $('h2');

	// TweenLite.to(img, 1, {x:-200});
	// TweenLite.from(img, 1, {x:-200});
	
	// TweenLite.set(img, {x:200});

	TweenLite.from(img, 1, {x:-200});
	TweenLite.from(h2, 1, {autoAlpha: 0, delay: 1});

})(jQuery);