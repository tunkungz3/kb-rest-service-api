require('dotenv/config');
var User = require('mongoose').model('USER');

//ใช้ในการ decode jwt ออกมา
const ExtractJwt = require("passport-jwt").ExtractJwt;
//ใช้ในการประกาศ Strategy
const JwtStrategy = require("passport-jwt").Strategy;
const passport = require("passport");

const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromHeader("authorization"),
    secretOrKey: process.env.SECRET_KEY_ENV,//SECRETเดียวกับตอนencode
 }
//
const jwtAuth = new JwtStrategy(jwtOptions, (payload, done) => {
    User.find({})
        .where('username').equals(payload.sub)
        .exec((err,user)=>{
            if(user.length != 0){
                done(null, true);
            }else {
                done(null, false);
            }
        });
    });
    
passport.use(jwtAuth);
const requireJWTAuth = passport.authenticate("jwt",{session:false});

module.exports = requireJWTAuth;
