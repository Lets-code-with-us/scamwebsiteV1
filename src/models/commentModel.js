import mongoose from "mongoose";


const commentModel = new mongoose.Schema({
    userId:{
        type:mongoose.Types.objectId,
        ref:"User",
        required:true
    },
    blogId:{
        type:mongoose.Types.objectId,
        ref:"Blog",
        required:true
    },
    comment:{
        type:String,
        required:true
    }
},{timestamps:true})



export const  Comment = mongoose.models.comments || mongoose.model("Comment",commentModel);
