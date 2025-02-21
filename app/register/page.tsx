import React from 'react'
import '../../components/Help/Help.css'
import './Register.css'
import SignUp from './SignUp'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: "Welcome to Nike - Sign In",
    description: "Just Do It",
    icons: {
      icon: '/Untitled.png'
    }
  }

const page = () => {

    return (
        <div>
            <SignUp />
        </div>
    )
}

export default page
