const mongoose = require('mongoose');

var VideoContentSchema = require('../models/videoContent.model');
var LessonSchema = mongoose.Schema({
    lessonName:String,
    videoContent:[{type:VideoContentSchema}]
});

mongoose.model('LESSON', LessonSchema);

module.exports = LessonSchema;
