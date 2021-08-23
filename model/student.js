const Sequelize=require("sequelize");
const sequelize=require("../database/connect")
const Student=sequelize.define("student",{
    stud_id:{
        type:Sequelize.INTEGER,
        
        primaryKey:true,
        allowNull:false

    },
    stud_name:{
        type:Sequelize.STRING,
        allowNull:true
    },
    stud_username:{
        type:Sequelize.STRING,
        allowNull:true
    }
    ,
    stud_email:{
        type:Sequelize.STRING,
        allowNull:true

    },
    stud_parent:{
        type:Sequelize.STRING,
        allowNull:true
    },
    stud_gender:{
        type:Sequelize.STRING,
        allowNull:true

    },
    stud_location:{
        type:Sequelize.STRING,
        allowNull:true
    },
    stud_phone:{
        type:Sequelize.STRING,
        allowNull:true

    },
    stud_age:{
        type:Sequelize.STRING,
        allowNull:true
    },
    stud_password:{
        type:Sequelize.STRING,
        allowNull:true
    }



})


module.exports= Student;