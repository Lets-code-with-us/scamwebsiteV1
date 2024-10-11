import mongoose from "mongoose";


const commentModel = new mongoose.Schema({
    User:{
        type:mongoose.Types.ObjectId,
        ref:"User",
        required:true
    },
    blogId:{
        type:mongoose.Types.ObjectId,
        ref:"Blog",
        required:true
    },
    comment:{
        type:String,
        required:true
    }
})



export const  Comment = mongoose.models.Comment || mongoose.model("Comment",commentModel);
