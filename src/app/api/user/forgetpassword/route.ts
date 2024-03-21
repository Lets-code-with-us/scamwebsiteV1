import { NextRequest, NextResponse } from "next/server";
import { User } from "@/models/userModel";
import { dbConnect } from "@/db/dbConnect";
import JWT, { JwtPayload } from "jsonwebtoken";
import bcrypt from "bcrypt";
dbConnect();
export async function POST(request: NextRequest, response: NextResponse) {
  try {
    const response = request.json();
    const { password, repassword } = await response;
    const token = (await request.cookies.get("token")?.value) || "";
    const decrypt: JwtPayload = (await JWT.verify(
      token,
      process.env.SECERT_KEY!
    )) as JwtPayload;
    const userFind = await User.findById(decrypt.id);
    if (!userFind) {
      return NextResponse.json(
        {
          message: "User Not Found",
        },
        {
          status: 404,
        }
      );
    }
    if (password != repassword) {
      return NextResponse.json(
        {
          message: "Check the Password",
        },
        {
          status: 404,
        }
      );
    }
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);
    const findUser = User.findByIdAndUpdate(decrypt, { password });
    if (!findUser) {
      return NextResponse.json(
        {
          message: "Server error",
        },
        {
          status: 404,
        }
      );
    }

    return NextResponse.json(
      {
        message: "success",
        data: "Password Update",
      },
      {
        status: 200,
      }
    ).cookies.set("token", "", {
      httpOnly: true,
    });
  } catch (error: any) {
    console.log("error", error);
  }
}
