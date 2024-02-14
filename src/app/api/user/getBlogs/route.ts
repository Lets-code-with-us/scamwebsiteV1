import { NextRequest,NextResponse } from "next/server";
import { dbConnect } from "@/db/dbConnect";
import { Blogs } from "@/models/blogModel";

dbConnect()
export async function GET(request:NextRequest & { params: any }){

    try {
        const params = await request.nextUrl.searchParams;
        const getBlog = await Blogs.findById(params.get('id'));
        if (!getBlog) {
            return NextResponse.json({ "message": "Server error" }, { status: 500 });
        }

        return NextResponse.json({ "data": getBlog }, { status: 200 });
    } catch (error: any) {
        console.log("error is: ", error);
    }


}