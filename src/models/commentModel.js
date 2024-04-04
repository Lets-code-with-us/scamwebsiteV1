import {mongoose} from "mongoose";


const commentModel = new mongoose.Schema({
    userId:{
        type:mongoose.Type.objectId,
        ref:"User"
    },
    blogId:{
        type:mongoose.Type.objectId,
        ref:"Blog"
    },
    comment:{
        type:String,
        require:true
    }
},{timestamps:true})



export const  Comment = mongoose.models.comments || mongoose.model("Comment",commentModel);
