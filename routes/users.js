var express = require('express');
var router = express.Router();
var moment = require('moment');

router.use(function(req, res, next){
  console.log(moment(new Date()).format('YYYY-MM-DD HH:mm'));
  next();
})

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.post('/cool', function(req, res, next){
  res.json({
    message: `${req.body.name} look so cool`
  })
})

module.exports = router;
 