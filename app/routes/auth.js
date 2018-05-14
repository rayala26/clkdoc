var authController = require('../controllers/authcontroller.js');
 
module.exports = function(app, passport) {
//    WHEN CLICK SIGN UP 
    app.get('/signup', authController.signup);
//    WHEN CLICK SIGN IN
    app.get('/signin', authController.signin);
// WHEN USER SUBMIT THE SIGNUP FORM AND POST TEH DATA TO THE SERVER    
    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect: '/dashboard',
 
        failureRedirect: '/signup'
        }
    ));
// WHEn USER LOGIN OR FINISH SIGNUP    
    app.get('/dashboard',isLoggedIn, authController.dashboard); 
// WHEn USER LOGOUT
    app.get('/logout',authController.logout);
// WHEn USER SIGNIN   
    app.post('/signin', passport.authenticate('local-signin', {
        successRedirect: '/dashboard',
 
        failureRedirect: '/signin'
        }
 
    ));
    
    function isLoggedIn(req, res, next) {

        if (req.isAuthenticated())

        return next();
        // REDIRECT THE USER TO THE HOME PAGE IF IS NOT LOGGED IN
        res.redirect('/');

    }    
    
}

