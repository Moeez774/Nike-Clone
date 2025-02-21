'use client'
import React, { Dispatch, SetStateAction, useState } from 'react'
import './Header.css'
import Button from './sub-components/Button'
import NavItems from './sub-components/NavItems'
import { usePathname } from 'next/navigation'

interface Hovers {
  newHover: boolean,
  setNewHover: Dispatch<SetStateAction<boolean>>,
  menHover: boolean,
  setMenHover: Dispatch<SetStateAction<boolean>>,
  womenHover: boolean,
  setWomenHover: Dispatch<SetStateAction<boolean>>,
  kidsHover: boolean,
  setKidsHover: Dispatch<SetStateAction<boolean>>,
  jordanHover: boolean,
  setJordanHover: Dispatch<SetStateAction<boolean>>,
  saleHover: boolean,
  setSaleHover: Dispatch<SetStateAction<boolean>>,
  start: boolean,
}

const Video: React.FC<Hovers> = ({ newHover, setNewHover, menHover, setMenHover, womenHover, setWomenHover, kidsHover, setKidsHover, jordanHover, setJordanHover, saleHover, setSaleHover, start }) => {

  const pathname = usePathname()

  return (
    <div className='flex flex-col gap-8'>
     { pathname==='/' && <div className='video-container overflow-hidden'>
        <div className='sampleBlock'></div>
        <video className='relative z-20' autoPlay loop disablePictureInPicture muted src="/Videos/Nike. Just Do It. Nike.com — Mozilla Firefox - 30 January 2025.mp4"></video>
      </div> }

      {/* Nav items */}
      
        <NavItems start={start} saleHover={saleHover} setSaleHover={setSaleHover} jordanHover={jordanHover} setJordanHover={setJordanHover} newHover={newHover} menHover={menHover} womenHover={womenHover} setWomenHover={setWomenHover} setMenHover={setMenHover} setNewHover={setNewHover} kidsHover={kidsHover} setKidsHover={setKidsHover} />

     { pathname==='/' && <div className='flex flex-col justify-center mb-12 gap-6 text-black'>
        <div className='flex flex-col gap-2'>

          <div>
            <h1 className='text-center font-semibold'>First Look at Nike 24.7 Collection</h1>
          </div>

          <div className='flex flex-col gap-1 text-5xl mdx:text-7xl'>
            <h1 className='boldHeading text-center'>TAILORED FOR</h1>
            <h1 className='boldHeading text-center'>ALL-DAY COMFORT</h1>
          </div>

          <div>
            <h1 className='text-center font-medium mx-3'>A new collection featuring polished looks and a luxurious feel.</h1>
          </div>

        </div>

        {/* Shop Button */}

        <div className='flex justify-center text-white'>
          <Button text="Shop" color="#0c0c0c" tColor='#ffffff' hoverColor='gray' />
        </div>
      </div> }
    </div> 
  )
}

export default Video
