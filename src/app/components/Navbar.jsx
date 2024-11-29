import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs'
import React from 'react'

export default function Navbar() {
  return (
    <div className='bg-teal-950 w-full py-3 flex flex-row'>
      <SignedOut>
        <SignInButton className="text-black bg-white px-4 py-1 rounded-sm ms-3 me-0" />
        <SignUpButton className="text-black bg-white px-4 py-1 rounded-sm ms-1 me-auto" />
      </SignedOut>
      <SignedIn>
        <div className="px-1 rounded-md border-0 ms-3 me-auto flex">
          <UserButton  appearance={{
                                    elements: {
                                      userButtonBox: {
                                        margin:"0",
                                        flexDirection :"row-reverse",
                                        borderRadius:"3px",
                                        color:"#FFF",
                                      }
                                    }
                                  }} showName  />
        </div>
      </SignedIn>
    </div>
  )
}
