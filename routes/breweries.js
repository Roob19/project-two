const express = require('express');
const router = express.Router();
const breweriesCtrl = require('../controllers/breweries');
const isLoggedIn = require('../config/auth');

router.get('/', breweriesCtrl.index);
router.post('/new', isLoggedIn, breweriesCtrl.new);
router.get('/:id', breweriesCtrl.show);
router.post('/', isLoggedIn, breweriesCtrl.create);

module.exports = router;