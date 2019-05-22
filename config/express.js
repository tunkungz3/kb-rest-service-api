var config = require('./config');
var express = require('express');
var bodyParser = require('body-parser');
var compression = require('compression');
var morgan = require('morgan');

module.exports = ()=>{
    var app = express();
    if(process.env.NODE_ENV === 'development'){
        // app.use(morgan);
    }else{
        app.use(compression);
    }
   
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());
 
    require('../app/routes/index.routes')(app);
    require('../app/routes/user.routes')(app);
    require('../app/routes/course.routes')(app);

    return app;
}