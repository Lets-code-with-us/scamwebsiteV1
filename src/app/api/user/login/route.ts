import { NextRequest, NextResponse } from "next/server";
import { dbConnect } from "@/db/dbConnect";
import { User } from "@/models/userModel";
import bcrypt from "bcrypt";
import Jwt from "jsonwebtoken";
import { z } from "zod";

// connect the database
dbConnect();

// Defining zod schema for validation
const ZodValidation = z.object({
  email: z.string().email(),
  password: z.string().min(6).max(20),
});

// login the user
export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();
    
    
    // inputs validation using zod
    if (!ZodValidation.safeParse({ email, password }).success) {
      return NextResponse.json({ message: "Incorrect inputs" }, { status: 401 });
    }

    const userExist = await User.findOne({ email });
   
    if (!userExist) {
      return NextResponse.json({ message: "User does not exist" }, { status: 404 });
    }

    const checkPassword = await bcrypt.compare(password, userExist.password);
    
    if (checkPassword == false) {
      return NextResponse.json({ message: "Wrong Password" }, { status: 401 });
    }

    // token created
    const token = await Jwt.sign(JSON.stringify(userExist._id), process.env.SECRET_KEY!) ;
    
    // create the response
    const response = NextResponse.json({ message: "Login successful" }, { status: 200 });

    // set the cookie with the token
    response.cookies.set("token", token, {
      httpOnly: true,
      secure: true, // Ensure secure cookies in production
      sameSite: "strict",
      maxAge: 60 * 60, // 1 hour
    });
    return response;

  } catch (error: any) {
    return NextResponse.json({ message: "Internal server Error" }, { status: 500 });
  }
}
