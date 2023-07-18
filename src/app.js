const express = require ('express')
require("dotenv").config()
const db = require('./utils/database')
const initModels = require('./models/initModels')
const userRoutes = require('./routes/users.routes')
const categoryRoutes = require('./routes/categories.routes')
const todoRoutes=require('./routes/todos.routes')
const cors = require('cors')

initModels()


const app= express()

app.use(cors())
app.use(express.json())

//{alter: true}
db.sync()
  .then (()=> {
    console.log("Base de datos sincronizada");
  })
  .catch ((error)=>console.log(error))

app.get ('/', (req,res)=>{
    res.send ('servidor funcionando')
})

app.use(userRoutes, todoRoutes, categoryRoutes)


const PORT = process.env.PORT || 8000

app.listen(PORT, ()=>{
    console.log(`Servidor escuchando en el puerto ${PORT}`);
})