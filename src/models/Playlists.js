const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PlaylistSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    owner_user: {
        type: Schema.Types.ObjectId,
        ref: 'users',
        required: true
    },
    songs: {
        type: [Schema.Types.ObjectId],
        ref: 'songs'
    },
    is_active: {
        type: Boolean,
        default: true
    }
}, { timestamps: true });

module.exports = mongoose.model('playlist', PlaylistSchema);