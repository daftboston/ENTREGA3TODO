const {Sequelize}= require("sequelize")

const db = new Sequelize ({
    host: "localhost", 
    port: 5432,
    database: "apitodo",
    username: "postgres",
    password: "root",
    dialect: "postgres"
})

module.exports= db;