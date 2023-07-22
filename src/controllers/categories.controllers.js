const Categories = require('../models/categories.model')

// crear categorias
const createCategories= async (req, res, next) => {
    try {
        const {name}= req.body
        
        await Categories.create ({name})
        res.status(201).send()
    } catch (error) {
        next (error)
    }
}

// obtener categorias
const getCategories = async (req,res)=> {
    try{
        const categories = await Categories.findAll()
        res.json(categories)

    } catch (error){
        res.statu(400).json(error)
    }
}

module.exports={
    getCategories,
    createCategories
}