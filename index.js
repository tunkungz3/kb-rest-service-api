var mongoose = require('./config/mongoose');
var express = require('./config/express');
require('dotenv');

var db = mongoose(); // return mongoose.connect(config.mongoUri);
var app = express();



app.listen(process.env.PORT || 3000,()=>{
    console.log(`Start server at port ${process.env.PORT}.`);
});

module.exports = app;

