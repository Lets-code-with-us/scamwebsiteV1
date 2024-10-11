import mongoose from "mongoose";
const blogSchema = new mongoose.Schema({
    user: {
        type: mongoose.Types.ObjectId,
        ref: "User"
    },
    title:{
        type:String,
        required:true
    },
    imageUrl:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    }

});

export const Blogs = mongoose.models.blogs || mongoose.model("Blogs", blogSchema);  // Corrected from "Blog" to "Blogs"
