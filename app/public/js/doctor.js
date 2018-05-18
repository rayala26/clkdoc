// var apiKey = require('./../.env').apiKey;
// var userLocation;
  $("#home").submit(function(){
    alert("Submitted");
  });

  var name = specialty = address = city = state = zip = phone = insurance = "";

  var getDoctors = function(location) {
   var query = "https://api.betterdoctor.com/2016-03-01/doctors?location=fl-miami&fields=profile(first_name%2Clast_name%2Ctitle%2Cimage_url%2Cbio)%2Cspecialties(name)%2Cpractices(visit_address%2C%20phones)%2C%20insurances&skip=0&limit=10&user_key=a69415b46454ace5b47c9da6f5235f8b"
   $.get(query)
   .then(function(response) {
     //insert into the table
     for(var i = 0; i < response.data.length; i++){
      console.log("Name: " + response.data[i].profile.first_name + " " + response.data[i].profile.last_name);
      name = response.data[i].profile.first_name + " " + response.data[i].profile.last_name;

      if(response.data[i].specialties.length == 0){
        //then general practice
        console.log("General Practice Me");
        specialty = "General Practice Me";
      }
      else{
        console.log(response.data[i].specialties[0].name);
        specialty = response.data[i].specialties[0].name;
      }

      //the address
      console.log("Address: " + response.data[i].practices[0].visit_address.street);
      address = response.data[i].practices[0].visit_address.street;
       //the address
      console.log("City: " + response.data[i].practices[0].visit_address.city);
      city = response.data[i].practices[0].visit_address.city;
       //the address
      console.log("State: " + response.data[i].practices[0].visit_address.state);
      state = response.data[i].practices[0].visit_address.state;
       //the address
      console.log("Zip: " + response.data[i].practices[0].visit_address.zip);
      zip = parseInt(response.data[i].practices[0].visit_address.zip);
      //phone
      console.log("Phone: " + response.data[i].practices[0].phones[0].number);
      phone = response.data[i].practices[0].phones[0].number;
      //insurance
      insurance = "";
      for(var j = 0 ; j < 3; j++ ){
         console.log("Insurance: " + response.data[i].insurances[j].insurance_provider.name);
         insurance += response.data[i].insurances[j].insurance_provider.name + ",";
      }
      //create doctor object
      var doc = {

        name: name,
        specialty: specialty,
        address: address,
        city: city,
        state: state,
        zipCode: zip,
        phoneNumber: phone,
        insurance: insurance

      };

      $.post("api/create-doc",doc, function(){
        console.log("hi")
      });
      
     }
   })
  }
  getDoctors();

/*var button = document.getEle
mentsByClassName("my-button")[0]

button.addEventListener("click", function(){
  // console.log("You clicked!");
  var docSpecialty = $("#user-input-specialty").val().trim();
  var docCity = $("#user-input-city").val().trim();
  var docState = $("#user-input-state").val().trim();
  var docLocation = docState + "-" + docCity;
  console.log(docSpecialty);
  console.log(docCity);
  console.log(docState);

  getDoctors(docLocation)
})*/



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
