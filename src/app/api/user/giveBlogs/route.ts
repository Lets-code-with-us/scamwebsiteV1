import { dbConnect } from "@/db/dbConnect";
import { Blogs } from "@/models/blogModel";
import { NextRequest,NextResponse } from "next/server";


dbConnect()
export async function GET(_request:NextRequest) {
   try {
     const getBlog = await Blogs.find({}).sort({_id:-1});
     const blogData = await getBlog;
 
     if(!getBlog){
         return NextResponse.json({message:"Server Error"},{status:500})
     }
 
     return NextResponse.json({data:blogData},{status:200})
   } catch (error:any) {
    return NextResponse.json({message:error},{status:404})
    
   }

}