import { NextRequest, NextResponse } from 'next/server';
import { User } from '@/models/userModel';
import { dbConnect } from '@/db/dbConnect';
import JWT, { JwtPayload } from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

dbConnect();

export async function POST(request: NextRequest) {
  try {
    const response = request.json();
    const { password, repassword } = await response;
    const token = (await request.cookies.get('token')?.value) || '';

    if (!token) {
      return NextResponse.json({ message: 'Login' }, { status: 404 });
    }

    const decrypt: JwtPayload = (await JWT.verify(
      token,
      process.env.SECRET_KEY!
    )) as JwtPayload;
    const userFind = await User.findById(decrypt.id);

    if (!userFind) {
      return NextResponse.json({ message: 'User Not Found' }, { status: 404 });
    }

    if (password !== repassword) {
      return NextResponse.json(
        { message: 'Check the Password' },
        { status: 404 }
      );
    }

    // Hashing the password using bcryptjs
    const hashPassword = await bcrypt.hash(password, 10); // 10 is the salt rounds

    const updatedUser = await User.findByIdAndUpdate(
      decrypt.id,
      { password: hashPassword },
      { new: true }
    );

    if (!updatedUser) {
      return NextResponse.json({ message: 'Server error' }, { status: 404 });
    }

    return NextResponse.json(
      { message: 'success', data: 'Password Updated' },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Error:', error);
    return NextResponse.json(
      { message: 'An error occurred.' },
      { status: 500 }
    );
  }
}
