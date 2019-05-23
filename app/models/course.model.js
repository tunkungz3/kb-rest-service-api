var mongoose = require('mongoose');

var TutorSchema = require('../models/tutor.model');
var LessonSchema = require('../models/lesson.model'); 
var CourseSchema = mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    courseName:String,
    content:String,
    recommendedVideos:String,
    lessons:[{type:LessonSchema}],
    tutor:{type:TutorSchema},
});

mongoose.model('COURSE', CourseSchema);