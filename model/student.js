const Sequelize=require("sequelize");
const sequelize=require("../database/connect")
const Student=sequelize.define("student",{
    stud_id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true,
        allowNull:false

    },
    stud_username:{
        type:Sequelize.STRING,
        allowNull:false
    }
    ,
    stud_email:{
        type:Sequelize.STRING,
        allowNull:false

    },
    stud_parent:{
        type:Sequelize.STRING,
        allowNull:false
    },
    stud_gender:{
        type:Sequelize.STRING,
        allowNull:false

    },
    stud_location:{
        type:Sequelize.STRING,
        allowNull:false
    },
    stud_phone:{
        type:Sequelize.STRING,
        allowNull:false

    },
    stud_age:{
        type:Sequelize.STRING,
        allowNull:false
    },
    stud_password:{
        type:Sequelize.STRING,
        allowNull:false
    }



})


module.exports= Student;