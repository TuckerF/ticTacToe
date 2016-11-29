$(document).ready(function(){
	$(function(){
		var hits = 1; //->variable
	// Everything below this line is called "binding" a handler to an event (click event)
    	$('.square').click(function(){ // --> This whole function is the handler or listener
			console.log("click");
			if  (hits % 2 !== 0) { // for hits 2,4,6,8
				$(this).children("span.X").fadeTo(100, 1);
			}
			else { // for hits 1,3,5,7
				$(this).children("span.O").fadeTo(100, 1);
			}
			hits++;
			return false;
		});
	});
});