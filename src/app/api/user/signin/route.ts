import { NextRequest, NextResponse } from "next/server";
import { User } from "@/models/userModel";
import { dbConnect } from "@/db/dbConnect";
import bcrypt from "bcrypt";
import { z } from "zod";

// connect the database
dbConnect();

// Defining zod schema (no export here)
const ZodValidation = z.object({
  email: z.string().email().optional(),
  username: z.string().optional(),
  password: z.string().optional(),
  message: z.string().optional(),
});

// post the data
export async function POST(request: NextRequest) {
  // get the user details
  try {
    const reponse = await request.json();
    const { email, username, password } = await reponse;

    // inputs validation using zod
    if (!ZodValidation.safeParse({ email, username, password }).success) {
      return NextResponse.json({ message: "Incorrect inputs" }, { status: 401 });
    }

    // check if user exists
    const userExist = await User.findOne({ email });
    if (userExist) {
      return NextResponse.json({ message: "User Exists" }, { status: 400 });
    }

    // encrypt the data
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // create and save the user
    const user = new User({
      email,
      username,
      password: hashedPassword,
    });

    const savedUser = await user.save();
    if (savedUser) {
      return NextResponse.json({ message: "Success" }, { status: 200 });
    }
  } catch (error: any) {
    console.log("error: ", error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
