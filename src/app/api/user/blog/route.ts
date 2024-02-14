import { NextRequest, NextResponse } from "next/server";
import JWT, { JwtPayload } from "jsonwebtoken";
import { Blogs } from "@/models/blogModel";
import { dbConnect } from "@/db/dbConnect";

dbConnect();
export async function POST(request: NextRequest) {
  try {
    const token = (await request.cookies.get("token")?.value) || "";

    if (!token) {
      return NextResponse.json({ message: "Login please" }, { status: 400 });
    }

    const decrypt: JwtPayload = (await JWT.verify(
      token,
      process.env.SECERT_KEY!
    )) as JwtPayload;

    const res = await request.json();
    const { title, imageUrl, category, content } = await res;

    if (!(title && imageUrl && category && content)) {
      return NextResponse.json(
        { mesaage: "All fields are required" },
        { status: 400 }
      );
    }
      const createBlog = await Blogs.create({
      user: decrypt.id,
      title,
      imageUrl,
      category,
      content
    
    });

    if (!createBlog) {
      return NextResponse.json({ message: "server error" }, { status: 500 });
    }

    await createBlog.save();

    return NextResponse.json({ message: "Blog created" }, { status: 200 });
  } catch (error: any) {
    console.log("error: ", error);
  }
}
