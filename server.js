var express = require('express');
var app = express();
var passport = require('passport');
var session = require('express-session');
var bodyParser = require('body-parser');
var env = require('dotenv').load();
var path = require('path');
var chalk = require('chalk');

// Get port from environment and store in Express.
var port = normalizePort(process.env.PORT || '3000');
app.set('port', port); 
// Normalize a port into a number, string, or false.
function normalizePort(val) {
  var port = parseInt(val, 10);
  if (isNaN(port)) {
    // named pipe
    return val;
  }
  if (port >= 0) {
    // port number
    return port;
  }
  return false;
} 
//For BodyParser
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
 
 
// For Passport
app.use(session({
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true
})); // session secret

app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
 
 
//For Pug as Template Engine
app.set('views', path.join(__dirname, 'app/views'));
app.set('view engine', 'pug');
  // Static directory
app.use(express.static(path.join(__dirname,"app/public")));

app.get('/', function(req, res) {
    res.render('home',);
});
 
//Models
var models = require("./app/models");
 
//Routes
var authRoute = require('./app/routes/auth.js')(app,passport);
require("./app/routes/doctor-api-routes.js")(app);
require("./app/routes/client-api-routes.js")(app);
require("./app/routes/create-doctor-route.js")(app);
require("./app/routes/html-routes.js")(app);
//load passport strategies
require('./app/config/passport/passport.js')(passport, models.client);
 
//Sync Database
models.sequelize.sync().then(function() {
 
    console.log('Nice! Database looks fine')
 
}).catch(function(err) {
 
    console.log(err, "Something went wrong with the Database Update!")
 
});
 

//START THE SERVER
app.listen(port, function(err) {
 
    if (!err)
 
        console.log("Site is live");
         
    else console.log(err)
 
});