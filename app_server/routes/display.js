var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('display', { title: 'Mobile Phone Store' });
});

module.exports = router;
