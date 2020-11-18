var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send({name: "hunter", title:"best professor", age:"very old"});
});

module.exports = router;
