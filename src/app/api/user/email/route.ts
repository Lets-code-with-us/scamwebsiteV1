import { dbConnect } from "@/db/dbConnect";
import Newletter from "@/models/newLetterModel";
import { NextRequest, NextResponse } from "next/server";
import { sendmail } from "@/utils/sendMail";

// connect db
dbConnect();

// function to post data

export async function POST(request: NextRequest) {
  try {
    const response = await request.json();
    const { email } = await response;
    const exsitedUser = await Newletter.findOne({ email });
    if (exsitedUser) {
      return NextResponse.json({ message: "User exist" }, { status: 400 });
    }
    const user = new Newletter({
      email,
    });

    await sendmail(response);
    await user.save();

    return NextResponse.json({ message: "success" }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ message: "server error" }, { status: 400 });
  }
}
