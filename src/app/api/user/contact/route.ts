import { NextRequest,NextResponse } from "next/server";
import { dbConnect } from "@/db/dbConnect";
import {Contact} from "@/models/contactModel";
import { ZodValidation } from "../signin/route";

// connect db
dbConnect();


export async function POST(request:NextRequest){

    const res =  await request.json();
    const {email,name,message} = await res;
    
    // input validation using zod
    if (!ZodValidation.safeParse({ email, name, message }).success){
        return NextResponse.json(
          {
            message: "Incorrects inputs",
          },
          { status: 401 }
        );
    }
      if (!(email.length > 0 && name.length > 0 && message.length > 0)) {
        return NextResponse.json(
          {
            message: "every field are required",
          },
          { status: 400 }
        );
      }

    const contact = await  new Contact({
        name,
        email,
        message
    })
    if(!contact){
        return NextResponse.json({"message":"server error"},{status:500})
    }
await contact.save()
    return NextResponse.json({"message":"success"},{status:200})
}
