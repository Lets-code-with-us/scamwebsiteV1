import mongoose from "mongoose";


const likeSchema = new mongoose.Schema({
    User:{
        type: mongoose.Types.ObjectId,
        ref:"User"
    },
    BlogLike:{
        type:mongoose.Types.ObjectId,
        ref:"Blog"
    }

})



export const Like = mongoose.models.likes || mongoose.model("Like",likeSchema);