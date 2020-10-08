const mongoose = require('mongoose');
const bookmarkSchema = new mongoose.Schema({
    name: {
        type: String,
        required : true
    },
    url: {
        type: String,
        required: true
    },
},{timestamps: true});

const Bookmark = mongoose.model('Bookmark', bookmarkSchema);
module.exports = Bookmark;