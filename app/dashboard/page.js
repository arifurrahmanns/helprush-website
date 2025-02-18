// "use client"
// import React, { useEffect } from 'react'
// import { useSession } from "next-auth/react"
import { auth, signOut } from "../../auth"

async function page() {
  // const { data: session } = useSession()
  const session = await auth()


  return (
    <div>
      {session ? <h1>Welcome {session.user.name}</h1> : <h1>Not signed in</h1>}

      <form
        action={async () => {
          "use server"
          await signOut()
        }}
      >
        <button type="submit">Sign Out</button>
      </form>
    </div>
  )
}

export default page