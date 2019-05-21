const config = require('../config/config');
var User = require('mongoose').model('User');

//ใช้ในการ decode jwt ออกมา
const ExtractJwt = require("passport-jwt").ExtractJwt;
//ใช้ในการประกาศ Strategy
const JwtStrategy = require("passport-jwt").Strategy;
const passport = require("passport");

const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromHeader("authorization"),
    secretOrKey: config.sessionSecret,//SECRETเดียวกับตอนencodeในกรณีนี้คือ MY_SECRET_KEY
 }

const jwtAuth = new JwtStrategy(jwtOptions, (payload, done) => {
    User.find({})
        .where('username').equals(payload.sub)
        .select('username')
        .exec((err,user)=>{
            if(user.length != 0)done(null, true);
            else done(null, false);
        });
    });
    
passport.use(jwtAuth);
const requireJWTAuth = passport.authenticate("jwt",{session:false});

module.exports = requireJWTAuth;