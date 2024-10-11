import mongoose from "mongoose";


const profileModel = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    profileimg:{
        type:String,
    },
    bio:{
        type:mongoose.Types.ObjectId,
        ref:'Bio'
    }
})



export const Profile = mongoose.models.profiles || mongoose.model('Profile',profileModel)
