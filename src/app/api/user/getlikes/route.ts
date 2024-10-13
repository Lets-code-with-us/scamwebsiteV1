import { NextRequest, NextResponse } from 'next/server';
import { dbConnect } from '@/db/dbConnect';
import { Like } from '@/models/likeModel';

dbConnect();
export async function POST(request: NextRequest) {
  try {
    const response = await request.json();
    const { id } = await response;
    const getLike = await Like.find({ BlogLike: id });
    if (!getLike) {
      return NextResponse.json({ message: 'server error' }, { status: 404 });
    }
    // console.log([...getLike,getLike])
    return NextResponse.json(
      { message: 'success', data: getLike },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json({ message: 'server error' }, { status: 404 });
  }
}
