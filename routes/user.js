const express = require('express');
const ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn();
const router = express.Router();

/* GET users listing. */
router.get('/', ensureLoggedIn, function(req, res, next) {
  res.render('landing');
});

module.exports = router;
