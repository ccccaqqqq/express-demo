var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log(req);
  res.json(
      {
        data:'login success',
        message: req.body.username
    })
});

module.exports = router;
 