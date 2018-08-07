const express = require('express');
const passport = require('passport');
const tokenModule = require('../common/token');

const { setTokens, getAccessToken, getIdToken } = tokenModule();


const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const accessToken = getAccessToken();
  const idToken = getIdToken();
  res.render('index', { title: 'Authorization Code Flow', loggedIn: res.locals.loggedIn, accessToken, idToken });
});

router.get('/login',
  passport.authenticate('auth0', {
    scope: 'openid email profile'}),
  function(req, res) {
    res.redirect("/");
  });

router.get('/logout', function(req, res) {
  setTokens(null, null);
  req.logout();
  res.redirect('/');
});

router.get('/callback',
  passport.authenticate('auth0', {
    failureRedirect: '/failure'
  }),
  function(req, res) {
    res.redirect(req.session.returnTo || '/');
  }
);

router.get('/failure', function(req, res) {
  const error = req.flash("error");
  const error_description = req.flash("error_description");
  setTokens(null, null);
  req.logout();
  res.render('failure', {
    error: error[0],
    error_description: error_description[0],
  });
});




module.exports = router;
