'use server'
import axiosInstance from '@/lib/axiosinstance'
import { phoneCode } from '@/lib/utils'
import { z } from 'zod'



const sendOtp = async (prevState, formData) => {
    const schema = z.object({
        phone: z.string({
            message: 'Phone number is required'
        }).min(10, {
            message: 'Phone number must be 10 digits'
        }).max(10, {
            message: 'Phone number must be 10 digits'
        })
    })


    const validatedFields = schema.safeParse({
        phone: formData.get('phone'),
    })
    if (!validatedFields.success) {
        return {
            error: true,
            message: validatedFields.error.errors[0].message
        }
    }
    try {
        const response = await axiosInstance.post('/pin/send', {
            "contact_number": phoneCode() + formData.get('phone')
        })
        console.log(response.data)
        if (response.data?.pin) {
            return {
                success: true,
                message: 'OTP sent successfully',
                pin: response.data.pin
            }
        }
    } catch (error) {
        console.log(error.response)
    }

}

const verifyOtp = async (prevState, formData) => {

    const schema = z.object({

        code: z.string({
            message: 'OTP is required'
        }).min(6, {
            message: 'OTP must be 6 digits'
        }).max(6, {
            message: 'OTP must be 6 digits'
        }),
        pin: z.string({
            message: "Pin is required"
        }),
        phone: z.string({
            message: 'Phone number is required'
        }).min(10, {
            message: 'Phone number must be 10 digits'
        }).max(10, {
            message: 'Phone number must be 10 digits'
        })
    })


    const validatedFields = schema.safeParse({
        code: formData.get('otp'),
        pin: formData.get('pin'),
        phone: formData.get('phone')
    })
    if (!validatedFields.success) {
        return {
            error: true,
            message: validatedFields.error.errors
        }
    }
    try {
        const response = await axiosInstance.post('/pin/verify', {
            "contact_number": phoneCode() + formData.get('phone'),
            "pin": formData.get('pin'),
            "code": formData.get('otp')
        })
        if (response.data?.status.length > 0) {
            return {
                success: true,
                data: response.data,
                message: 'OTP verified successfully'
            }
        }
    } catch (error) {
        return {
            error: true,
            message: error.response.data.message
        }
    }
}

export { sendOtp, verifyOtp } 