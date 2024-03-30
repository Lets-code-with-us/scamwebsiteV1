import { NextRequest, NextResponse } from "next/server";
import { dbConnect } from "@/db/dbConnect";
import { User } from "@/models/userModel";
import bcrypt from "bcrypt";
import JWT from "jsonwebtoken";
import { setCookie } from "cookies-next";
import { cookies } from "next/headers";

// connect the database
dbConnect();

// login the user
export async function POST(request: NextRequest) {
  try {
    const res = await request.json();
    const { email, password } = await res;

    const userExist = await User.findOne({ email });

    if (!userExist) {
      return NextResponse.json({
        message: "User not exist",
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
        message: "Login",
      },
      {
        status: 200,
      }
    );

    // set the cookies

    // response.cookies.set("token", token, {
    //   httpOnly: true,
    // });

    setCookie("token",token,{cookies});

    return response;
  } catch (error: any) {
    console.log("error: ", error);
  }
}
