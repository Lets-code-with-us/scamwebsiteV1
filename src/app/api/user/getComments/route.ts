import { NextRequest, NextResponse } from 'next/server';
import { dbConnect } from '@/db/dbConnect';
import { Comment } from '@/models/commentModel';

dbConnect();
export async function POST(request: NextRequest) {
  try {
    const { id } = await request.json(); // Removed unnecessary await
    const data = await Comment.find({ blogId: id });
    if (data.length === 0) {
      // Check data length
      return NextResponse.json(
        { message: 'No comments found' },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: 'success', data: data },
      { status: 200 }
    );
  } catch (error: any) {
    console.log(error);
    return NextResponse.json({ message: 'Server error' }, { status: 500 });
  }
}
