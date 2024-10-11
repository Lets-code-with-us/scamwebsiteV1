import { NextRequest, NextResponse } from "next/server";
import { dbConnect } from "@/db/dbConnect";
import { Blogs } from "@/models/blogModel";

// Connect to the database
dbConnect();

export async function POST(request: NextRequest) {
  try {
    const response = await request.json()
    const {id} = await response
    const getBlog = await Blogs.findById(id);

    if (!getBlog) {
      return NextResponse.json({ message: "Server error" }, { status: 500 });
    }

    return NextResponse.json({ message:'success', data: getBlog }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ message: error }, { status: 404 });
  }
}
