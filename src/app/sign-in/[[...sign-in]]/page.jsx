import { SignIn } from '@clerk/nextjs'
import React from 'react'
import Navbar from '@/app/components/Navbar'

export default function page() {
  return (
    <div>
      <div className="w-full">
        <Navbar />
        <div className=" flex items-center justify-center pt-10">
        <SignIn />
        </div>
      </div>
    </div>
  )
}
