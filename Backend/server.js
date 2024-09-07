import express from 'express'
import dotenv from "dotenv"
import mongoose from 'mongoose'
dotenv.config()
const app=express()
app.get("/products",(req,res)=>{
})

mongoose.connect(process.env.MONGO).then(()=>{
    console.log("mongo is connected")

}).catch((err)=>{
    console.log(err)

})

app.listen(5000,()=>{
    console.log("Server started at http://localhost:5000")
})

//zY9QqvET8AkO1bNC