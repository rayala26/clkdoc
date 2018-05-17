// var apiKey = require('./../.env').apiKey;
// var userLocation;

var button = document.getElementsByClassName("my-button")[0]

button.addEventListener("click", function(){
  // console.log("You clicked!");
  var docSpecialty = $("#user-input-specialty").val().trim();
  var docCity = $("#user-input-city").val().trim();
  var docState = $("#user-input-state").val().trim();
  var docLocation = docState + "-" + docCity;
  console.log(docSpecialty);
  console.log(docCity);
  console.log(docState);

  getDoctors(docSpecialty, docLocation)
})

var getDoctors = function(specialty, location) {
 var query = "https://api.betterdoctor.com/2016-03-01/doctors?location=fl-miami&fields=profile(first_name%2Clast_name%2Ctitle%2Cimage_url%2Cbio)%2Cspecialties(name)%2Cpractices(visit_address%2C%20phones)%2C%20insurances&skip=0&limit=10&user_key=a69415b46454ace5b47c9da6f5235f8b"
 $.get(query)
 .then(function(response) {
  console.log(response);
 })
}

// // Doctor object constructor function
// function Doctor(name, img, bio, specialties) {
//   this.name = name;
//   // if (educations.length > 0) {
//   //   this.educations = educations;
//   // } else {
//   //   this.educations = [{"school": "education data not found"}];
//   // }
//   this.img = img;
//   this.bio = bio;
//   if (specialties) {
//     this.specialties = specialties;
//   } else {
//     this.specialties = {"description": "No specialties listed."};
//   }
// }

// exports.getDoctors = function(location, displayDoctors) {
//   // get lat/ long data from google maps api
//   // $.get(`http://maps.google.com/maps/api/geocode/json?address=${location}`);
//   $.get(`http://maps.google.com/maps/api/place/nearbysearch/json?parameters=${location}`);
//   .then(function(response) {
//     userLocation = `${response.results[0].geometry.location.lat},${response.results[0].geometry.location.lng}`;
//   }).then(function() {
//     // get doctors from betterDoctor api
//     // var docUrl = `https://api.betterdoctor.com/2016-03-01/doctors?query=${specialty}&location=${userLocation},100&user_location=${userLocation}&skip=0&limit=20&user_key=${apiKey}`;
//     var docUrl = `https://api.betterdoctor.com/2016-03-01/doctors?query=${specialty}&location=${userLocation},100&user_location=${userLocation}&skip=0&limit=20&user_key=${apiKey}`;
//     $.get(docUrl)
//     .then(function(results) {
//       // send results into displayDoctors callback function
//       displayDoctors(results, specialty, location);
//     })
//     .fail(function(error){
//       console.log("fail");
//     });
//   });

// };

// exports.doctorModule = Doctor;
