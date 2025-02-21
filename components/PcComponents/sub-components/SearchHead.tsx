import React, { Dispatch, SetStateAction, useEffect, useRef } from 'react'
import Button from './Button'

const SearchHead = ({ setStart, start, showBar, setBar } : { setStart: Dispatch<SetStateAction<boolean>>, start: boolean, showBar: boolean, setBar: Dispatch<SetStateAction<boolean>> }) => {

    const buttonDetails = ['jordan', 'air max', 'dunks', 'basketball shoes', 'jordan 4', 'jordan 1', 'killshot', 'cleats soccer']

  return (
    <div className={`h-screen xl:h-80 bg-white w-screen ${start? 'flex': 'hidden'} flex-col gap-9`}>

        {/* First box */}

        <div className='flex justify-between px-4 smxx:px-6 lg:px-[3.8rem] gap-4 lg:gap-6 py-1.5'>
            
            {/* logo */}

            <div className={`${showBar? 'translate-x-0 opacity-1': 'opacity-0 translate-x-10'} hidden mdx:block`} style={{ transition: 'all 0.3s ease-in-out 0.1s' }}>
            <svg aria-hidden="true" className={`swoosh-svg w-10 xl:relative xl:z-30 h-10`} style={{ transform: 'scale(2.9)', transition: 'all 0.3s ease-in-out' }} focusable="false" width="24px" height="24px" viewBox="0 0 24 24" role="img" fill="none"><path fill="currentColor" fillRule="evenodd" d="M21 8.719L7.836 14.303C6.74 14.768 5.818 15 5.075 15c-.836 0-1.445-.295-1.819-.884-.485-.76-.273-1.982.559-3.272.494-.754 1.122-1.446 1.734-2.108-.144.234-1.415 2.349-.025 3.345.275.2.666.298 1.147.298.386 0 .829-.063 1.316-.19L21 8.719z" clipRule="evenodd"></path></svg>
            </div>

            {/* search bar */}

            <div className={`flex bg-[#f3f2f2] my-1.5 rounded-full ${showBar? 'ml-0 translate-x-0 translate-y-0': 'ml-40 translate-y-10 translate-x-96'} items-center hover:bg-gray-200`} style={{ transition: 'all 0.2s ease-in-out' }}>

                <div className='flex rounded-full p-[0.35rem] bg-[#f3f2f2] cursor-pointer hover:bg-gray-300'>
                    <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" strokeWidth="1.5" d="M13.962 16.296a6.716 6.716 0 01-3.462.954 6.728 6.728 0 01-4.773-1.977A6.728 6.728 0 013.75 10.5c0-1.864.755-3.551 1.977-4.773A6.728 6.728 0 0110.5 3.75c1.864 0 3.551.755 4.773 1.977A6.728 6.728 0 0117.25 10.5a6.726 6.726 0 01-.921 3.407c-.517.882-.434 1.988.289 2.711l3.853 3.853"></path></svg>
                </div>

                <div className='block'>
                    <input className={`input bg-transparent pl-1 outline-none ${showBar? 'w-[60vw] smx:w-[68vw] lg:w-[56.5vw]': 'w-[8.3rem]'} font-semibold rounded-full`} style={{ transition: 'all 0.2s ease-in-out' }} placeholder='Search' type="text" />
                </div>
            </div>

            {/* cancel button */}

            <div className='my-3'>
                <button className='text-black hover:text-[gray] font-semibold' style={{ transition: 'all 0.3s ease-in-out 0.1s', transformOrigin: 'right', transform: showBar? 'scale(1)': 'scale(0)' }} onClick={() => {
                    setStart(false)
                    setBar(false)
                    document.body.style.overflowY = 'auto'
                } }>Cancel</button>
            </div>
        </div>

        {/* Second Box */}

        <div className={`w-screen lg:w-2/3 px-10 flex flex-col ${showBar? 'translate-x-0 opacity-1': 'translate-x-10 opacity-0'} gap-5 mx-auto`} style={{ transition: 'all 0.5s ease-in-out 0.1s' }}>

            {/* Heading */}

            <div>
                <h1 className='text-[gray]' style={{ letterSpacing: '-0.5px', fontSize: '15px', fontWeight: '500' }}>Popular Search Terms</h1>
            </div>

            {/* Searches */}

            <div className='flex flex-wrap gap-4'>
                {buttonDetails.map((e, index) => {
                    return <Button key={index} tColor='#0c0c0c' text={e} color='#f3f2f2' hoverColor='#e5e7eb' />
                })}
            </div>

        </div>
    </div>
  )
}

export default SearchHead
