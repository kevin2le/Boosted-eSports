var express = require('express');
var router = express.Router();
var Event = require('../../models/event');
var eventsCtrl = require('../../controllers/events');

router.post('/create-event', eventsCtrl.create);

module.exports= router;