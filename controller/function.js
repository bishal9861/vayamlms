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

exports.userOtp=(req,res,next)=>{
    res.render("otp.ejs")
}
exports.userLoginFunction=(req,res,next)=>{
    const {loginemail,loginpassword}=req.body;
    console.log(loginemail)
    console.log(loginpassword)
    Student.findAll({
        where:{
            stud_email:loginemail,
            stud_password:loginpassword
        }
    }).then(data=>{
        console.log(data)
        if(data.length==0){
            res.render("usersignup.ejs")
          
        }else{
            res.render("main.ejs")
        }
    }).catch(error=>{
        console.log(error)
    })
    
    
    
}
