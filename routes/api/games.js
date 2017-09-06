var express = require('express');
var router = express.Router();
var Game = require('../../models/game');
var gamesCtrl = require('../../controllers/games');

router.post('/games', gamesCtrl.index);

module.exports = router;