import { NextRequest, NextResponse } from 'next/server';
import { User } from '@/models/userModel';
import { dbConnect } from '@/db/dbConnect';
import bcrypt from 'bcryptjs'; // Changed to bcryptjs
import { z } from 'zod';

// Connect the database
dbConnect();

// Defining zod schema (no export here)
const ZodValidation = z.object({
  email: z.string().email(),
});

// Post the data
export async function POST(request: NextRequest) {
  // Get the user details
  try {
    const { email } = await request.json();

    // Inputs validation using zod
    if (!ZodValidation.safeParse({ email }).success) {
      return NextResponse.json(
        { message: 'Incorrect inputs' },
        { status: 401 }
      );
    }

    // Check if user exists
    const user = await User.findOne({ email });

    if (!user) {
      return NextResponse.json({ message: 'No User Found' }, { status: 400 });
    }

    user.isVerified = true;
    await user.save();

    return NextResponse.json({ message: 'Success' }, { status: 200 });
  } catch (error: any) {
    console.error('Error:', error); // Log the error for debugging
    return NextResponse.json(
      { message: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
