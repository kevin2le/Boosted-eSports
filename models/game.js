var mongoose = require('mongoose');

var gameSchema = new mongoose.Schema({
    name: String,
    popularity: Number
});

module.exports = mongoose.model('Game', gameSchema)