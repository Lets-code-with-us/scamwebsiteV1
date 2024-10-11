import mongoose from "mongoose";

const reportSchema = new mongoose.Schema({
    user:{
        type:mongoose.Types.ObjectId,
        ref:"User"
    },
    blogId:{
        type:mongoose.Types.ObjectId,
        ref:"Blogs"
    },
    comment:{
        type:String,
        require:true,
    }
})


export const Report = mongoose.models.Report || mongoose.model("Report",reportSchema);