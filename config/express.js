var express = require('express');
var bodyParser = require('body-parser');

require('dotenv').config();

module.exports = ()=>{
    var app = express();
   
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());
 
    require('../app/routes/index.routes')(app);
    require('../app/routes/user.routes')(app);
    require('../app/routes/course.routes')(app);

    return app;
}