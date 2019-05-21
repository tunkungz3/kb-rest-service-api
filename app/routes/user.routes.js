var requireJWTAuth = require('../../config/authorization');
module.exports = (app)=>{
    var user = require('../controllers/user.controller');

    app.post('/login', user.login);
    // app.post('/logout', user.logout);
    app.post('/getUserInfo/:username',requireJWTAuth,user.findUser);
    
    app.route('/user')
        .post(user.create)
        .get(user.list);

};