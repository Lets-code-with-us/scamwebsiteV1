import { NextRequest, NextResponse } from 'next/server';
import { dbConnect } from '@/db/dbConnect';
import { Contact } from '@/models/contactModel';
import { z } from 'zod';

// connect db
dbConnect();

// Define a specific Zod schema for the contact form
const ContactSchema = z.object({
  email: z.string().email(),
  name: z.string().min(1, 'Name is required'),
  message: z.string().min(1, 'Message is required'),
});

export async function POST(request: NextRequest) {
  try {
    const res = await request.json();
    const { email, name, message } = res;

    // input validation using Zod
    const validationResult = ContactSchema.safeParse({ email, name, message });
    if (!validationResult.success) {
      return NextResponse.json(
        {
          message: 'Invalid inputs',
        },
        { status: 400 }
      );
    }

    // Create a new contact document
    const contact = new Contact({
      name,
      email,
      message,
    });

    // Save the contact message to the database
    await contact.save();

    return NextResponse.json({ message: 'Success' }, { status: 200 });
  } catch (error: any) {
    console.error('Server error: ', error);
    return NextResponse.json(
      { message: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
