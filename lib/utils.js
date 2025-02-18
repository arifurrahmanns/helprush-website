import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"
import parsePhoneNumber from 'libphonenumber-js'

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const foratPhone = (phone) => {
  try {
    const phoneNumber = parsePhoneNumber(phone)
    return phoneNumber.formatInternational()
  } catch (error) {
    return phone
  }
}

export const phoneCode  = ()=> "91"