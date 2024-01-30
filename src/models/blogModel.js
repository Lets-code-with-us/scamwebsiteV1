import mongoose from "mongoose";

const blogsSchema = new mongoose.Schema({
    title:{
        type:String,
        requires:true
    },
    imageUrl:{
        type:String,
        required:true
    },
    Category:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    }
})


// blogs schema
const blogSchema = new mongoose.Schema({
    user:{
        type:mongoose.Types.ObjectId,
        ref:"User"
    },
    Blog:[
        {
            blogsSchema
        }

    ]
})




export const Blogs = mongoose.models.blogs || mongoose.model("Blog",blogSchema) 