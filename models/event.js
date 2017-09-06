var mongoose = require('mongoose');

var eventSchema = new mongoose.Schema({
    title: String,
    location: String,
    date: String,
    type: [String],
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    game: [{type: Schema.Types.ObjectId, ref: 'Game'}]
})

module.exports = mongoose.model('Event', eventSchema);