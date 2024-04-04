import { NextRequest,NextResponse } from "next/server";
import { dbConnect } from "@/db/dbConnect";
import { Like } from "@/models/likeModel";


dbConnect()
export async function GET(request:NextRequest){
try {
    const response = await request.json();
    const {blogId} = await response;
    const getLike = await Like.find({blogId});
    if(!getLike){
        return NextResponse.json({"message":"server error"},{status:404})
    }


    return NextResponse.json({"messagge":"success","data":getLike.length},{status:200})


} catch (error:any) {
    throw new Error(error)
}
}