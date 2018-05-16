const db = require("../models");

module.exports = function(app) {
  //first route will get back all the doctors
  app.get("/api/doctors", function(req, res) {
    // 1. Add a join to include all of each Author's Posts
    //you can use 'include: db.Schedule' inside the curly braces in the method to bring the doctor's schedule
    db.Doctors.findAll({}).then(function(dbDoctor) {
      res.json(dbDoctor);
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

    //route will return a schedule with the doctor ID that was passed(all appointments with that have been made with this doctor)
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
        res.json(dbAppointment);
      });
    });
  });

  //these are the posts

  app.post("/api/authors", function(req, res) {
    db.Author.create(req.body).then(function(dbAuthor) {
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