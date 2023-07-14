const Todos = require ('../models/todos.model')
const Categories = require('../models/categories.model')

const createTodo = async (req, res, next)=>{
    try{
        
        //validar la informacion
        const{title,categoryId,userId,description}= req.body;

         /* if(typeof(title)!== 'string' || !title) {
            return res.status(400).json({
                error: 'invalid title',
            message:'title canot be null or diferent to string'}
            )
        }

          if(typeof(categoryId)!== 'number' || !categoryId) {
            return res.status(400).json({
                error: 'invalid category',
            message:'category canot be null or diferent to category'}
            )
        }

         if(typeof(userId)!== 'number' || !categoryId) {
            return res.status(400).json({
                error: 'invalid category',
            message:'category canot be null or diferent to category'}
            )
        }   
*/
        
        await Todos.create({title, categoryId, userId, description})
        res.status(201).send()

    }catch(error){
        next(error)
    }
}


// obtener una tarea con su categoria

const getTodo = async(req,res)=> {
    try {
        const {id}=req.params
        const todo= await Todos.findByPk(id,{
            include:[
                {
                    model: Categories
                }
            ]
        })
        res.json(todo)
        
    } catch (error) {
        res.status(400).json(error)        
    }
}


// actualizar una tarea

const putTodo = async(req,res)=> {
    try {
        const {id}= req.params;
        const {completed}=req.body
        await Todos.update(
            {completed },
            {where:{id}}
            )
            res.status(204).send();
    } catch (error) {
        res.status(400).json(error)
    }
}

// borrar una tarea.
const deleteTodo = async(req,res)=>{
    try{
        const{id}=req.params
        await Todos.destroy(
            {where:{id}}
        )
        res.status (204).send()

    }catch(error){
        res.status(400).json(error)
    }
}



module.exports={
    createTodo,
    getTodo,
    putTodo, 
    deleteTodo
    
}