const {Router} = require ('express');
const {createTodo,getTodo, putTodo, deleteTodo}= require ('../controllers/todos.controllers')

const router= Router()

router.post("/todos",createTodo)
router.get('/todos/:id',getTodo)
router.put('/todos/:id',putTodo)
router.delete('/todos/:id',deleteTodo)



module.exports = router



 

