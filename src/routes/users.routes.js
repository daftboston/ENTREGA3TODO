const {Router} = require ('express');
const {createUser,getUserTodo}= require ('../controllers/users.controllers')



const router = Router()

router.post ("/users",createUser)
router.get("/users/:id",getUserTodo)

module.exports = router


