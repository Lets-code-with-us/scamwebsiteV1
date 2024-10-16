import { NextRequest, NextResponse } from 'next/server';
import { Bio } from '@/models/userBio';
import JWT, { JwtPayload } from 'jsonwebtoken';
import { dbConnect } from '@/db/dbConnect';

dbConnect();
export async function GET(request: NextRequest) {
  try {
    const getCookie = request.cookies.get('token')?.value || '';
    if (!getCookie) {
      return NextResponse.json({
        message: 'Login Please',
      });
    }

    const decrypt: JwtPayload = (await JWT.verify(
      getCookie,
      process.env.SECERT_KEY!
    )) as JwtPayload;

    if (!decrypt) {
      return NextResponse.json({ message: 'Server Error' }, { status: 404 });
    }

    const userId = await decrypt.id;
    const findBio = await Bio.find({ user: userId });

    if (!findBio) {
      return NextResponse.json(
        {
          message: 'Add bio ',
        },
        {
          status: 404,
        }
      );
    }

    return NextResponse.json(
      {
        message: 'success',
        data: findBio,
      },
      {
        status: 200,
      }
    );
  } catch (error: any) {
    return NextResponse.json({ message: error }, { status: 404 });
  }
}
