// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");


// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get("/doctor-search", function(req, res) {
    res.render("doctor_search_test");
  });
  // home
  app.get("/", function(req, res) {
    res.render('home');
  });

};