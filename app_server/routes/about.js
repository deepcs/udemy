var express = require('express');
var router = express.Router();

const aboutRoute = require('../controllers/about');
/* GET home page. */
router.get('/', aboutRoute.aboutCtrl);

module.exports = router;
