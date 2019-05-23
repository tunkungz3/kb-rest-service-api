var mongoose = require('mongoose');
require('dotenv/config');
module.exports = ()=>{
    // mongoose.set('useFindAndModify', true);
    
    var db = mongoose.connect(process.env.DB_CONNECTED_ENV,{useNewUrlParser: true,useCreateIndex: true},(err)=>{
        if(err) console.log(err);

        console.log('Already connected to mongoDB');
    });
    
    require('../app/models/user.model');
    require('../app/models/course.model');
    require('../app/models/lesson.model');
    require('../app/models/videoContent.model');
    require('../app/models/tutor.model');
    return db;
}