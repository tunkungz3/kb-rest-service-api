const mongoose = require('mongoose');
const jwt = require("jwt-simple");
require('dotenv/config');


var User = mongoose.model('USER');

var createUser = (req, res, next)=>{
    const user = new User({
        _id: new mongoose.Types.ObjectId(),
        username: req.body.username,
        password: req.body.password,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email
    });
    user.save((err)=>{ 

        if(err){
            if(err.name === 'MongoError' && err.code === 11000){
                response = {
                    responseStatus: 400,
                    responseMessage: 'User already exist!'
                }
                return res.status(400).send(response);
            }
            return next(err);
        }else{
            response = {
                responseStatus:200,
                responseMessage:"User created."
            };
            res.json(response);
        }
    });
};

var userList = (req, res, next)=>{
    User.find({},(err, users)=>{

        if(err){
            return next(err);
        }else{
            let response = {
                responseStatus:200,
                responseMessage:"SUCCESS",
                data:users,
            };
            res.json(response);
        }
       
    });
};

var userLogin = (req, res, next)=>{
    User.find({})
        .where('username').equals(req.body.username)
        .where('password').equals(req.body.password)
        .select('username firstname lastname email')
        .exec((err,user) =>{
            if(err){
                return next(err);
            }else{

                let response = {
                    responseStatus:200,
                    responseMessage:"SUCCESS",
                };
                if(user.length == 0){
                    response.responseMessage = "username or password invalid." ;
                    response.responseStatus = 401;

                    res.status(401);
                    res.send(response);
                }else{
                    const payload = {
                        sub: user.username,
                        iat: new Date().getTime()//มาจากคำว่า issued at time (สร้างเมื่อ)
                     };
                 
                     response.data = {
                         token:jwt.encode(payload, process.env.SECRET_KEY_ENV),
                         userInfo:user
                    };
                     res.send(response);
                }
            }
        });
};

var getUserInfo = (req, res, next)=>{
    User.find({})
    .where('username').equals(req.params.username)
    .select('username firstname lastname email')
    .exec((err, user)=>{
        if(err){
            return next(err);
        }else{
            let response = {
                responseStatus:200,
                responseMessage:"SUCCESS",
                data:user,
            };
            res.json(response);
        }
    });
       
}
exports.create = createUser;
exports.findUser = getUserInfo;
exports.list = userList;
exports.login = userLogin;