// require(`dotenv`).config({path:`./env`})

import dotenv from 'dotenv'
import {connectDb} from "./db/index.js";
 

dotenv.config({
  path:'./env'
})

connectDb()








/*
import express from 'express'
const app=express() 
(async()=>{
  try{
    await mongoose.connect(`{process.env.MONGODB_URL}/${Db_Name}`)
    app.on("error",(error)=>{
        console.log("ERROR",error);
        throw error
    })

    app.listen(process.env.PORT ()=>{
        console.log(`App is listening on port ${process.env.PORT}`);
    })
   }
  catch(error){
    console.log("ERROR",error)
    throw error
  }
})()
*/