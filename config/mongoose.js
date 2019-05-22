var config = require('./config');
var mongoose = require('mongoose');

module.exports = ()=>{
    mongoose.set('debug',config.debug);
    var db = mongoose.connect(config.mongoUri);

    require('../app/models/user.model');
    require('../app/models/course.model');
    require('../app/models/lesson.model');
    require('../app/models/videoContent.model');
    require('../app/models/tutor.model');
    return db;
}