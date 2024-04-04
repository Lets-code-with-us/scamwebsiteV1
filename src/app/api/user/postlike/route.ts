import { NextRequest, NextResponse } from "next/server";
import { Like } from "@/models/likeModel";
import { dbConnect } from "@/db/dbConnect";
import JWT, { JwtPayload } from "jsonwebtoken";

dbConnect();
export async function POST(request: NextRequest) {
  try {
    const response = await request.json();
    const { blog, user } = await response;
    const token = request.cookies.get("token")?.value || "";
    if (!token) {
      return NextResponse.json({ message: "Login First" }, { status: 404 });
    }
    const decrypt: JwtPayload = JWT.verify(
      token,
      process.env.SECERT_KEY!
    ) as JwtPayload;
    const userId = decrypt.id;
    const findUser = await Like.findById(userId);
    const findBlog = await Like.findById(blog);
    if (![findUser && findBlog]) {
      const likeModel = await new Like({
        userId,
        blog,
      });
      const saveLikeModel = await likeModel.save();
      if (!saveLikeModel) {
        return NextResponse.json({ message: "error" }, { status: 404 });
      }
      return NextResponse.json({ message: "Like added" }, { status: 200 });
    }

    return NextResponse.json(
      { message: "Like already added" },
      { status: 404 }
    );
  } catch (error:any) {
    throw new Error(error)
  }
}
