var mongoose = require('mongoose');

var UserSchema = mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    username: {type: String, unique: true},
    password: String,
    firstname: String,
    lastname: String,
    email: {type: String, index: true}
});

mongoose.model('USER', UserSchema);