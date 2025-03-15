"use client"
// import React, { useEffect } from 'react'
import { useSession } from "next-auth/react"
import LogoutBtn from "@/components/ui/logoutBtn"
import { auth, signOut } from "../../auth"
import { useEffect, useState } from "react"
import { getProfile } from "@/app/actions/profile/profile"
import { toast } from "sonner"
import { Icon } from "@iconify/react"

function page() {
  const { data: session } = useSession()
  const [profile, setProfile] = useState(null)
  useEffect(() => {
    (async () => {
      if (session?.user) {
        const res = await getProfile(session.user.user_id)
        if (res.success) {
          setProfile(res.data)
        } else {
          toast.error('Something went wrong')
        }
      }
    })()
  }, [session])
  return (
    <div className="py-10 lg:py-20">
      <div className="container">



        {profile && <div className="bg-white max-w-2xl mx-auto border rounded-xl p-5 serviceCrd">
          <div className="flex gap-5 items-center">
            <div className="w-14 h-14">
              <img src={`${profile.image ? process.env.NEXT_PUBLIC_API_URL + profile.image : '/img/user.png'} `} alt="" />
            </div>
            <p className="text-xl font-bold"> {profile.first_name} {profile.last_name}
            </p>

          </div>

          <div className="divide-y mt-10 ">

            <div className="flex  items-center gap-4 py-4">
              <Icon icon="iconoir:user" width="30" height="30" />
              <div>
                <p className="text-lg font-medium">Name</p>
                <p className="text-neutral-600">{profile.first_name} {profile.last_name}</p>
              </div>
              <button className="ml-auto">
                <Icon icon="iconoir:nav-arrow-right" width="24" height="24" />
              </button>
            </div>
            <div className="flex  items-center gap-4 py-4">
              <Icon icon="mage:email" width="30" height="30" />
              <div>
                <p className="text-lg font-medium">Email</p>
                <p className="text-neutral-600">{profile.email}</p>
              </div>
              <button className="ml-auto">
                <Icon icon="iconoir:nav-arrow-right" width="24" height="24" />
              </button>
            </div>
            <div className="flex  items-center gap-4 py-4">
              <Icon icon="mage:phone" width="30" height="30" />
              <div>
                <p className="text-lg font-medium">Phone</p>
                <p className="text-neutral-600">{profile.contact_number}</p>
              </div>
              <button className="ml-auto">
                <Icon icon="iconoir:nav-arrow-right" width="24" height="24" />
              </button>
            </div>

          </div>
        </div>}
        {/* <form
  action={async () => {
    "use server"
    await signOut({
      redirect: false
    })

    "use client"
    
  
  }}
>
  <button type="submit">Sign Out</button>
</form> */}
        {profile && <div className="max-w-2xl mx-auto mt-5">    <LogoutBtn /></div>}

      </div>
    </div>
  )
}

export default page