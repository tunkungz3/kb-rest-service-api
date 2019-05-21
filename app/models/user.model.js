var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    username: {type: String, unique: true},
    password: String,
    firstname: String,
    lastname: String,
    email: {type: String, index: true}
});

mongoose.model('User', UserSchema);