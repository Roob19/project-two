var express = require("express");
var router = express.Router();

/* GET home page. */
console.log("here");
router.get('/', (req, res) => { 
  console.log("calling index")
  res.render('pageView/', { title: "TESTING TITLE"})
});



module.exports = router;