var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/allBreweries", function (req, res) {
    console.log("OUTSIDE INDEX PAGE");
    res.redirect("/pageView", { title: "Brewery Finder" });
  });

module.exports = router;
