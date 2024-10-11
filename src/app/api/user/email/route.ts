import { dbConnect } from "@/db/dbConnect";
import Newletter from "@/models/newLetterModel";
import { NextRequest, NextResponse } from "next/server";
import { sendmail } from "@/utils/sendMail";
import { z } from "zod";

// connect db
dbConnect();

// Create a Zod schema specifically for validating email input
const NewsletterSchema = z.object({
  email: z.string().email(),
});

// function to post data
export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    // input validation using Zod
    const validationResult = NewsletterSchema.safeParse({ email });
    if (!validationResult.success) {
      return NextResponse.json(
        { message: "Invalid email address" },
        { status: 400 }
      );
    }

    // Check if the user is already subscribed
    const existingUser = await Newletter.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { message: "User already subscribed" },
        { status: 200 } // Return 200 to avoid confusing users with an error status
      );
    }

    // Save the new subscriber
    const user = new Newletter({ email });
    await user.save();

    // Send confirmation email
    const emailSent = await sendmail({ email });
    if (!emailSent) {
      return NextResponse.json(
        { message: "Failed to send confirmation email" },
        { status: 500 }
      );
    }

    return NextResponse.json({ message: "Subscription successful" }, { status: 200 });
  } catch (error: any) {
    console.error("Server error: ", error);
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
}
