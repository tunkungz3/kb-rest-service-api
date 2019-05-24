const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');

require('dotenv').config();

module.exports = ()=>{
    var app = express();
   
    app.use(helmet());
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());
 
    require('../app/routes/index.routes')(app);
    require('../app/routes/user.routes')(app);
    require('../app/routes/course.routes')(app);

    return app;
}