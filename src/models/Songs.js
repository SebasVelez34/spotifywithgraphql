const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SongsSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    anyo: {
        type: Date,
        required: true
    }
});

module.exports = mongoose.model('songs', SongsSchema);