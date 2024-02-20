import { dbConnect } from "@/db/dbConnect";
import {Auth} from "@/models/oAuthModel";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";


dbConnect()
export const option = {
    secret:process.env.NEXT_SECERT_KEY,
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
    
        async session({session, token}: {session: any, token: any}) {
            if(session?.user){
                const createUser = await new Auth({
                    username:session?.username,
                    email:session?.email,
                    avator:session?.image
                })
                if(!createUser){
                    return new Error("User Not added")
                }
                await createUser.save()

            }
            return session

        }
    }
}