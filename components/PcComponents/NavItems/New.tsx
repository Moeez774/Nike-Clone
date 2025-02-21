import React, { Dispatch, SetStateAction } from 'react'
import Details from './Details'

interface Hovers {
  newHover: boolean,
  setNewHover: Dispatch<SetStateAction<boolean>>,
  data: {
    newDetails: any[],
    trendingDetails: any[],
    shopDetails: any[],
    exploreDetails: any[],
  },
}

const New: React.FC<Hovers> = ({ newHover, setNewHover, data }) => {

  return (
    <div className={`bg-white py-2 justify-center flex ${newHover ? 'h-64' : 'h-0'} w-screen`} style={{ transition: 'all 0.1s linear' }} onMouseEnter={() => setNewHover(true)} onMouseLeave={() => setNewHover(false)}>


      <div className={`flex gap-24 ${newHover ? 'opacity-1 translate-y-0' : 'opacity-0 -translate-y-3'}`} style={{ transition: newHover ? 'all 0.2s ease-in-out 0.2s' : 'all 0s linear' }}>

        {/* First colunm */}

        <div>
          <Details details={data?.newDetails} setHovers={setNewHover} heading='New' />
        </div>

        {/* Second Colunm */}

        <div>
          <Details details={data?.trendingDetails} setHovers={setNewHover} heading='Trending' />
        </div>

        {/* Third Colunm */}

        <div>
          <Details details={data?.shopDetails} setHovers={setNewHover} heading='Shop Classics' />
        </div>

        {/* Fourth Colunm */}

        <div>
          <Details details={data?.exploreDetails} setHovers={setNewHover} heading='Explore' />
        </div>
      </div>
    </div>
  )
}

export default New
