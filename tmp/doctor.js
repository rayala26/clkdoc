var apiKey = require('./../.env').apiKey;
var userLocation;

// Doctor object constructor function
function Doctor(name, img, bio, specialties) {
  this.name = name;
  // if (educations.length > 0) {
  //   this.educations = educations;
  // } else {
  //   this.educations = [{"school": "education data not found"}];
  // }
  this.img = img;
  this.bio = bio;
  if (specialties) {
    this.specialties = specialties;
  } else {
    this.specialties = {"description": "No specialties listed."};
  }
}

exports.getDoctors = function(location, displayDoctors) {
  // get lat/ long data from google maps api
  $.get(`http://maps.google.com/maps/api/geocode/json?address=${location}`)
  .then(function(response) {
    userLocation = `${response.results[0].geometry.location.lat},${response.results[0].geometry.location.lng}`;
  }).then(function() {
    // get doctors from betterDoctor api
    var docUrl = `https://api.betterdoctor.com/2016-03-01/doctors?query=${specialty}&location=${userLocation},100&user_location=${userLocation}&skip=0&limit=20&user_key=${apiKey}`;
    $.get(docUrl)
    .then(function(results) {
      // send results into displayDoctors callback function
      displayDoctors(results, specialty, location);
    })
    .fail(function(error){
      console.log("fail");
    });
  });

};

exports.doctorModule = Doctor;
