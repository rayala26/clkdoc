//attach a listener
$(document).ready(function(){

	//get the lastest user choice
	$.get("/api/client/user-choice", function(data){
	  console.log(data);
	});

});


