const db=require("../database/connect.js")
const sequelize=require("../database/connect")
const Student=require("../model/student")
exports.userLogin=(req,res,next)=>{
    
    res.render('userlogin.ejs')
      
}
exports.userSignup=(req,res,next)=>{
    res.render('usersignup.ejs')
}
exports.userLogged=(req,res,next)=>{
    const {loginid,loginpassword}=req.body;
    Student.findAll({
        where:{
            stud_email:loginid,
            stud_password:loginpassword
        }
    }).then(
        data=>{
            if(data.length==0){
                res.send("signup")
            }else{
                res.send("main page")
            }
        }
    ).catch(
        error=>{
            console.log(error)
        }
    )
    
}