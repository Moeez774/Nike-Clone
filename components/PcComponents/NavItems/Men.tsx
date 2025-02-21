import React, { Dispatch, SetStateAction } from 'react'
import Details from './Details'

interface Hovers {
  menHover: boolean,
  setMenHover: Dispatch<SetStateAction<boolean>>,
  data: {
    newDetails: any[],
    trendingDetails: any[],
    shopDetails: any[],
    exploreDetails: any[],
    accDetails: any[]
  }
}


const Men: React.FC<Hovers> = ({ menHover, setMenHover, data }) => {

  return (
    <div className={`bg-white flex py-2 justify-center ${menHover ? 'h-[28rem]' : 'h-0'} w-screen`} style={{ transition: 'all 0.1s linear' }} onMouseEnter={() => setMenHover(true)} onMouseLeave={() => setMenHover(false)}>


      <div className={`flex gap-28 ${menHover ? 'opacity-1 translate-y-0' : 'opacity-0 -translate-y-3'}`} style={{ transition: menHover ? 'all 0.2s ease-in-out 0.2s' : 'all 0s linear' }}>

        {/* First colunm */}

        <div>
          <Details details={data?.newDetails} setHovers={setMenHover} heading='New' />
        </div>

        {/* Second Colunm */}

        <div>
          <Details details={data?.trendingDetails} setHovers={setMenHover} heading='Shoes' />
        </div>

        {/* Third Colunm */}

        <div className='flex flex-col gap-6'>

          <div>
            <Details details={data?.shopDetails} setHovers={setMenHover} heading='Clothing' />
          </div>

          {/* Second part under clothing */}

          <div>
            <Details details={data?.accDetails} setHovers={setMenHover} heading='Accessories' />
          </div>
        </div>

        {/* Fourth Colunm */}

        <div>
          <Details details={data?.exploreDetails} setHovers={setMenHover} heading='Shop By Sport' />
        </div>

      </div>
    </div>
  )
}

export default Men
