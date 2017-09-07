var Event= require('../models/event');
var User = require('../models/user');
var Game = require('../models/game');
var request = ('request');
const rootURL = 'https://api-2445582011268.apicast.io/'

function create(req, res) {
    var newEvent = new Event(req.body);
    newEvent.user = req.user.id;
    newEvent.save((err, list) => {
        req.user.events.push(event.id);
        req.user.save(() => {
            res.redirect('/events/' + req.user.id);
        });
    });
}

module.exports = {
    create
}