import { mongoose },{Schema} from "mongoose";
import { jwt  } from "jsonwebtoken";
import { bcrypt } from "bcrypt";

const UserSchema= new Schema(
    {
        username:{
            type:String,
            unique:true,
            lowercase:true,   
            required:true,
            trim:true,
            index:true
        },
        email:{
            type:String,
            unique:true,
            required:true,   
            lowercase:true,
            trim:true
        },
        fullName:{
            type:String,
            required:true,
            lowercase:true,
            trim:true
        },
        avatar:
        {
            type:String,
            required:true,
        },
        coverImage:
        {
            type:String
        },

        watchHistory:[
            {
              type:Schema.Types.ObjectId,
              ref:'Video'
            }
          ],
        password:{
            type:String,
            required:[true,"Password is required"],

        }
       refreshtoken:{
        type:String
       }
    }
    {       
      timestamp:true
    }
);

UserSchema.pre("save", async function (next) {
    if(!this.isModified("password")) return next();

    this.password=bcrypt.hash(this.password,10)
    next();
})

UserSchema.methods.isPasswordCorrect = async function(){
   return  await bcrypt.compare(password,this.password)
}

UserSchema.methods.generateAccessToken= function () {
    jwt.sign
    {
        _id:this._id,
        email:this.email,
        username:this.username,
        fullName:this.fullName
    } 
}   

UserSchema.methods.generateRefreshToken= function () {
    return jwt.sign
    {
        _id:this._id,
    },
    process.env.ACCESS_TOKEN_SECRET,  
    {
        expiresIn:process.env.ACCESS_TOKEN_EXPIRY
    }     
}

export const User= mongoose.model('User',UserSchema); 



                                                           