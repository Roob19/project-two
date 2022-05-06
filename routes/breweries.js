const express = require('express');
const router = express.Router();
const breweriesCtrl = require('../controllers/breweries');
const isLoggedIn = require('../config/auth');

router.get('/', breweriesCtrl.index);
router.get('/new', breweriesCtrl.new); // isLoggedIn,
router.get('/:id', breweriesCtrl.show);
router.post('/', breweriesCtrl.create); // isLoggedIn,

module.exports = router;