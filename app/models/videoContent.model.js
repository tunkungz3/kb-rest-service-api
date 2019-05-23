const mongoose = require('mongoose');

var VideoContentSchema = mongoose.Schema({
    title:String,
    url:String,
    length:Number,
    key:String,
});

mongoose.model('VIDEO_CONTENT', VideoContentSchema);
module.exports = VideoContentSchema;