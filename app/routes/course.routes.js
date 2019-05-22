var requireJWTAuth = require('../../config/authorization');
module.exports = (app)=>{
    var course = require('../controllers/course.controller');

    
    app.route('/course')
        .post(course.create)
        .get(course.list);

};