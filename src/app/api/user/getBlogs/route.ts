import { NextRequest, NextResponse } from "next/server";
import { dbConnect } from "@/db/dbConnect";
import { Blogs } from "@/models/blogModel";

// Connect to the database
dbConnect();

export async function GET(request: NextRequest & { params: any }) {
    try {
        // Access query parameters directly without await
        const params = request.params;
        const getBlog = await Blogs.findById(params.id);

        if (!getBlog) {
            // Return a 404 response if the blog is not found
            return NextResponse.json({ message: "Blog not found" }, { status: 404 });
        }

        // Return the blog data if found
        return NextResponse.json({ data: getBlog }, { status: 200 });
    } catch (error: any) {
        // Throw the error to be caught by the error handling middleware
        throw new Error("Error fetching blog: " + error.message);
    }
}
