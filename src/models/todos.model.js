const db=require('../utils/database')
const {DataTypes}= require('sequelize')

const Todos = db.define('todos',{
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    title:{
        type: DataTypes.STRING(150),
        allowNull: false,        
    },

    description:{
        type: DataTypes.STRING(400),      
    }, 

    completed:{
        type: DataTypes.BOOLEAN, 
        defaultValue: true,
    },

    categoryId: {
        type: DataTypes.INTEGER,
        defaultValues: 1,
        field:'category_id',
        allowNull: false,  
    },

    userId:{
        type: DataTypes.INTEGER,
        field:'user_id',
        allowNull: false,  
    },




} ,{
    timestamps: false
}
)




module.exports= Todos