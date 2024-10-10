import { NextRequest, NextResponse } from "next/server";
import { dbConnect } from "@/db/dbConnect";
import { User } from "@/models/userModel";
import bcrypt from "bcrypt";
import JWT from "jsonwebtoken";
import { setCookie } from "cookies-next";
import { cookies } from "next/headers";
import { ZodValidation } from "../signin/route";

// connect the database
dbConnect();

// login the user
export async function POST(request: NextRequest) {
  try {
    const res = await request.json();
    const { email, password } = await res;
    if (!ZodValidation.safeParse({ email, password }).success) {
      return NextResponse.json(
        { message: "Incorrects inputs" },
        { status: 401 }
      );
    }

    const userExist = await User.findOne({ email });

    if (!userExist) {
      return NextResponse.json({
        "message": "User not exist",
      },{
        status:404
      });
    }

    const checkPassword = await bcrypt.compare(password, userExist.password);

    if (!checkPassword) {
      return NextResponse.json({ message: "Wrong Password" }, { status: 404 });
    }

    // create the json token

    const userData = {
      id: userExist._id,
      email: userExist.email,
      password: userExist.password,
    };

    // token created
    const token = await JWT.sign(userData, process.env.SECERT_KEY!, {
      expiresIn: "1h",
    });

    // send response
    const response = NextResponse.json(
      {
        "message": "Login",
      },
      {
        status: 200,
      }
    );

  ;

    setCookie("token",token,{cookies});

    return response;
  } catch (error: any) {
    return NextResponse.json({message:error},{status:404})
  }
}
