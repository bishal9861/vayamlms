const db=require("../../database/connect.js")
exports.userLogin=(req,res,next)=>{
    db.query("DESC student",(err,result)=>{
        console.log(result.length);
    })
    res.render('userlogin.ejs')
    
}