var express = require('express');
var router = express.Router();
var Game = require('../../models/game');
var gamesCtrl = require('../../controllers/games');

router.get('/', gamesCtrl.index);
router.get('/search', gamesCtrl.search);

module.exports = router;