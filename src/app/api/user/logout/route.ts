import { NextRequest, NextResponse } from 'next/server';

export async function GET(_request: NextRequest) {
  try {
    const response = NextResponse.json({
      message: 'logout Sucessful',
      success: true,
    });
    response.cookies.set('token', '', {
      httpOnly: true,
      expires: new Date(0),
    });
    return response;
  } catch (error: any) {
    return NextResponse.json({ message: error }, { status: 404 });
  }
}
