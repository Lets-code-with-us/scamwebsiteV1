import { NextRequest, NextResponse } from "next/server";
import { dbConnect } from "@/db/dbConnect";
import { User } from "@/models/userModel";
import bcrypt from "bcryptjs"; // Changed to bcryptjs
import Jwt from "jsonwebtoken";
import { z } from "zod";

// Connect the database
dbConnect();

// Defining zod schema for validation
const ZodValidation = z.object({
  email: z.string().email(),
  password: z.string(),
});

// Login the user
export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();

    // Inputs validation using zod
    if (!ZodValidation.safeParse({ email, password }).success) {
      return NextResponse.json({ message: "Incorrect inputs" }, { status: 401 });
    }

    const userExist = await User.findOne({ email });
    if (!userExist) {
      return NextResponse.json({ message: "User does not exist" }, { status: 404 });
    }

    // Compare password using bcryptjs
    const checkPassword = await bcrypt.compare(password, userExist.password);
    if (!checkPassword) {
      return NextResponse.json({ message: "Wrong Password" }, { status: 401 });
    }



    // Token created
    const token = await Jwt.sign(JSON.stringify(userExist._id), process.env.SECRET_KEY!);

    // Create the response
    const response = NextResponse.json({ message: "Login successful" }, { status: 200 });

    // Set the cookie with the token
    response.cookies.set("token", token, {
      httpOnly: true,
      secure: true, // Ensure secure cookies in production
      sameSite: "strict",
      maxAge: 60 * 60, // 1 hour
    });

    return response;
  } catch (error: any) {
    console.error("Login error:", error); // Log the error for debugging
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
