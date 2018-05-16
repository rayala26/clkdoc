const db = require("../models");

module.exports = function(app) {
  //first route will get back all the doctors
  app.get("/api/clients", function(req, res) {
    // 1. Add a join to include all of each Author's Posts
    //you can use 'include: db.Schedule' inside the curly braces in the method to bring the doctor's schedule
    db.Clients.findAll({}).then(function(dbClient) {
      res.json(dbClient);
    });
  });

  //route will return the client with the passed ID
  app.get("/api/clients/:id", function(req, res) {
    // 2; Add a join to include all of the Author's Posts here
    db.Clients.findOne({
      where: {
        clientID: req.params.id
      }
    }).then(function(dbClient) {
      res.json(dbClient);
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