var express = require("express");
var router = express.Router();
const passport = require("passport");
const fetch = (...args) =>
  import('node-fetch').then(({ default: fetch }) => fetch(...args));
// const fetch = require('node-fetch');
const rootURL = 'https://api.openbrewerydb.org/breweries/autocomplete?query=';
const byCityURL = 'https://api.openbrewerydb.org/breweries?by_city=';
const byPostalURL = 'https://api.openbrewerydb.org/breweries?by_postal=';
const byLatLonURL = 'https://api.openbrewerydb.org/breweries?by_dist=';
const byStateURL = 'https://api.openbrewerydb.org/breweries?by_state=';


/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("/pageView", { title: "Brewery Finder" });
});

router.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["profile", "name", "email", "locale"],
  })
);

router.get(
  "/oauth2callback",
  passport.authenticate("google", {
    successRedirect: "/pageView",
    failureRedirect: "/pageView",
  })
);

router.get("/logout", function (req, res) {
  req.logout();
  res.redirect("/pageView/home");
});

router.get('/', function( req, res, next) {
  const postal_code = req.query.postal_code;
  if ( !postal_code ) return res.render('index', {breweryData: null});
  fetch(`${byPostalURL}${postal_code}`)
  .then(res => res.json())
  .then(breweryData => {
    res.render('index', {title: breweryData.name, breweryData});
  });
});

module.exports = router;
