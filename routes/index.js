var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  return res.redirect('/catalog');
});

module.exports = router;
