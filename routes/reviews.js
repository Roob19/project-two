const express = require("express");
const router = express.Router();
const reviewsCtrl = require("../controllers/reviews");

router.post("/breweries/:id/reviews", reviewsCtrl.create);
router.put("/breweries/:id/reviews", reviewsCtrl.update);
router.delete("/breweries/:id/reviews", reviewsCtrl.delete);

module.exports = router;
