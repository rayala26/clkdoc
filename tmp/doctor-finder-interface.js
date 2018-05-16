var getDoctors = require('./../js/doctor.js').getDoctors;
var Doctor = require('./../js/doctor.js').doctorModule;

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// big ol' display doctor function
function displayDoctors(results, symptom, location) {

  var docs = [];
  console.log("display docs:");
  console.log(results);

  results.data.forEach(function(result) {
    docs.push(
      new Doctor(
        `${result.profile.first_name} ${result.profile.last_name}, ${result.profile.title}`,
        result.visit_address,
        result.profile.image_url,
        result.profile.bio,
        result.specialties
      ));
   });

   // if no doctors returned
   if (docs.length === 0) {
     $('#doctor-div').append(
       `
       <h3>Sorry, we didn't find any doctors treating "${symptom}" in the ${location} area.<h3>
       `
     );
   }

   // if doctors are returned, diplay them!
   docs.forEach(function(doc, id) {

     // var school_arr = [];
     var specialties_arr = [];
     // loop through schools and push to array for display...
     // for (var i = 0; i < doc.educations.length; i++) {
     //   school_arr.push(doc.educations[i].school);
     // }
     // ...same for specialties
     for (var n = 0; n < doc.specialties.length; n++) {
       specialties_arr.push(doc.specialties[n].description);
     }

     $('#doctor-div').append(
       // create a div containing all the doctor information
       // some of the information will be hidden for later use
       `
       <div class="doc">
         <div data-img="${doc.img}" class="doc-image" style="background-image: url(${doc.img});"></div>
         <p style="display:none;" class="bio">
         ${doc.bio}
         </p>
         <p style="display:none;" class="schools">
         ${school_arr.join('. ')}
         </p>
         <p style="display:none;" class="specialties">
         ${specialties_arr.join(' ')}
         </p>
       <strong class="name">${doc.name}</strong>
       </div>
       `
     );
   });

   // click function to show specific doctor info
   $('.doc').click(function() {
     var name = $('.name', this).text();
     var image = $('.doc-image', this).attr('data-img');
     var bio = $('.bio', this).text();
     var schools = $('.schools', this).text();
     var specialties = $('.specialties', this).text();
     $('#overlay').show();
     $('#overlay-doc-wrapper').html(
       `
       <img src="${image}">
       <h1>${name}</h1>
       <h3>Bio:</h3>
       <p>${bio}</p>
       <h3>Education:</h3>
       <p>${schools}</p>
       <h3>Specialties:</h3>
       <p>${specialties}</p>
       `
     );
   });


}


$(document).ready(function() {

  // gather user input
  $('#submit').click(function() {
    $('#doctor-div').text('');
    var location = capitalize($('#user-input-location').val());
    var symptom = $('#user-input-symptom').val();
    // call getDoctors function passing in user input, and the displayDoctors function as a callback
    getDoctors(symptom, location, displayDoctors);

    $('#overlay').click(function() {
      $('#overlay').hide();
      $('#overlay-doc-wrapper').text('');
    });
  // end click function
  });
// end doc.ready function
});
