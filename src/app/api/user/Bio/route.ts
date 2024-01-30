import { NextRequest, NextResponse } from "next/server";
import { Bio } from "@/models/userBio";
import { dbConnect } from "@/db/dbConnect";
// import {User} from "@/models/userModel"
import JWT, { JwtPayload } from "jsonwebtoken"

// connect db
dbConnect();

export async function POST(request: NextRequest) {
  try {
    const res = await request.json();
    const { bio, instagramLink, LinkedlnLink, githubLink } = await res;


    // find the user
    const token = await request.cookies.get("token")?.value || ""

    if(!token){
            return NextResponse.json({"message":"Please Login"},{status:400})
    }
    const decrypt: JwtPayload = await JWT.verify(token, process.env.SECERT_KEY!) as JwtPayload;

    const createBio = new Bio({
        user: decrypt.id,
        bio,
        instagramLink,
        LinkedlnLink,
        githubLink,
    });

    const savedBio = await createBio.save();
    if (!savedBio) {
      return NextResponse.json({ message: "can't bio" }, { status: 400 });
    }
    return NextResponse.json({ message: "Bio Updated" }, { status: 200 });
  } catch (error: any) {
    console.log("error: ", error);
  }
}
