var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.send('Welcome to our Social API ! :D');
});

module.exports = router;
