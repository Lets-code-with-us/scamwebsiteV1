import mongoose from "mongoose";


const OauthSchema = new mongoose.Schema({
    username:{
        type:String,
        unique:true,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    avator:{
        type:String,
        required:true,
        unique:true
    },
    blogs:[
        {

            type:mongoose.Types.ObjectId,
            ref:Blog
        }
    ]
}) 



export const Auth = mongoose.models.auths || mongoose.model("Auth",OauthSchema);