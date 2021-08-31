const mongoose=require("mongoose");
const Schema=mongoose.Schema;
const qusetionSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    Qtype:{
        type:String,
        required:true

    }
})
module.exports=mongoose.model("Question",qusetionSchema)