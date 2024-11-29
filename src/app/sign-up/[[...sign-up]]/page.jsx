import Navbar from '@/app/components/Navbar'
import { SignUp } from '@clerk/nextjs'
import React from 'react'

export default function page() {
  return (
    <div>
      <div className="w-full">
        <Navbar />
        <div className=" flex items-center justify-center pt-10">
        <SignUp />
        </div>
      </div>
    </div>
  )
}
