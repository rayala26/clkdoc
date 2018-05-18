//lets get an array of all specialties
$.get("/api/doctors", function(data){
  console.log(data);
  //the data is an array of objects,
  //var for the select tag
  var dropdown = $("#speciality");
  for(var i = 0; i < data.length; i++){
  	//add elements to the drop down
  	//create new option elemtent
  	var option = $("<option>");
  	option.attr("data-id", data[i].speciality);
  	option.text(data[i].speciality);
  	dropdown.append(option);
  }

});
    