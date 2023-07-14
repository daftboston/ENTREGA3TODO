const Users= require('./users.model')
const Todos = require ('./todos.model')
const Categories = require ('./categories.model')

const initModels = ()=>{
    //un Usuario tiene muchas tareas
    Users.hasMany(Todos,{foreignKey:'userId'});
    Todos.belongsTo(Users,{foreignKey:'userId'});




    Categories.hasMany(Todos, {foreignKey:'categoryId'});
    Todos.belongsTo(Categories,{foreignKey:'categoryId'})

    


}


module.exports= initModels;