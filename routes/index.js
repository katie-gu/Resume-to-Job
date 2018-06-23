var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/', function(req, res, next) {
  const vision = require('@google-cloud/vision');
  const client = new vision.ImageAnnotatorClient();
  const fileName = '/Users/katiegu/jobfinderapp/Resume-to-Job/Katie_Gu_Résumé_2.jpg';
  client.
    documentTextDetection(fileName)
    .then(results => {
        const fullTextAnnotation = results[0].fullTextAnnotation;
        console.log(fullTextAnnotation.text);
    })
    .catch(err => {
      console.error('ERROR:', err);
    })
  res.render('index');
});

module.exports = router;
