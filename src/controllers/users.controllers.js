const Users = require ('../models/users.model')
const Todos = require ('../models/todos.model')
const Categories = require ('../models/categories.model')


//crear un usuario
const createUser = async (req, res, next)=>{
    try{
        //validar la informacion
        const {username, email, password}= req.body;

        //asegurarse de que no venga vacia.
        if(typeof(username)!== 'string' || !username) {
            return res.status(400).json({
                error: 'invalid username',
            message:'Username canot be null or diferent to string'}
            )
        }

        if(typeof(email)!== 'string' || !username) {
            return res.status(400).json({
                error: 'invalid email',
            message:'Email canot be null or diferent to string'}
            )
        }

        if(typeof(password)!== 'string' || !password) {
            return res.status(400).json({
                error: 'invalid password',
            message:'Passord canot be null or diferent to string'}
            )
        }
         await Users.create({username,email,password})
         res.status(201).send()

    }catch(error){
        res.status(400).json(error)
                
    }
}


//obtener tareas de un usuario incluye al model todos
const getUserTodo = async (req,res)=> {
    try{
        const {id} = req.params
        const users = await Users.findByPk(id,{
            attributes:{
                exclude:['password']

            },
            include:[
                {
                model: Todos,
                attributes:{
                    exclude:['userId']
                }},
               
                
            ],
          
           
        }) 
        res.json(users)
        

    }catch (error){
        res.status(400).json(error)
                
                }

}



module.exports={
    createUser,
    getUserTodo
}