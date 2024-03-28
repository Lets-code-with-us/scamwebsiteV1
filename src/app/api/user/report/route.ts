import { NextResponse,NextRequest } from "next/server";
import JWT, { JwtPayload } from "jsonwebtoken";
import {Report} from "@/models/reportModel"
import { dbConnect } from "@/db/dbConnect";



dbConnect()
export async function POST(request:NextRequest) {
    try {
        const response  =  request.json();
        const {blogId,content} = await response;
        if(![blogId && content]){
            return NextResponse.json({
                "message":"Server Error"
            },{
                status:404
            })
        }
        const getCookies = await request.cookies.get("token")?.value || ''
        if(!getCookies){
            return NextResponse.json({
                "message":"Get Login"
            },{
                status:404
            })
        } 
        
        const userId = await JWT.verify(getCookies,process.env.NEXT_SECERT!) as JwtPayload;
    
        const userReport = await new Report({
            user:userId.id,
            blogId:blogId,
            comment:content
        });
        if(!userReport){
            return NextResponse.json({"message":"Report not able to create"},{status:404})
        } 
    
        const createdReport = await userReport.save()
        if(!createdReport){
            return NextResponse.json({"message":"Server Error"},{status:404})
        }
    
        return NextResponse.json({"message":"Report Created"},{status:200})
    } catch (error:any) {
        console.log(error)
        
    }





    
}