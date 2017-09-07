var Event= require('../models/event');
var User = require('../models/user');
var Game = require('../models/game');
var request = ('request');
const rootURL = 'https://api-2445582011268.apicast.io/'

function index(req, res) {
    Event.find({}).then(events => res.json(events));
}

function create(req, res) {
    var newEvent = new Event(req.body);
    newEvent.user = req.user.id;
    newEvent.save((err, event) => {
        // User.findById(req.user._id, (err, user) => {
        //     user.events.push(event._id);
        //     user.save(() => res.status(201).json())    ;   
        // });
        res.json(event);
    });
};


module.exports = {
    index,
    create
}