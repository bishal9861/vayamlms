const db=require("../database/connect.js")
const sequelize=require("../database/connect")
const Student=require("../model/student")
const fast2sms=require("fast-two-sms");
exports.userLogin=(req,res,next)=>{
    res.render('userlogin.ejs')
}
exports.userSignup=(req,res,next)=>{
    res.render('usersignup.ejs')
}
exports.userLogged=(req,res,next)=>{
    
    
}