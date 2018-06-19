const db = require("../routes/doctor-api-routes");

$(document).ready(function() {
  console.log("Inside doc.ready function");

  //get all the specialties from the DB to make the list
  $.get("/api/doctor-search", function(data){
    console.log(data);
  });
});
