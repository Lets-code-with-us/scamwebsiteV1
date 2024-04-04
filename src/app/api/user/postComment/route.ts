import { NextRequest,NextResponse } from "next/server";
import { dbConnect } from "@/db/dbConnect";
import {Comment} from "@/models/commentModel";
import { getCookie } from "cookies-next";
import JWT,{ JwtPayload } from "jsonwebtoken";


dbConnect()
export async function POST(request:NextRequest){
        try {
            const response = await request.json();
            const {blogId,comment} = await response;
            const token = getCookie("token")?.valueOf() || ""; // Call the valueOf function on token
            if(!token){
                return NextResponse.json({"message":"Please LogIn"},{status:404})
            }
    
            const decrypt:JwtPayload = JWT.verify(token, process.env.SECERT_KEY!) as JwtPayload;
            const userId = decrypt.id;
            const commentModel = await new Comment.save({
                userId,
                blogId,
                comment
            })
    
            const saveModel = await commentModel.save();
            if(!saveModel){
                return NextResponse.json({"message":"Sever error"},{status:404})
            }
            return NextResponse.json({"message":"Comment added"},{status:200})
        } catch (error:any) {
            throw new Error(error)
            
        }

}