'use client'
import React, { Dispatch, SetStateAction, useState } from 'react'
import Collections from './Collections'
import SearchBar from './SearchBar'
import HelpPopUp from './HelpPopUp'
import Video from '../Video'
import Link from 'next/link'

const MainHeader = ({ show, isHovered, containerHover, setContainerHover, setStart, setBar, start }: { show: boolean, isHovered: boolean, setHovered: Dispatch<SetStateAction<boolean>>, setShow: Dispatch<SetStateAction<boolean>>, containerHover: boolean, setContainerHover: Dispatch<SetStateAction<boolean>>, setStart: Dispatch<SetStateAction<boolean>>, start: boolean, showBar: boolean, setBar: Dispatch<SetStateAction<boolean>> }) => {

  // for detecting hover on every heading in main navbar
  const [newHover, setNewHover] = useState(false)
  const [menHover, setMenHover] = useState(false)
  const [womenHover, setWomenHover] = useState(false)
  const [kidsHover, setKidsHover] = useState(false)
  const [jordanHover, setJordanHover] = useState(false)
  const [saleHover, setSaleHover] = useState(false)


  const hoverOn = () => setContainerHover(true)
  const hoverOut = () => setContainerHover(false)


  const helps = ["Order Status", "Shipping & Delivery", "Returns", "Order Cancellation", "Size Charts", "Contact Us", "Membership", "Promotions & Discounts", "Product Advice", "Send Us Feedback"]
  return (

    <>
      <div className='items-center hidden mdx:flex relative z-50 bg-white justify-between h-[3.8rem] px-12'>

        {/* logo */}

        <div className='relative z-30'>
          <Link href="/" ><svg aria-hidden="true" className="swoosh-svg w-[3.7rem] xl:relative xl:z-30 h-[3.7rem] cursor-pointer" style={{ transform: 'scale(1.33)' }} focusable="false" width="24px" height="24px" viewBox="0 0 24 24" role="img" fill="none"><path fill="currentColor" fillRule="evenodd" d="M21 8.719L7.836 14.303C6.74 14.768 5.818 15 5.075 15c-.836 0-1.445-.295-1.819-.884-.485-.76-.273-1.982.559-3.272.494-.754 1.122-1.446 1.734-2.108-.144.234-1.415 2.349-.025 3.345.275.2.666.298 1.147.298.386 0 .829-.063 1.316-.19L21 8.719z" clipRule="evenodd"></path></svg></Link>
        </div>

        {/* Collections */}

        <div className='xl:absolute xl:z-20 xl:w-[59.3vw] flex xl:justify-end'>
          <Collections setSaleHover={setSaleHover} setJordanHover={setJordanHover} setWomenHover={setWomenHover} setMenHover={setMenHover} setNewHover={setNewHover} setKidsHover={setKidsHover} />
        </div>

        {/* Search */}

        <div>
          <div className={`bg-white absolute h-80 w-[14.6rem] -mt-3 ${isHovered || containerHover ? '-translate-y-0' : '-translate-y-3'} z-50 -ml-56 py-3 px-6 xl:-ml-20 rounded-b-lg`} style={{ transition: 'all 0.2s ease-in-out', display: show || containerHover ? 'block' : 'none', opacity: isHovered || containerHover ? '1' : !isHovered && !containerHover ? '0' : '1' }} onMouseLeave={hoverOut} onMouseEnter={hoverOn}>

            {/* Container info */}
            <div className='flex flex-col gap-2'>

              <div className='text-black font-semibold'>
                <h1>Help</h1>
              </div>

              {/* Options */}

              <div className="flex flex-col gap-0.5">
                {helps.map((e, index) => {
                  return (
                    <div key={index}>
                      <button className='text-[#686767] cursor-pointer text-xs font-semibold hover:text-black'>{e}</button>
                    </div>
                  )
                })}
              </div>


            </div>
          </div>
          <div className='relative z-10'>
            <SearchBar setBar={setBar} setStart={setStart} />
          </div>
        </div>
      </div>

      {/* // Video */}

      <div className='hidden md:block'>
        <Video start={start} menHover={menHover} setJordanHover={setJordanHover} jordanHover={jordanHover} setMenHover={setMenHover} womenHover={womenHover} setWomenHover={setWomenHover} newHover={newHover} setNewHover={setNewHover} kidsHover={kidsHover} setKidsHover={setKidsHover} setSaleHover={setSaleHover} saleHover={saleHover} />
      </div>

    </>
  )
}

export default MainHeader
