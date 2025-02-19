'use server'

import { signOut } from "@/auth";


export const logOut = async (req, res) => {
    try {
        const response = await signOut({
            redirect: false
        })
        return response;
    } catch (error) {
        console
            .log(error)

    }

}