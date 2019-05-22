var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var VideoContentSchema = require('../models/videoContent.model');
var LessonSchema = new Schema({
    lessonName:String,
    videoContent:[{type:VideoContentSchema}]
});

mongoose.model('Lesson', LessonSchema);

module.exports = LessonSchema;
