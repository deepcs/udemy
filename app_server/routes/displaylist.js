var express = require('express');
var router = express.Router();

const displayCntrl = require('../controllers/mobilelist');
/* GET home page. */
router.get('/', displayCntrl.mobilelist);

module.exports = router;
