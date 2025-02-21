import React, { Dispatch, SetStateAction } from 'react'
import Details from './Details'

interface Hovers {
  womenHover: boolean,
  setWomenHover: Dispatch<SetStateAction<boolean>>,
  data: {
    newDetails: any[],
    colorDetails: any[],
    trendingDetails: any[],
    shopDetails: any[],
    exploreDetails: any[],
    accDetails: any[],
  }
}


const Women: React.FC<Hovers> = ({ womenHover, setWomenHover, data }) => {

  return (
    <div className={`bg-white flex py-2 justify-center ${womenHover ? 'h-[31rem]' : 'h-0'} w-screen`} style={{ transition: 'all 0.1s linear' }} onMouseEnter={() => setWomenHover(true)} onMouseLeave={() => setWomenHover(false)}>


      <div className={`flex gap-28 ${womenHover ? 'opacity-1 translate-y-0' : 'opacity-0 -translate-y-3'}`} style={{ transition: womenHover ? 'all 0.2s ease-in-out 0.2s' : 'all 0s linear' }}>

        {/* First colunm */}

        <div>
          <Details details={data?.newDetails} setHovers={setWomenHover} heading='New' />
        </div>

        {/* Second Colunm */}

        <div>
          <Details details={data?.colorDetails} setHovers={setWomenHover} heading='Shop By Color' />
        </div>

        {/* Third Colunm */}

        <div>
          <Details details={data?.trendingDetails} setHovers={setWomenHover} heading='Shoes' />
        </div>

        {/* Fourth Colunm */}

        <div className='flex flex-col gap-6'>

          <div>
            <Details details={data?.shopDetails} setHovers={setWomenHover} heading='Clothing' />
          </div>

          {/* Second part under clothing */}

          <div>
            <Details details={data?.accDetails} setHovers={setWomenHover} heading='Accessories' />
          </div>
        </div>

        {/* Fifth Colunm */}

        <div>
          <Details details={data?.exploreDetails} setHovers={setWomenHover} heading='Shop By Sport' />
        </div>

      </div>
    </div>
  )
}

export default Women
