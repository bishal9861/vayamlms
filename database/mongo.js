const mongoose=require("mongoose")
mongoose.connect("mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false").then(
    result=>{
        console.log(result)
    }
).catch(
    err=>{
        console.log(err)
    }
)