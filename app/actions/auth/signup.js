'use server'
import axiosInstance from '@/lib/axiosinstance'
import { phoneCode } from '@/lib/utils'
import { z } from 'zod'


export const register = async (prevState, formData) => {
    const schema = z.object({
        phone: z.string({
            message: 'Phone number is required'
        }).min(10, {
            message: 'Phone number must be 10 digits'
        }).max(10, {
            message: 'Phone number must be 10 digits'
        }),
        f_name: z.string({
            message: 'First name is required'
        }),
        l_name: z.string({
            message: 'Last name is required'
        }),
        email: z.string({
            message: 'Email is required'
        }).email({
            message: 'Invalid email'
        }),
        //    type only customer and provider
        type: z.union([z.literal('customer'), z.literal('provider')])
    })


    const validatedFields = schema.safeParse({
        phone: formData.get('phone'),
        f_name: formData.get('f_name'),
        l_name: formData.get('l_name'),
        email: formData.get('email'),
        type: formData.get('type')
    })
    if (!validatedFields.success) {
        console.log(validatedFields.error)
        return {
            error: true,
            message: validatedFields.error.errors[0].message
        }
    }


    try {
        const response = await axiosInstance.post('/register', {
            "contact_number": phoneCode() + formData.get('phone'),
            "first_name": formData.get('f_name'),
            "last_name": formData.get('l_name'),
            "email": formData.get('email'),
            "type": formData.get('type')
        })
        console.log(response.data)
        if (response.data?.user) {
            return {
                success: true,
                message: 'User registered successfully',
                user: response.data.user,
                token: response.data.token
            }
        }
    } catch (error) {
        return {
            error: true,
            message: error.response.data.message
        }
    }








}