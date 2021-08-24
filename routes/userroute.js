const express=require("express");
const path=require("path")
const route=express.Router()
const userfunction=require("../controller/function.js")

route.get('/login' ,userfunction.userLogin )
route.get("/signup",userfunction.userSignup)
route.post("/loginfunction",userfunction.userLoginFunction)
route.get("/getOtp",userfunction.getUserOtp)
route.post("/sendOtp",userfunction.sendOtpFunction)
route.post("/otpverification/:otp/number/:number",userfunction.otpVerification)




module.exports= route;