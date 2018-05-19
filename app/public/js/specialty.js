var specialty = "";
$(document).ready(function(){
	//lets get an array of all specialties
	$.get("/api/specialty", function(data){
	  console.log(data);
	  //the data is an array of objects,
	  //var for the select tag
	  var dropdown = $("#field");
	  for(var i = 0; i < data.length; i++){
	  	//add elements to the drop down
	  	//create new option elemtent
	  	var option = $("<option>");
	  	option.attr("data-id", data[i].specialty);
	  	option.text(data[i].specialty);
	  	dropdown.append(option);
	  }

	});

	//attach a listener to the selected element
	$("select").change(function(){
		console.log($(this).val());
		specialty = $(this).val();
		//turn off all elements
		//will fire or trnasfer the specialty
		
	});

});


    