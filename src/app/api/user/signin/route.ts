import { NextRequest, NextResponse } from "next/server";
import { User } from "@/models/userModel";
import { dbConnect } from "@/db/dbConnect";
import bcrypt from "bcrypt";
import { z } from "zod";

// connect the database
dbConnect();
export const ZodValidation=z.object({
  email:z.string().email().optional(),
  username:z.string().optional(),
  password:z.string().optional(),
  message:z.string().optional()
})

// post the data
export async function POST(request: NextRequest) {
  // get the user details
  try {
    const reponse = await request.json();
    const { email, username, password } = await reponse;
    if (!ZodValidation.safeParse({ email, username, password }).success){
      return NextResponse.json({message:"Incorrects inputs"},{status:401})
    }
      

    // check user exist
    const userExist = await User.findOne({ email });

    if (userExist) {
      return NextResponse.json({ message: "User Exist" }, { status: 400 });
    }

    // encrypt the data
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await new User({
      email,
      username,
      password: hashedPassword,
    });

    const savedUser = await user.save();
    if (savedUser) {
      return NextResponse.json({ message: "success" }, { status: 200 });
    }
  } catch (error: any) {
    console.log("error: ", error);
  }
}
