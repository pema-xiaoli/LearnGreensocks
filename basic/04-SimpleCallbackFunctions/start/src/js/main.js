(function($) {
    
	var img = $('img'),
		h2 = $('h2');

	var i = 1;

	// Simple Callback Functions
	TweenLite.from(img, 1, {
		x: -200, 
		ease:Power1.easeInOut, 
		onStart: onStartFn,
		onUpdate: onUpdateFn,
		onComplete: onCompleteFn
	});

	function onStartFn(){
		console.log("start!");
	}

	function onUpdateFn(){
		console.log("updating...");
		h2.text(i++); 
	}

	function onCompleteFn(){
		console.log("End");
	}



})(jQuery);