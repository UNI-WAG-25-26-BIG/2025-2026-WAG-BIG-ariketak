$(document).ready(function() {

$(document).on('keydown',function(e) {

	switch(e.key) {

		// left arrow pressed
		case "ArrowLeft":
			$('#rocket').animate({left: "-=10px"}, 'fast');
			break;
		// up arrow pressed
		case "ArrowUp":
			$('#rocket').animate({top: "-=10px"}, 'fast');
			break;
		// right arrow pressed
		case "ArrowRight":
			$('#rocket').animate({left: "+=10px"}, 'fast');
			break;
		// down arrow pressed
		case "ArrowDown":
			$('#rocket').animate({top: "+=10px"}, 'fast');
			break;
		}
	});
});
