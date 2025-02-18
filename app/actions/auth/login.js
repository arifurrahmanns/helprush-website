'use server'

import { signIn } from "@/auth"

export const login = async (credentials) => {
    try {
        const response = await signIn("credentials", {
            phone: "Test User",
            otp: "test@email.com",
            pin: "1234567890",
            redirect: false,
        })
        return response;
    } catch (error) {
        console
            .log(error)

    }
}