//load bcrypt
var bCrypt = require('bcrypt-nodejs');
 
module.exports = function(passport, client) {
    var Client = client;
    var LocalStrategy = require('passport-local').Strategy;
    //serialize
    passport.serializeUser(function(client, done) {
        done(null, client.clientID);
    });
    // deserialize user 
    passport.deserializeUser(function(clientID, done) {
        Client.findById(clientID).then(function(client) {
            if (client) {
                done(null, client.get());
            } else {
                done(Client.errors, null);
            }
        });
    });
    //LOCAL SIGNUP strategy
    passport.use('local-signup', new LocalStrategy(
        {
            usernameField: 'email',
            passwordField: 'password',
            passReqToCallback: true // allows us to pass back the entire request to the callback
        },
        function(req, email, password, done) {
            var generateHash = function(password) {
                return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
            };
            Client.findOne({
                where: {
                    email: email
                }
            }).then(function(client) {
                if (client){
                    return done(null, false, {
                        message: 'That email is already taken'
                    });
                } else {
                    var userPassword = generateHash(password);
                    var data =
                        {
                            email: email,
                            password: userPassword,
                            firstname: req.body.firstname,
                            lastname: req.body.lastname
                        };
                    Client.create(data).then(function(newClient, created) {
                        if (!newClient) {
                            return done(null, false);
                        }
                        if (newClient) {
                            return done(null, newClient);
                        }
                    });
                }
            });
        }
    ));
    
    //LOCAL SIGNIN strategy
    passport.use('local-signin', new LocalStrategy({
        // by default, local strategy uses username and password, we will override with email
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true // allows us to pass back the entire request to the callback
    },
 
    function(req, email, password, done) {
        var Client = client;
        var isValidPassword = function(userpass, password) {
            return bCrypt.compareSync(password, userpass);
        }
        Client.findOne({
            where: {
                email: email
            }
        }).then(function(client) {
            if (!client) {
 
                return done(null, false, {
                    message: 'Email does not exist'
                });
            }
            if (!isValidPassword(client.password, password)) {
                return done(null, false, {
                    message: 'Incorrect password.'
                });
            }
 
            var userinfo = client.get();
            return done(null, userinfo);
 
        }).catch(function(err) {
            console.log("Error:", err);
            return done(null, false, {
                message: 'Something went wrong with your Signin'
            });
        });
      }
    ));
 
}

