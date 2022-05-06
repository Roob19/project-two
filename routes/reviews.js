const express = require("express");
const router = express.Router();
const reviewsCtrl = require("../controllers/reviews");

router.post("/breweries/:id/reviews", reviewsCtrl.create);
router.get("/reviews/:id/edit", reviewsCtrl.edit);
router.put("/reviews/:id", reviewsCtrl.update);
router.delete("/reviews/:id", reviewsCtrl.delete);

module.exports = router;
