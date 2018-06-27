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
  if (req.body.password !== req.body.passwordConf) {
    var error = new Error('Passwords do not match.');
    err.status = 400;
    res.send("Passwords don't match.");
    return next(err);
  }
  if (req.body.email && req.body.username && req.body.passwordConf && req.body.profession) {
    var userData = {
      username: req.body.username,
      password: req.body.password,
      passwordConf: req.body.passwordConf,
      email: req.body.email,
      profession: req.body.profession
    };
    User.create(userData, function(err, user){
      if (err) {
        return next(err)
      } else {
        req.session.userId = user._id;
        return res.redirect('/catalog/profile');
      }
    });
  }
};

exports.profile = function(req, res, next) {
    User.findById(req.session.userId)
      .exec(function (error, user) {
        if (error) {
          return next(error);
        } else {
          if (user === null) {
            var err = new Error('Not authorized! Go back!');
            err.status = 400;
            return next(err);
          } else {
              return res.send('<h1>Name: </h1>' + user.username + '<h2>Mail: </h2>' + user.email + '<br><a type="button" href="/logout">Logout</a>');
          }
        }
      });
};
