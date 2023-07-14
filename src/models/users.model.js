const db=require('../utils/database')
const {DataTypes}= require('sequelize')

const Users=db.define('users',{
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true, 
        primaryKey:true
    },

    username: {
        type: DataTypes.STRING(30),
        allowNull: false,
        unique: true,
    },

    password:{
        type: DataTypes.STRING,
        allowNull: false,
    },

    email:{
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true,
        }
    },
}, {
    timestamps: false
})

module.exports= Users