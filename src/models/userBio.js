import mongoose from "mongoose";


// bio schema

const bioSchema = new mongoose.Schema({
    user:{
        type:mongoose.Types.ObjectId,
        ref:"User"
    },
    bio:{
        type:String,
        default:null

    },
    instagramLink:{
        type:String,
        default:null

    },
    LinkedlnLink:{
        type:String,
        default:null

    },
    githubLink:{
        type:String,
        default:null
    }
})



export const Bio = mongoose.models.Bio || mongoose.model("Bio",bioSchema)