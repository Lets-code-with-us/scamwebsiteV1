import { NextRequest, NextResponse } from "next/server";
import { User } from "@/models/userModel";
import { dbConnect } from "@/db/dbConnect";
import bcrypt from "bcrypt";
import { z } from "zod";

// connect the database
dbConnect();

// Defining zod schema 
const ZodValidation = z.object({
  email: z.string().email().max(20),
  username: z.string().min(8).max(20),
  password: z.string().min(5).max(20),
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

    // encrypt the user password
    const hashedPassword = await bcrypt.hash(password, 10);

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
