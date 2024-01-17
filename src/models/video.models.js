import mongoose , {Schema} from `mongoose`;
import mongooseAggregatePaginate from `mongooseAggregatePaginate`;

const videoSchema = new Schema(
    {
        videofile:{
            type:String,
            required:true
        },
        thumbnail:{
            type:String,
            required:true
        },
        title:{
            type:String,
            required:true
        },
        description:{
            type:String,
            required:true
        },
        duration:{
            type:Number,
            required:true
        },
        views:{
            type:Number,
            default:0
        },
        isPublished:{
            type:Boolean,
            default:true
        },
        owner:{
            type:Schema.Types.ObjectId,
            ref:"User"
        }
    },
    
    { timestamp:true }    
)

UserSchema.plugin(mongooseAggregatePaginate);

export const Video=mongoose.model.Schema('Video',videoSchema);

