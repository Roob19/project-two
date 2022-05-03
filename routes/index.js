var express = require("express");
var router = express.Router();
const passport = require("passport");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("pageView/home", { title: "Brewery Finder" });
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
    successRedirect: "/home",
    failureRedirect: "/home",
  })
);

router.get("/logout", function (req, res) {
  req.logout();
  res.redirect("/home");
});

module.exports = router;
