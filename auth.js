import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
        Credentials({

            credentials: {
                phone: {},
                pin: {},
                otp: {},
            },
            authorize: async (credentials) => {
                let user = null

                user = {
                    id: 1,
                    name: "Test User2",
                    email: "test@email.com",
                    phone: "1234567890",
                }

                if (!user) {
                    // No user found, so this is their first attempt to login
                    // Optionally, this is also the place you could do a user registration
                    throw new Error("Invalid credentials.")
                }
                // return user object with their profile data
                return user
            },
        }),
    ],
    session: {
        strategy: "jwt",
        maxAge: 30 * 24 * 60 * 60, // 30 days
        
    },
    pages: {
        signIn: "/login",
    },
    trustHost: true,

    callbacks: {
        async session({ session, user, token }) {
            // Store only name and email in the session
            return {
                ...session,
                user: {
                    id: token.id,
                    name: token.name,
                    email: token.email,
                    phone: token.phone
                },
            };
        },
        async jwt({ token, user }) {
            if (user) {
                
                token.id = user.id;
                token.name = user.name;
                token.email = user.email;
                token.phone = user.phone;

            }
            return token;
        },
    },


})