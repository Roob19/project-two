var express = require("express");
var router = express.Router();
var passport = require("passport");

/* GET home page. */
console.log("here");
router.get("/", (req, res) => {
  console.log("calling index");
  res.render("pageView/", { title: "Brew Finder" });
});

router.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "name", "email"] })
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
  res.redirect("/");
});

module.exports = router;
