const mongoose = require('mongoose');

var TutorSchema = mongoose.Schema({
   tutorName:String,
   details:String,
   profile:String,
});

mongoose.model('TUTOR', TutorSchema);

module.exports = TutorSchema;