'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { Dispatch, SetStateAction } from 'react'

interface Collection {
  helps: {
    coll: string,
    link: string,
  },
  setHovers: Dispatch<SetStateAction<boolean>>,
}

const HelpPopUp: React.FC<Collection> = ({ helps, setHovers }) => {
  const router = useRouter()

  const click = () => {
    router.push(`${helps?.link}`)
    setHovers(false)
  }

  return (
    <div>
      <button className='text-[#686767] cursor-pointer text-xs font-semibold hover:text-black' onClick={click}>{helps?.coll}</button>
    </div>
  )
}

export default HelpPopUp
