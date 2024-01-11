import mongoose from "mongoose"
import {Db_Name} from "../constants.js"

export const connectDb= async ()=>{
    try{
       const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${Db_Name}`)
       
       console.log(`\n MongoDB connected !! DB Host: `);

    } catch(error){ 
      console.log("MongoDb connected error ",error);
      process.exit(1)
    }
  }
