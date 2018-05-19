//attach a listener
$(document).ready(function(){

	//get the lastest user choice
	$.get("/api/client/user-choice", function(data){
	  console.log(data[0].choice);
	  //take the choice and get doctors array
	  $.get("/api/doctors/" + data[0].choice, function(docData){
	  	console.log(docData);
	  	//we have the array, create the elements
	  });
	});

});


