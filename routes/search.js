var express = require("express");
var router = express.Router();
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

const rootURL = "https://api.openbrewerydb.org/breweries/autocomplete?query=";
const byCityURL = "https://api.openbrewerydb.org/breweries?by_city=";
const byPostalURL = "https://api.openbrewerydb.org/breweries?by_postal=";
const byStateURL = "https://api.openbrewerydb.org/breweries?by_state=";
const byLatLonURL = "https://api.openbrewerydb.org/breweries?by_dist=";

router.post("breweries/search", function (req, res, next) {
  const autoFill = req.body.name;
  const city = req.body.city;
  const postal_code = req.query.postal_code;
  const latitude = req.body.latitude;
  const longitude = req.body.longitude;
  const stateFind = req.body.state;

  if (autoFill === !"") {
    fetch(`${rootURL}${autoFill}`)
      .then((res) => res.json())
      .then((breweryData) => {
        res.render("breweries/showBrewery", { title: breweryData.name, breweryData });
      });
  } else if (city === !"") {
    fetch(`${byCityURL}${city}`)
      .then((res) => res.json())
      .then((breweryData) => {
        res.render("breweries/showBrewery", { title: breweryData.name, breweryData });
      });
  } else if (postal_code === !"") {
    fetch(`${byPostalURL}${postal_code}`)
      .then((res) => res.json())
      .then((breweryData) => {
        res.render("breweries/showBrewery", { title: breweryData.name, breweryData });
      });
  } else if (stateFind === !"") {
    fetch(`${byStateURL}${stateFind}`)
      .then((res) => res.json())
      .then((breweryData) => {
        res.render("breweries/showBrewery", { title: breweryData.name, breweryData });
      });
  } else if (latitude === !"" && longitude === !"") {
    fetch(`${byLatLonURL}${latitude}, ${longitude}`)
      .then((res) => res.json())
      .then((breweryData) => {
        res.render("breweries/showBrewery", { title: breweryData.name, breweryData });
      });
  } else {
    return res.render("/breweries", { title: "unknown", breweryData: null });
  }
});

module.exports = router;
