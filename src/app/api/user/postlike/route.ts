import { NextRequest,NextResponse } from "next/server";
import {Like} from "@/models/likeModel"
import { dbConnect } from "@/db/dbConnect";



dbConnect()
export async function POST(request:NextRequest) {
try {
    const token = request.cookies.get("token")?.value || ""
    if(!token){
        return NextResponse.json({"message":"Login First"},{status:404})
    }
    
    
} catch (error) {
    
}
    
}