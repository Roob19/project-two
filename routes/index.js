var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res) {
  console.log("/ PAGE");
  res.redirect("/home", { title: "Brewery Finder" });
});

module.exports = router;
