var Game = require('../models/game');
var request = require('request');
const rootURL = 'https://api-2445582011268.apicast.io/'

function index(req, res) {
    const options = {
        url:"https://api-2445582011268.apicast.io/games/?fields=name,popularity&order=popularity:desc",
        method: "GET",
        headers: {
            'User-key': process.env.IGDB_KEY,
            'Accept': 'application/json'
        }
    };
    request(options, function(err, response, body) {
        res.status(200).send(JSON.parse(body));
    })
}

function search(req, res) {
    console.log(req.query);
    const options = {
        url: rootURL + '/games/?search=' + req.query.search,
        method: "GET",
        headers: {
            'User-key': process.env.IGDB_KEY,
            'Accept': 'application/json'   
        }
    };
    request(options, function(err, response, body) {
        var gameSearch = JSON.parse(body);
            res.send(gameSearch)
    });
}

module.exports = {
    index,
    search
}