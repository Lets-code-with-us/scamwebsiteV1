import NextAuth from "next-auth/next";
import { option } from "./option" 

const handler = NextAuth(option);


export { handler as GET, handler as POST }
