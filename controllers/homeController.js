var User = require('../models/user');

exports.index = function(req, res, next) {
  return res.render('index');
};

exports.login = function(req, res, next) {
    return res.render('login');
};

exports.login_post = function(req, res, next) {
  if (req.body.logemail && req.body.logpassword) {
    User.authenticate(req.body.logemail, req.body.logpassword, function(error, user){
      if(error || !user) {
        var err = new Error('Wrong email or password.');
        err.status = 401;
        return next(err);
      } else {
        req.session.userId = user._id;
        return res.redirect('/profile');
      }
    });
  }
}

exports.signup = function(req, res, next) {
    return res.render('signup');
};

exports.signup_post = function(req, res, next) {
  if (req.body.password !== req.body.confirmpassword) {
    var error = new Error('Passwords do not match.');
    error.status = 400;
    res.send("Passwords don't match.");
    return next(error);
  }
  if (req.body.email && req.body.username && req.body.password && req.body.confirmpassword && req.body.profession) {
    var userData = {
      username: req.body.username,
      password: req.body.password,
      passwordConf: req.body.confirmpassword,
      email: req.body.email,
      profession: req.body.profession
    };
    User.create(userData, function(error, user){
      if (error) {
        return next(error);
      } else {
        req.session.userId = user._id;
        return res.redirect('/profile');
      }
    });
  }
};
