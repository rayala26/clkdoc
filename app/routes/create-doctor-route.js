const db = require("../models");

module.exports = function(app) {
  //these are the post
  //creates a new entry in the doctor table
  app.post("/api/create-doc", function(req, res) {
    db.Doctors.create(req.body).then(function(dbAuthor) {
      res.json(dbAuthor);
    });
  });

};



/*doctors.create({
        //name
        name: name,
        specialty: specialty,
        address: address,
        city: city,
        state: state,
        zipCode: zip,
        phoneNumber: phone,
        insurance: insurances
      }).then(doctor =>{
        console.log(doctor);
      });*/