var express = require("express");
var router = express.Router();
var passport = require("passport");

/* GET home page. */
router.get("/", (req, res) => {
  res.render("breweries/", { title: "Brew Finder" });
});

router.get(
  "/auth/google",
  passport.authenticate("google", { 
      scope: ["profile", "email"] 
    })
);

router.get(
  "/oauth2callback",
  passport.authenticate("google", {
    successRedirect: "/breweries",
    failureRedirect: "/breweries",
  })
);

router.get("/logout", function (req, res) {
  req.logout();
  res.redirect("/breweries");
});

module.exports = router;
