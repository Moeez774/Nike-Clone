import React, { Dispatch, SetStateAction } from 'react'
import Details from './Details'

interface Hovers {
  jordanHover: boolean,
  setJordanHover: Dispatch<SetStateAction<boolean>>,
  data: {
    newDetails: any[],
    menDetails: any[],
    womenDetails: any[],
    kidsDetails: any[],
    accDetails: any[],
    collectionDetails: any[],
  }
}


const Jordan: React.FC<Hovers> = ({ jordanHover, setJordanHover, data }) => {

  return (
    <div className={`bg-white flex py-2 justify-center ${jordanHover ? 'h-[21rem]' : 'h-0'} w-screen`} style={{ transition: 'all 0.1s linear' }} onMouseEnter={() => setJordanHover(true)} onMouseLeave={() => setJordanHover(false)}>

      <div className={`flex gap-28 ${jordanHover ? 'opacity-1 translate-y-0' : 'opacity-0 -translate-y-3'}`} style={{ transition: jordanHover ? 'all 0.2s ease-in-out 0.2s' : 'all 0s linear' }}>

        {/* First colunm */}

        <div className='flex flex-col gap-4'>

        <div>
          <Details details={data?.newDetails} setHovers={setJordanHover} heading='New' />
        </div>

        <div>
            <Details details={data?.collectionDetails} setHovers={setJordanHover} heading='Collection' />
        </div>

        </div>

        {/* Second Colunm */}

        <div>
          <Details details={data?.menDetails} setHovers={setJordanHover} heading='Men' />
        </div>

        {/* Third Colunm */}

        <div>
          <Details details={data?.womenDetails} setHovers={setJordanHover} heading='Women' />
        </div>

        {/* Fourth Colunm */}


          <div>
            <Details details={data?.kidsDetails} setHovers={setJordanHover} heading='Kids' />
          </div>

        {/* Fifth Colunm */}

        <div>
          <Details details={data?.accDetails} setHovers={setJordanHover} heading='Accessories' />
        </div>

      </div>
    </div>
  )
}

export default Jordan
