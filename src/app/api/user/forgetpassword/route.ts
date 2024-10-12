import { NextRequest, NextResponse } from "next/server";
import { User } from "@/models/userModel";
import { dbConnect } from "@/db/dbConnect";
import JWT, { JwtPayload } from "jsonwebtoken";
import bcrypt from "bcryptjs";

dbConnect();

export async function POST(request: NextRequest) {
  try {
   
    const { password, repassword } = await request.json();        //Asynchronous Data Parsing

    const token = request.cookies.get("token")?.value || "";

    if (!token) {
      return NextResponse.json({ message: "Please login first" }, { status: 401 });        //JWT Token Handling
    }

    const decrypt = JWT.verify(token, process.env.SECRET_KEY!) as JwtPayload;

    const userFind = await User.findById(decrypt.id);

    if (!userFind) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    if (password !== repassword) {
      return NextResponse.json({ message: "Passwords do not match" }, { status: 400 });
    }

    const isSamePassword = await bcrypt.compare(password, userFind.password);                    //Password Comparison Logic
    if (isSamePassword) {
      return NextResponse.json({ message: "New password cannot be the same as the old password" }, { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const updatedUser = await User.findByIdAndUpdate(decrypt.id, { password: hashedPassword }, { new: true });

    if (!updatedUser) {
      return NextResponse.json({ message: "Server error, could not update password" }, { status: 500 });
    }

    return NextResponse.json({ message: "Password updated successfully" }, { status: 200 });

  } catch (error: any) {
    console.error("Error:", error.message);                                                        //Log the actual error message
    return NextResponse.json({ message: "An internal server error occurred" }, { status: 500 });
  }
}
