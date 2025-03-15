'use server'

import { auth } from "@/auth"
import axiosInstance from "@/lib/axiosinstance"

export const getProfile = async (id) => {
      const session = await auth()
    try {
        axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${session?.user?.token}`
        const res = await axiosInstance.get(`/customers/${id}`)

        

        return {
            data: res.data.data,
            success: true
        }
    } catch (error) {
        return {
            error: error.response.data
        }
    }
}