var express = require('express');
var router = express.Router();
var profileController = require('../controllers/profileController');

router.get('/', profileController.profile);
router.get('/myjobs', profileController.myJobs);
router.get('/mynetwork', profileController.myNetwork);
router.get('/myaccount', profileController.myAccount);

module.exports = router;
