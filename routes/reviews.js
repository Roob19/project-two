const express = require("express");
const router = express.Router();
const reviewsCtrl = require("../controllers/reviews");

router.post("/pageView/:id/reviews", reviewsCtrl.create);
router.put("/pageView/:id/reviews", reviewsCtrl.update);
router.delete("/pageView/:id/reviews", reviewsCtrl.delete);

module.exports = router;
