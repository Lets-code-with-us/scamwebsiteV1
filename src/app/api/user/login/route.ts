import { NextRequest, NextResponse } from "next/server";
import { dbConnect } from "@/db/dbConnect";
import { User } from "@/models/userModel";
import bcrypt from "bcryptjs"; // Changed to bcryptjs
import JWT from "jsonwebtoken";
import { z } from "zod";

// Connect the database
dbConnect();

// Defining zod schema for validation
const ZodValidation = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

// Login the user
export async function POST(request: NextRequest) {
  try {
    const res = await request.json();
    const { email, password } = res;

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

    // Create the JSON token
    const userData = {
      id: userExist._id,
      email: userExist.email,
    };

    // Token created
    const token = await JWT.sign(userData, process.env.SECRET_KEY!, { expiresIn: "1h" });

    // Create the response
    const response = NextResponse.json({ message: "Login successful" }, { status: 200 });

    // Set the cookie with the token
    response.cookies.set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production", // Ensure secure cookies in production
      sameSite: "strict",
      maxAge: 60 * 60, // 1 hour
    });

    return response;
  } catch (error: any) {
    console.error("Login error:", error); // Log the error for debugging
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
