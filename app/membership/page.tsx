import Offers from '@/components/Jordan/Offers'
import Benefits from '@/components/Membership/Benefits'
import MemberBonus from '@/components/Membership/MemberBonus'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: "Nike Membership. Nike.com",
    description: "Just Do It",
    icons: {
      icon: '/favicon.ico'
    }
  }

const page = () => {
  return (
    <div className='relative z-30s'>
      <Offers />

      {/* //Head */}

      <div className='h-36 sm:h-28 flex flex-col gap-4 mdx:gap-0 pt-6 sm:pt-0 sm:mt-0 sm:justify-center mdx:flex-row mdx:justify-between mx-6 mdx:mx-11 lgx:mx-0 lgx:justify-start mdx:items-center '>

        <div className='relateive lgx:absolute'>
            <h1 className='text-2xl font-medium lgx:mx-12'>Nike Membership</h1>
        </div>

        <div className='flex gap-8 font-medium lgx:justify-center lgx:mx-auto'>
            <h1 className='hover:text-[gray] cursor-pointer'>Sign Up</h1>
            <h1 className='hover:text-[gray] cursor-pointer hidden sm:block'>Member Product</h1>
            <h1 className='hover:text-[gray] cursor-pointer hidden sm:block'>Explore the Nike App</h1>
        </div>

      </div>

      {/* Video */}

      <div>
        <video className='hidden sm:block' autoPlay loop muted src="/Videos/Nike Membership. Nike.com — Mozilla Firefox - 9 February 2025.mp4"></video>
        <video className='block sm:hidden' autoPlay loop muted src="/Videos/Untitled design-1.mp4"></video>
      </div>

      {/* Beneifts */}

      <div className='mt-20 flex flex-col gap-10 mdx:gap-20 mx-12'>

        <div>
            <h1 className='text-2xl'>Member Benefits</h1>
        </div>
        <Benefits />
      </div>

      <div className='mt-40 mx-12'>
        <MemberBonus />
      </div>

      <div className='mt-20 sm:mt-0'>
        <img src="/Images/nike-membership-nike.webp" alt="" />
      </div>
    </div>
  )
}

export default page
