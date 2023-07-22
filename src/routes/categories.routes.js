const {Router} = require ('express');
const {getCategories, createCategories}=require ('../controllers/categories.controllers')

const router = Router()

router.get("/categories",getCategories)
router.post("/categories",createCategories)

module.exports = router 