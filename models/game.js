var mongoose = require('mongoose');

var gameSchema = new mongoose.Schema({
    name: String,
    popularity: Number,
    cover: String,
    summary: String
});

module.exports = mongoose.model('Game', gameSchema)