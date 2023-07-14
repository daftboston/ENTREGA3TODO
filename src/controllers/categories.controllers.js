const Categories = require('../models/categories.model')



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
    getCategories
}