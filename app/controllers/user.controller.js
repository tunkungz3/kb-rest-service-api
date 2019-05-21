var User = require('mongoose').model('User');
const jwt = require("jwt-simple");

var config = require('../../config/config');

var createUser = (req, res, next)=>{
    var user = new User(req.body);

    user.save((err)=>{ 
        if(err){
            return next(err);

        }else{
         
            response = {
                responseStatus:200,
                responseMessage:"User created.",
                data:user,
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
        .select('username')
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
                        sub: req.body.username,
                        iat: new Date().getTime()//มาจากคำว่า issued at time (สร้างเมื่อ)
                     };
                     const SECRET = config.sessionSecret; //ในการใช้งานจริง คีย์นี้ให้เก็บเป็นความลับ
                     
                     response.data = jwt.encode(payload, SECRET);
                     res.send(response);
                }
            }
        });
};

var getUserInfo = (req, res, next)=>{
    console.log("get User Info");
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