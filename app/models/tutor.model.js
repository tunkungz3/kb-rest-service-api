var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TutorSchema = new Schema({
   tutorName:String,
   tutorDetail:String,
});

mongoose.model('Tutor', TutorSchema);

module.exports = TutorSchema;