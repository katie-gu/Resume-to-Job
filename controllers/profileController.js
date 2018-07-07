var User = require('../models/user');
var Job = require('../models/job');
var vision = require('@google-cloud/vision');
var rp = require('request-promise');
var cheerio = require('cheerio');

exports.profile = function(req, res, next) {
    return res.render('profile');
};

exports.myJobs = function(req, res, next) {
    Job.find({})
      .exec(function (err, list_jobs) {
        if (err) {
          return next(err);
        }
        return res.render('myjobs', {job_list: list_jobs})
      })
  };

exports.myNetwork = function(req, res, next) {
    res.send('Not implemented.');
};

exports.myAccount = function(req, res, next) {
    res.send('Not implemented.');
};

exports.addJob = function(req, res, next) {
    return res.render('add_job_form');
};

exports.addJobPost = function(req, res, next) {
    var job = new Job({
      position: req.body.position,
      company: req.body.company,
      startdate: req.body.startdate,
      enddate: req.body.enddate,
      description: req.body.description
    });
    Job.create(job, function (err) {
      if (err) {
        return next(err);
      } else {
        return res.redirect('/profile/myjobs');
      }
    });
};

exports.upload_resume = function(req, res, next) {
    return res.render('upload_resume');
};

exports.upload_resume_post = function(req, res, next) {
  const client = new vision.ImageAnnotatorClient();

  if (!req.files) {
      return res.status(400).send('No files were uploaded.');
  }

  // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
  let sampleFile = req.files.file;

  var filename = sampleFile.name;
  client.documentTextDetection(filename)
      .then(results => {
        const fullTextAnnotation = results[0].fullTextAnnotation;
        text = fullTextAnnotation.text;
        return res.send(text);
    })
    .catch(err => {
        console.error('ERROR:', err);
    });
};
