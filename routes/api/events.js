var express = require('express');
var router = express.Router();
var Event = require('../../models/event');
var eventsCtrl = require('../../controllers/events');

router.get('/', eventsCtrl.index);
router.post('/new', eventsCtrl.create);

module.exports= router;