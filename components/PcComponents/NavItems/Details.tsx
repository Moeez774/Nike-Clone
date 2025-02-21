'use client'
import React, { Dispatch, SetStateAction } from 'react'
import HelpPopUp from '../sub-components/HelpPopUp'

interface Info {
    details: any[],
    heading: string,
    setHovers: Dispatch<SetStateAction<boolean>>,
}

const Details: React.FC<Info> = ({ details, heading, setHovers }) => {
  return (
    <>
    { details && <div className='flex flex-col gap-2'>
          
          {/* Heading */}

          <div className='pt-6'>
            <h1 className='text-black text-sm font-semibold'>{heading}</h1>
          </div>

          {/* Options */}

          <div className='flex flex-col gap-0.5'>
            {details?.map((e, index) => {
              return <HelpPopUp helps={e} setHovers={setHovers} key={index} />
            })}
          </div>
        </div> }
        </>
  )
}

export default Details
