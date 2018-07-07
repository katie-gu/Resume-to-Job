var express = require('express');
var router = express.Router();

var home_controller = require('../controllers/homeController');
/* GET home page. */
router.get('/', home_controller.index);
router.get('/login', home_controller.login);
router.post('/login', home_controller.login_post);
router.get('/signup', home_controller.signup);
router.post('/signup', home_controller.signup_post);

module.exports = router;
