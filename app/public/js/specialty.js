//lets get an array of all specialties
$.get("/api/speciality", function(data){
  console.log(data);
  //the data is an array of objects,
  //var for the select tag
  var dropdown = $("#")
  for(var i = 0; i < data.length; i++){
  	//add elements to the drop down

  }

});
    