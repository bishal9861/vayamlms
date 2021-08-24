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
exports.getUserOtp=(req,res,next)=>{
    res.render("otp-phoneNumber.ejs")
}
exports.sendOtpFunction= async (req,res,next)=>{
    const {phNumber}=req.body;
    let apikey = "oteRUvZlz7Hb6JsipPEwkxgdCMcT9ODSYXQfu05A2y34FLq1ahY82gVTjANZo0ObWCQPh6H5yGcqBlpi";
    let otpvalue=Math.floor(1000+Math.random()*9000);
    var options = { authorization: apikey, message: `OTP is:${otpvalue}`, numbers: [phNumber] }
    let response= await fast2sms.sendMessage(options)
    if(response.return){
        res.render("otpverification.ejs",{
            data:otpvalue,
            number:phNumber
        })
    }else{
        console.log("msg not send")
    }
}
exports.otpVerification=(req,res,next)=>{
    const {otp,number}=req.params;
    const {s1,s2,s3,s4}=req.body;
    let code=s1+s2+s3+s4
    console.log(number)
    if(otp==code){
        Student.findAll({
            where:{
                stud_id:number
            }
        }).then(
            result=>{
                //console.log(result)
                if(result.length==0){
                    res.render("usersignup.ejs")
                }else{
                    res.render("main.ejs")
                }
            }

        ).catch(
            error=>{
                console.log(error)
            }
        )
        
    }else{
        res.send("OTP NOT MATCH")
    }


}
