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
                   ...credentials
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
         
            return {
                ...session,
                user: {
                    first_name: token.first_name,
                    last_name: token.last_name,
                    email: token.email,
                    contact_number: token.contact_number,
                    type: token.type,
                    user_id: token.user_id,
                    token:token.token
                },
            };
        },
        async jwt({ token, user }) {
            if (user) {
                
                token.first_name = user.first_name;
                token.last_name = user.last_name;
                token.email = user.email;
                token.contact_number = user.contact_number;
                token.type = user.type;
                token.user_id = user.user_id;
                token.token = user.token


            }
            return token;
        },
    },


})