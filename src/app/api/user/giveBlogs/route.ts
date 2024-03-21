import { dbConnect } from "@/db/dbConnect";
import { Blogs } from "@/models/blogModel";
import { NextRequest,NextResponse } from "next/server";


dbConnect()
export async function GET(_request:NextRequest) {
    const getBlog = await Blogs.findOne({}).sort({_id:1});
    const blogData = await getBlog;

    if(!getBlog){
        return NextResponse.json({"message":"Server Error"},{status:500})
    }

    return NextResponse.json({"data":blogData},{status:200})

}