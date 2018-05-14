// Required Modules
var express = require('express');
var app = express();
var passport = require('passport');
var session = require('express-session');
var bodyParser = require('body-parser');
var env = require('dotenv').load();
var exphbs = require('express-handlebars');
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

//For Handlebars
app.set('views', './app/views')
app.engine('hbs', exphbs({
    extname: '.hbs'
}));

app.set('view engine', '.hbs');
app.get('/', function(req, res) {
    res.send('Welcome to Passport with Sequelize');
});

//Models
var models = require("./app/models");
//Routes
var authRoute = require('./app/routes/auth.js')(app,passport);
//load passport strategies
require('./app/config/passport/passport.js')(passport, models.Clients);
//Sync Database
models.sequelize.sync().then(function() {
    console.log(chalk.yellow('******************* TEAM13 - SERVER HAS STARTED AT PORT '+port+' ***********************'));
}).catch(function(err) {
    console.log(err, "Something went wrong with the Database Update!")
});

//START THE SERVER
app.listen(port, function(err) {
    if (!err)
        console.log("Site is live");
    else console.log(err)
});
