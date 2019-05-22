const mongoose = require('mongoose');
var Course = mongoose.model('Course');
var config = require('../../config/config');

var createCourse = (req,res,next)=>{
    let course = new Course(req.body);
    course.save((err)=>{
        if(err){
            return next(err);

        }else{
            response = {
                responseStatus:200,
                responseMessage:"Course created.",
                data:course,
            };
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
            res.json(response);
        }
    });
};

exports.create = createCourse;
exports.list = courseList;
