import React, { Dispatch, SetStateAction } from 'react'
import Details from './Details'

interface Hovers {
  saleHover: boolean,
  setSaleHover: Dispatch<SetStateAction<boolean>>,
  data: {
    newDetails: any[],
    menDetails: any[],
    womenDetails: any[],
    kidsDetails: any[],
  }
}

const Sale: React.FC<Hovers> = ({ saleHover, setSaleHover, data }) => {

  return (
    <div className={`bg-white py-2 justify-center flex ${saleHover ? 'h-[12.5rem]' : 'h-0'} w-screen`} style={{ transition: 'all 0.1s linear' }} onMouseEnter={() => setSaleHover(true)} onMouseLeave={() => setSaleHover(false)}>


      <div className={`flex gap-32 ${saleHover ? 'opacity-1 translate-y-0' : 'opacity-0 -translate-y-3'}`} style={{ transition: saleHover ? 'all 0.2s ease-in-out 0.2s' : 'all 0s linear' }}>

        {/* First colunm */}

        <div>
          <Details details={data?.newDetails} setHovers={setSaleHover} heading='All Sale' />
        </div>

        {/* Second Colunm */}

        <div>
          <Details details={data?.menDetails} setHovers={setSaleHover} heading='Men' />
        </div>

        {/* Third Colunm */}

        <div>
          <Details details={data?.womenDetails} setHovers={setSaleHover} heading='Women' />
        </div>

        {/* Fourth Colunm */}

        <div>
          <Details details={data?.kidsDetails} setHovers={setSaleHover} heading='Kids' />
        </div>
      </div>
    </div>
  )
}

export default Sale
