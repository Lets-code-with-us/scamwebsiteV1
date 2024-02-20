import { dbConnect } from "@/db/dbConnect";
import {Auth} from "@/models/oAuthModel";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";


// dbConnect()
export const option = {
    secret:process.env.NEXT_SECERT_KEY as string,
    providers: [
        GithubProvider({        
            clientId: process.env.GITHUB_ACCESS_KEY ?? '',
            clientSecret: process.env.GITHUB_SCERT_KEY ?? ''
        }),
        GoogleProvider({
            clientId:'',
            clientSecret:''

        })

    ],
    callbacks:{
    
        async session({session}: {session: any}) {
            if(session?.user){
                // const createUser = await new Auth({
                //     username:session?.user?.name,
                //     email:session?.user?.email,
                //     avator:session?.user?.image
                // })
                // if(!createUser){
                //     return new Error("User Not added")
                // }
                // await createUser.save()

            }
            return session

        }
    }
}