import { NextRequest, NextResponse, userAgent } from 'next/server';
import Jwt from 'jsonwebtoken';
import { dbConnect } from '@/db/dbConnect';
import { User } from '@/models/userModel';
import mongoose, { ObjectId } from 'mongoose';

dbConnect();

export async function GET(request: NextRequest) {
  try {
    const getCookie = request.cookies.get('token')?.value || '';

    if (!getCookie) {
      return NextResponse.json({ message: 'Login required' }, { status: 404 });
    }

    const decrypt = await Jwt.verify(getCookie, process.env.SECRET_KEY!);

    if (!decrypt) {
      return NextResponse.json({ message: 'server error' }, { status: 500 });
    }

    const userId = await new mongoose.Types.ObjectId(
      JSON.parse(decrypt as string)
    );

    if (!userId) {
      return NextResponse.json({ message: 'Invalid user ID' }, { status: 400 });
    }

    // Find the user in the database
    const findUser = await User.findById(userId);

    if (!findUser) {
      return NextResponse.json({ message: 'User not found' }, { status: 404 });
    }

    const getuser = await findUser.username;

    return NextResponse.json(
      { message: 'sucess', data: getuser },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
