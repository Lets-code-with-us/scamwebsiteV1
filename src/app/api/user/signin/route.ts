import { NextRequest, NextResponse } from "next/server";
import { User } from "@/models/userModel";
import { dbConnect } from "@/db/dbConnect";
import bcrypt from "bcryptjs"; // Changed to bcryptjs
import { z } from "zod";

// Connect the database
dbConnect();

// Defining zod schema (no export here)
const ZodValidation = z.object({
  email: z.string().email(),
  username: z.string(),
  password: z.string(),
});

// Post the data
export async function POST(request: NextRequest) {
  // Get the user details
  try {
    const { email, username, password } = await request.json();

    // Inputs validation using zod
    if (!ZodValidation.safeParse({ email, username, password }).success) {
      return NextResponse.json({ message: "Incorrect inputs" }, { status: 401 });
    }

    // Check if user exists
    const userExist = await User.findOne({ email });

    if (userExist) {
      return NextResponse.json({ message: "User Exists" }, { status: 400 });
    }

    // Encrypt the password
    const hashedPassword = await bcrypt.hash(password, 10); // 10 is the salt rounds

    // Create and save the user
    const user = new User({
      email,
      username,
      password: hashedPassword,
    });

    await user.save();
      
    
    return NextResponse.json({ message: "Success" }, { status: 200 });
    
  } catch (error: any) {
    console.error("Error:", error); // Log the error for debugging
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
