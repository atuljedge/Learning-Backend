// require(`dotenv`).config({path:`./env`})
import dotenv from 'dotenv'
import {connectDb} from "./db/index.js";
import express from "express"
const app =express()      


dotenv.config({   
  path:'./env'
})

connectDb()
.then(() => {
  app.listen(process.env.PORT || 8000 , () =>{
    console.log(`Server is running at port:  ${process.env.PORT}`);
    app.on("error",(err) =>{
      console.log("error : ",err);
      throw err;
    })
  })
})
.catch((err) => {
    console.log("Mongo Db connection failed..",err)
});







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