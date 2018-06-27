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
              return res.render('profile', {'username': user.username});
        }
      });
};

exports.myJobs = function(req, res, next) {
    res.send('Not implemented.');
};

exports.myNetwork = function(req, res, next) {
    res.send('Not implemented.');
};

exports.myAccount = function(req, res, next) {
    res.send('Not implemented.');
};
