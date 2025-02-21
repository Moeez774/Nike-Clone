import Structure from '@/components/ws/Structure'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: "New Releases. Nike.com",
  description: "Just Do It",
  icons: {
    icon: '../../../public/favicon.ico'
  }
}

const page = () => {

  return (
    <div>
      <Structure />
    </div>
  )
}

export default page
