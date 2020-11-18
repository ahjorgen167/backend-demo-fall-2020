var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  res.send({name: "hunter", title:"best professor", age:"very old"});
});

router.delete('/', function(req, res) {
  res.send({name: "hunter", title:"best professor", age:"very old"});
});

module.exports = router;
