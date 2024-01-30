import mongoose from "mongoose";

const blogsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true  // Corrected from "requires" to "required"
    },
    imageUrl: {
        type: String,
        required: true
    },
    category: {  // Corrected from "Category" to "category"
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    }
});

const blogSchema = new mongoose.Schema({
    user: {
        type: mongoose.Types.ObjectId,
        ref: "User"
    },
    blogs: [  // Corrected from "Blog" to "blogs"
        {
            type: blogsSchema,
        }
    ]
});

export const Blogs = mongoose.models.blogs || mongoose.model("Blogs", blogSchema);  // Corrected from "Blog" to "Blogs"
