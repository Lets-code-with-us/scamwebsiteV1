import { NextRequest,NextResponse } from "next/server";
import { dbConnect } from "@/db/dbConnect";
import { Blogs } from "@/models/blogModel";
import mongoose from "mongoose";

dbConnect()
export async function POST(request:NextRequest){

    try {
        const id = await request.json();
        if (!id) {
            return NextResponse.json({ "message": "ID not provided" }, { status: 400 });
          }
          const objectId = new mongoose.Types.ObjectId(id);
        const response = await Blogs.findById(objectId).exec();
    
        if(!response){
            return NextResponse.json({"message":"Server eror"},{status:500})
    
        }
        return NextResponse.json({"message":"success","data":response},{status:200})
    } catch (error:any) {
        console.log("error: ",error)
        
    }


}