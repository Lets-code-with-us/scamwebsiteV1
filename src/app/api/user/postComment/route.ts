import { NextRequest,NextResponse } from "next/server";
import { dbConnect } from "@/db/dbConnect";
import {Comment} from "@/models/commentModel";
import { getCookie } from "cookies-next";
import JWT,{ JwtPayload } from "jsonwebtoken";


dbConnect()
export async function POST(request:NextRequest){
        try {
            
            const token = await request.cookies.get("token")?.value || ""
            console.log(token)
            if(!token){
                return NextResponse.json({"message":"Please LogIn"},{status:404})
            }
            const response = await request.json();
            const {blogId,comment} = await response;
            const userData:JwtPayload = await JWT.verify(token,process.env.SECERT_KEY!) as JwtPayload 
            const userId = await userData.id
            console.log(userId,blogId,comment)

            const commentModel = await new Comment({
                User:userId,
                blogId,
                comment
            });

            const saveModel = await commentModel.save();
            if (!saveModel) {
                return NextResponse.json({"message":"Sever error"}, {status:404});
            }
            return NextResponse.json({"message":"Comment added"},{status:200})
        } catch (error:any) {
            throw new Error(error)
            
        }

}