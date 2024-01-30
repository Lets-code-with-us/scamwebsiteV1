import mongoose from "mongoose";

// newsletter model

const NewletterScheme = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        index:true,
        unique:true
    }
})



const Newletter = mongoose.models.newletters || mongoose.model("Newletter",NewletterScheme)

export default Newletter;