import { NextRequest, NextResponse } from 'next/server';
import { Bio } from '@/models/userBio';
import { dbConnect } from '@/db/dbConnect';
import JWT, { JwtPayload } from 'jsonwebtoken';
import mongoose from 'mongoose';

// connect db
dbConnect();

export async function POST(request: NextRequest, response: NextResponse) {
  try {
    const res = await request.json();
    const { bio, instagramLink, LinkedlnLink, githubLink } = await res;

    // find the user
    const token = (await request.cookies.get('token')?.value) || '';

    if (!token) {
      return NextResponse.json({ message: 'Please Login' }, { status: 400 });
    }
    const decrypt: JwtPayload = (await JWT.verify(
      token,
      process.env.SECERT_KEY!
    )) as JwtPayload;

    const createBio = new Bio({
      user: new mongoose.Types.ObjectId(decrypt.id),
      bio,
      instagramLink,
      LinkedlnLink,
      githubLink,
    });

    const savedBio = await createBio.save();
    // const bioData= {
    //   bio,
    //   instagramLink,
    //   LinkedlnLink,
    //   githubLink

    // }

    // const seetCookie = await JWT.sign(bioData,process.env.SECERT_KEY!, {
    //   expiresIn: "1h",
    // })

    // response.cookies.set('bioToken',seetCookie,{
    //   httpOnly:true
    // })

    if (!savedBio) {
      return NextResponse.json({ message: "can't bio" }, { status: 400 });
    }
    return NextResponse.json({ message: 'Bio Updated' }, { status: 200 });
  } catch (error: any) {
    console.log('error: ', error);
  }
}
