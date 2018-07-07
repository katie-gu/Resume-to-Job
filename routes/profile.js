var express = require('express');
var router = express.Router();
var profileController = require('../controllers/profileController');

router.get('/', profileController.profile);
router.get('/findjobs', profileController.upload_resume);
router.post('/findjobs', profileController.upload_resume_post);
router.get('/myjobs', profileController.myJobs);
router.get('/mynetwork', profileController.myNetwork);
router.get('/myaccount', profileController.myAccount);
router.get('/addjob', profileController.addJob);
router.post('/addjob', profileController.addJobPost);

module.exports = router;
