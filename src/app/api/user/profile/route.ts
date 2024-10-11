import { NextRequest, NextResponse } from "next/server";
import JWT, { JwtPayload } from "jsonwebtoken";
import { dbConnect } from "@/db/dbConnect";
import { User } from "@/models/userModel";
import { Retina } from "@tsparticles/engine";

dbConnect();

export async function GET(request: NextRequest) {
  try {
    const getCookie = request.cookies.get("token")?.value || "";
    if (!getCookie) {
      return NextResponse.json({ message: "Login required" }, { status: 404 });
    }

    const decrypt: JwtPayload = (await JWT.verify(
      getCookie,
      process.env.SECERT_KEY!
    )) as JwtPayload;
    if (!decrypt) {
      return NextResponse.json({ message: "server error" }, { status: 500 });
    }

    const findUser = await User.findById(decrypt.id);

    if (!findUser) {
      return NextResponse.json({ message: "User not Found" }, { status: 404 });
    }

    const getuser = await findUser.username;

    return NextResponse.json(
      { message: "sucess", data: getuser },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({message:"Internal Server Error"},{status:500})
  }
}
