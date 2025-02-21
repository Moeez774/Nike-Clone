'use client'
import React, { Dispatch, SetStateAction, useEffect } from 'react'

interface Hovers {
  setNewHover: Dispatch<SetStateAction<boolean>>,
  setMenHover: Dispatch<SetStateAction<boolean>>,
  setWomenHover: Dispatch<SetStateAction<boolean>>,
  setKidsHover: Dispatch<SetStateAction<boolean>>,
  setJordanHover: Dispatch<SetStateAction<boolean>>,
  setSaleHover: Dispatch<SetStateAction<boolean>>,
}

const Collections: React.FC<Hovers> = ({ setNewHover, setMenHover, setWomenHover, setKidsHover, setJordanHover, setSaleHover }) => {

  return (
    <>
      <div className='text-base h-[2rem] ml-10 xl:ml-0 items-center flex font-semibold'>

        <a className='py-[1.2rem] px-2.5' onMouseEnter={() => setNewHover(true)} onMouseLeave={() => setNewHover(false)}><h1 className='navBtns'>New</h1></a>

        <a className='py-[1.2rem] px-2.5' onMouseEnter={() => setMenHover(true)} onMouseLeave={() => setMenHover(false)}><h1 className='navBtns'>Men</h1></a>

        <a className='py-[1.2rem] px-2.5' onMouseEnter={() => setWomenHover(true)} onMouseLeave={() => setWomenHover(false)}><h1 className='navBtns'>Women</h1></a>       

        <a className='py-[1.2rem] px-2.5' onMouseEnter={() => setKidsHover(true)} onMouseLeave={() => setKidsHover(false)}><h1 className='navBtns'>Kids</h1></a>

        <a className='py-[1.2rem] px-2.5' onMouseEnter={() => setJordanHover(true)} onMouseLeave={() => setJordanHover(false)}><h1 className='navBtns'>Jordan</h1></a> 

        <a className='py-[1.2rem] px-2.5' onMouseEnter={() => setSaleHover(true)} onMouseLeave={() => setSaleHover(false)}><h1 className='navBtns'>Sale</h1></a></div>

    </>
  )
}

export default Collections
