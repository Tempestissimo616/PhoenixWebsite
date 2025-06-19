import NextAuth, { NextAuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import prisma from "@/prisma/client";
import GitHubProvider from "next-auth/providers/github";

export const authOptions : NextAuthOptions = {
    adapter: PrismaAdapter(prisma),
    providers:[
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
            client: {
                clock_tolerance: 600, // Increase from default 10s
            },
            httpOptions: {
                timeout: 100000, // Increase to 10 seconds
            },
        }),
        GitHubProvider({
            clientId: process.env.GITHUB_CLIENT_ID as string,
            clientSecret: process.env.GITHUB_CLIENT_SECRET as string
        })
            ],
    debug: true,
    session  : {
        strategy : "jwt"
    }
}