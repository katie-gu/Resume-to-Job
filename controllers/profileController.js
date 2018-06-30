var User = require('../models/user');

exports.profile = function(req, res, next) {
    return res.render('profile');
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
