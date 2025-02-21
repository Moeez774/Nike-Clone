'use client'
import React, { useState } from 'react'
import MobileHeader from '../Mobilecomponents/MobileHeader'
import Header from './Header'
import { usePathname } from 'next/navigation'

const AllHeaders = () => {
  const [start, setStart] = useState(false)
  const [showBar, setBar] = useState(false)

  const pathname = usePathname()

  return (
    <>
      {pathname != '/register' && <div className={`${start ? 'flex flex-col-reverse' : 'flex flex-col'}`}>
        <div>
          <MobileHeader start={start} setStart={setStart} showBar={showBar} setBar={setBar} />
        </div>

        <div>
          <Header start={start} setStart={setStart} showBar={showBar} setBar={setBar} />
        </div>
      </div>}
    </>
  )
}

export default AllHeaders
