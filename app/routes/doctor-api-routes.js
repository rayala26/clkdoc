const db = require("../models");

module.exports = function(app) {

  app.get("/api/doctors/selection", function(req, res) {
    // 1. Add a join to include all of each Author's Posts
    //you can use 'include: db.Schedule' inside the curly braces in the method to bring the doctor's schedule
    db.doctorChoice.findAll({
      limit: 1,
      order: [[ 'createdAt', 'DESC' ]]
    }).then(function(choice) {
      res.send(choice);
    });
  });

  //first route will get back all the doctors with speciality that was passed in
  app.get("/api/doctors/:specialty", function(req, res) {
    db.Doctors.findAll({
      where:{
      specialty: req.params.specialty
    }
  }).then(function(dbDoctor) {
      res.send(dbDoctor);
    });
  });

   //route returns all specialties as they are listed in the database
  app.get("/api/specialty", function(req, res) {
    // 1. Add a join to include all of each Author's Posts
    //you can use 'include: db.Schedule' inside the curly braces in the method to bring the doctor's schedule
    db.Doctors.findAll({attributes:["specialty"]}).then(function(specialities) {
      res.send(specialities);
    });
  });

  //route will return a doctor with the passed ID
  app.get("/api/doctors/:id", function(req, res) {
    // 2; Add a join to include all of the Author's Posts here
    db.Doctors.findOne({
      where: {
        docID: req.params.id
      }
    }).then(function(dbDoctor) {
      res.json(dbDoctor);
    });
  });

    //route will return a schedule of all appointments that have been made with this doctor
  app.get("/api/schedule/:id", function(req, res) {
    // 2; Add a join to include all of the Author's Posts here
    db.Schedule.findOne({
      where: {
        DoctorDocID: req.params.id
      }
    }).then(function(dbDoctor) {
      db.Appointment.findAll({
        where: {
          ScheduleScheduleID: dbDoctor.scheduleID
        }
      }).then(function(dbAppointment){
        res.send(dbAppointment);
      });
    });
  });

  //these are the posts

    //these are the posts
  app.post("/api/doctors/selection", function(req, res) {
    db.doctorChoice.create(req.body).then(function(dbAuthor) {
      res.json(dbAuthor);
    });
  });

     //these are the posts
  app.post("/api/doctors/appointment", function(req, res) {
    db.Appointment.create(req.body).then(function(dbAuthor) {
      res.json(dbAuthor);
    });
  });

  app.delete("/api/authors/:id", function(req, res) {
    db.Author.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbAuthor) {
      res.json(dbAuthor);
    });
  });

};