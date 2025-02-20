'use server'

import { signIn } from "@/auth"

export const login = async (credentials) => {
    console.log(credentials)
    try {
        const response = await signIn("credentials", {
            first_name: credentials.user.first_name,
            last_name: credentials.user.last_name,
            email: credentials.user.email,
            contact_number: credentials.user.contact_number,
            type: credentials.user.type,
            user_id: credentials.user.user_id,
            token: credentials.token,
            redirect: false,
        })
        
        return response;
    } catch (error) {
        console
            .log(error)

    }
}