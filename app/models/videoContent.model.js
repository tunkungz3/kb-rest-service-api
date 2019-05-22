var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var VideoContentSchema = new Schema({
    title:String,
    url:String,
    length:Number,
    key:String,
});

mongoose.model('VideoContent', VideoContentSchema);
module.exports = VideoContentSchema;