const express = require("express")
const stripe = require("stripe")
const {engine} = require("express-handlebars")
require("dotenv").config()

const app = express()

app.engine("handlebars",engine())
app.set("view engine","handlebars")

//middlewares

//static
app.use(express.static(__dirname + "public"))

//body-parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//routes
app.use("/api",(req,res)=>{
    res.status(200).render("index")
})

app.listen(process.env.PORT||5000,()=>{
    console.log(`server started on port ${process.env.PORT}`)
})