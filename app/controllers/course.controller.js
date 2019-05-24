const mongoose = require('mongoose');
const Course = mongoose.model('COURSE');


var createCourse = (req,res,next)=>{
    let course = new Course({
        _id: new mongoose.Types.ObjectId(),
        courseName: req.body.courseName,
        recommendedVideos: req.body.recommendedVideos,
        lessons: req.body.lessons,
        tutor: req.body.tutor
    });
    course.save((err)=>{
        if(err){
            return next(err);

        }else{
            response = {
                responseStatus:200,
                responseMessage:"Course created.",
            };
            res.set('Content-Type', 'application/json');
            res.json(response);
        }
    });
};

var courseList = (req,res,next)=>{
    Course.find({})
    .exec((err,result)=>{
        if(err){
            return next(err);
        }else{
            let response = {
                responseStatus:200,
                responseMessage:"SUCCESS",
                data:result,
            };
            res.set('Content-Type', 'application/json');
            res.json(response);
        }
    });
};

exports.create = createCourse;
exports.list = courseList;
