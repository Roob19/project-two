const express = require("express");
const router = express.Router();
const passport = require('passport');

/* GET home page. */
router.get("/", function (req, res, next) {
  console.log("/ PAGE");
  res.render("/index");
});

module.exports = router;
