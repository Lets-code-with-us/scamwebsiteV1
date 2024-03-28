import { NextRequest, NextResponse } from "next/server";
import JWT, { JwtPayload } from "jsonwebtoken";
import { Blogs } from "@/models/blogModel";
import { dbConnect } from "@/db/dbConnect";
import { upload } from "@/utils/multer";
import UploadFile from "@/utils/cloudinary";
dbConnect();
export async function POST(request: NextRequest) {
  try {
    const token = (await request.cookies.get("token")?.value) || "";

    if (!token) {
      return NextResponse.json({ message: "Login please" }, { status: 400 });
    }

    const decrypt: JwtPayload = await JWT.verify(
      token,
      process.env.SECERT_KEY!
    ) as JwtPayload;

    const res = await request.json();
    const { title, category, content } = await res;
    const  file  = await res.files[0];
    const {path} = file


    if (!(title  && category && content)) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }
    // const localpath = await upload.single(imageUrl);
    // if (!localpath) {
    //   return NextResponse.json({ message: "Unable to upload the file" }, { status: 404 });
    // }
    const filepath = await UploadFile(path);
    if(!filepath){
      return NextResponse.json({"message":"file not able to upload"},{status:404})
    }

    const createBlog = await Blogs.create({
      user: decrypt.id,
      title,
      imageUrl:filepath,
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
    return NextResponse.json({"message":error},{status:500})
  }
}
