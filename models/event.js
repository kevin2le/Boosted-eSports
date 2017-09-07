var mongoose = require('mongoose');
Schema = mongoose.Schema;

var eventSchema = new mongoose.Schema({
    title: String,
    location: String,
    date: String,
    type: [String],
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    game: [String]
})

module.exports = mongoose.model('Event', eventSchema);