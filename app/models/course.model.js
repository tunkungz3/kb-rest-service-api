var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TutorSchema = require('../models/tutor.model');
var LessonSchema = require('../models/lesson.model'); 
var CourseSchema = new Schema({
    courseName:String,
    content:String,
    recommendedVideos:String,
    lessons:[{type:LessonSchema}],
    tutor:{type:TutorSchema},
});

mongoose.model('Course', CourseSchema);