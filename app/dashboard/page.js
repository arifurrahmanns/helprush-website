// "use client"
// import React, { useEffect } from 'react'
// import { useSession } from "next-auth/react"
import LogoutBtn from "@/components/ui/logoutBtn"
import { auth, signOut } from "../../auth"

async function page() {
  // const { data: session } = useSession()
  const session = await auth()


  return (
    <div className="py-10 lg:py-20">
      <div className="container">
        {session ? <h1>Welcome {session.user.name}</h1> : <h1>Not signed in</h1>}

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

        <LogoutBtn />
      </div>
    </div>
  )
}

export default page