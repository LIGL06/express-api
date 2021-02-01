const router = require('express').Router();

/* GET users list */
router.get('/', function(req, res) {
  res.send(req.body);
});

module.exports = router;
