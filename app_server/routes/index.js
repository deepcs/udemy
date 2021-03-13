var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'MobileStore' });
});

const displayCntrl = require('../controllers/mobilelist');
router.get('/mobiles/:mobileid', displayCntrl.mobileInfo);

router.route('/new')
      .get(displayCntrl.addNewMobile)
      .post(displayCntrl.doAddNewMobile);
      
module.exports = router;
