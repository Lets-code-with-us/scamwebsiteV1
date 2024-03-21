import {v2 as cloudinary} from "cloudinary"
import fs from "fs"

cloudinary.config({
cloud_name:process.env.CLOUD_NAME,
api_key:process.env.API_KEY,
api_secret:process.env.API_SECRET,
secure:true
})

async function UploadFile(path:string){
   try {
    if(!path){
        return new Error('No path Founded')
    }
     const response = await cloudinary.uploader.upload(path,{
        resource_type:'auto'
     });
     const url = await response.url
     fs.unlinkSync(path)
     return url
   } catch (error:any) {
    console.log('error--->',error)
    fs.unlinkSync(path)
    
   }

}


export default UploadFile