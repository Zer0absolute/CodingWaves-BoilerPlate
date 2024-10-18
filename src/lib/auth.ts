import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import prisma from "./prisma";


export const { handlers, auth, signIn, signOut } = NextAuth({
  theme: {
    logo: "/images/logo.svg",
  },
  adapter: PrismaAdapter(prisma),
  providers: [Google]
});
