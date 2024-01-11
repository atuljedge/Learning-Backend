// require(`dotenv`).config({path:`./env`})

import dotenv from 'dotenv'
import mongoose from "mongoose"
import Db_Name from "./constants"
// import express from 'express'
// const app=express() 

import {connectDB  } from "./db";
 
dotenv.config({
  path:'./env'
})
connectDB()







/*
const connectDb= async ()=>{
  try{
     const connectionInstance = await mongoose.connect
     (`${process.env.MONGODB_URL}/${Db_Name}`)
     console.log(`\n MongoDB connected !! DB Host:
      ${connectionInstance.coonnected.host}`);
  } catch(error){
    console.log("MongoDb connected error ",error);
    process.exit(1)
  }
}
export default connectDb  */



/*
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