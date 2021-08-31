const db=require("../database/connect.js")
const sequelize=require("../database/connect")
const Student=require("../model/student")
const fast2sms=require("fast-two-sms");
const Question=require("../model/miquestions")
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

exports.addQuestion=(req,res,next)=>{
    new Question({
        name:"I'm good at puzzles that require logic such as chess, checkers and Sudoku ",
        Qtype:"Logical/Mathematical"
    }).save().then(
        result=>{
            res.send(result)
            console.log(result)
        }
    ).catch(
        err=>{
            console.log(err)
        }
        
    )
}
exports.getMiTest=(req,res,next)=>{
    Question.find().then(
        questions=>{
            console.log(questions.length)
            res.render("miTest.ejs",{
                Questions:questions
            })

        }
    ).catch(err=>{
        console.log(err)
    })
}
const calQuestionType=(type)=>{
    let data;
    Question.find({
        Qtype:type

    }).then(
        result=>{
            //console.log(result.length)
            return result
        }
    ).catch(
        err=>{
            console.log(err)
        }
    )
    
}
exports.checkmitest=(req,res,next)=>{
    let Linguistic=3;
    let Logical=2;
    let Musical=3;
    let Spatial=1;
    let Bodil=1;
    let Intrapersonal=3;
    let Interpersonal=2;
    let Naturalist=3;
    let Existential=2;
    //console.log(calQuestionType("Linguistic/Verbal"))
    Question.find().then(
        questions=>{
            let type1corr=0;
            let type2corr=0;
            let type3corr=0;
            let type4corr=0;
            let type5corr=0;
            let type6corr=0;
            let type7corr=0;
            let type8corr=0;
            let type9corr=0;
            for(let i=0;i<questions.length;i++){
                //console.log(req.body.val[i])
                if(questions[i].Qtype=="Linguistic/Verbal"){
                    if(req.body.val[i]=="yes"){
                        type1corr+=1
                    }else{
                        continue;
                    }

                }else if(questions[i].Qtype=="Logical/Mathematical"){
                    if(req.body.val[i]=="yes"){
                        type2corr+=1
                    }else{
                        continue;
                    }
                }else if(questions[i].Qtype=="Musical"){
                    if(req.body.val[i]=="yes"){
                        type3corr+=1
                    }else{
                        continue;
                    }
                }else if(questions[i].Qtype=="Spatial/Visual"){
                    if(req.body.val[i]=="yes"){
                        type4corr+=1
                    }else{
                        continue;
                    }
                }else if(questions[i].Qtype=="Bodil/Kinesthetic"){
                    if(req.body.val[i]=="yes"){
                        type5corr+=1
                    }else{
                        continue;
                    }
                }else if(questions[i].Qtype=="Intrapersonal"){
                    if(req.body.val[i]=="yes"){
                        type6corr+=1
                    }else{
                        continue;
                    }
                }else if(questions[i].Qtype=="Interpersonal"){
                    if(req.body.val[i]=="yes"){
                        type7corr+=1
                    }else{
                        continue;
                    }
                }else if(questions[i].Qtype=="Naturalist"){
                    if(req.body.val[i]=="yes"){
                        type8corr+=1
                    }else{
                        continue;
                    }
                }
                else if(questions[i].Qtype=="Existential"){
                    if(req.body.val[i]=="yes"){
                        type9corr+=1
                    }else{
                        continue;
                    }
                }

            }
            
            //console.log(type1corr)
            //console.log(type2corr)
            //console.log(type3corr)
            //console.log(type4corr)
            //console.log(type5corr)
            //console.log(type6corr)
            //console.log(type7corr)
            //console.log(type8corr)
            //console.log(type9corr)
            res.render("mitestresult.ejs",{
                resultdata:{
                    type1:type1corr,
                    type2:type2corr,
                    type3:type3corr,
                    type4:type4corr,
                    type5:type5corr,
                    type6:type6corr,
                    type7:type7corr,
                    type8:type8corr,
                    type9:type9corr
                },
                eachTypeTotal:{
                    t1:Linguistic,
                    t2:Logical,
                    t3:Musical,
                    t4:Spatial,
                    t5:Bodil,
                    t6:Intrapersonal,
                    t7:Interpersonal,
                    t8:Naturalist,
                    t9:Existential


                }


            })

        }
    ).catch(
        err=>{
            console.log(err)
        }
    )


    //res.send(req.body.val)
}