process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var mongoose = require('./config/mongoose');
var express = require('./config/express');

var db = mongoose(); // return mongoose.connect(config.mongoUri);

var app = express();
app.listen(3000);

module.exports = app;

console.log('Start server at port 3000.');
