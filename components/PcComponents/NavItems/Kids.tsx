import React, { Dispatch, SetStateAction } from 'react'
import Details from './Details'

interface Hovers {
  kidsHover: boolean,
  setKidsHover: Dispatch<SetStateAction<boolean>>,
  data: {
    newDetails: any[],
    shoesDetails: any[],
    clothingDetails: any[],
    allShoesDetails: any[],
    sportDetails: any[],
    accDetails: any[],
    allClothes: any[],
  }
}

const Kids: React.FC<Hovers> = ({ kidsHover, setKidsHover , data}) => {

  return (
    <div className={`bg-white flex py-2 justify-center ${kidsHover ? 'h-[31rem]' : 'h-0'} w-screen`} style={{ transition: 'all 0.1s linear' }} onMouseEnter={() => setKidsHover(true)} onMouseLeave={() => setKidsHover(false)}>


      <div className={`flex gap-20 ${kidsHover ? 'opacity-1 translate-y-0' : 'opacity-0 -translate-y-3'}`} style={{ transition: kidsHover ? 'all 0.2s ease-in-out 0.2s' : 'all 0s linear' }}>

        {/* First colunm */}

        <div>
          <Details details={data?.newDetails} setHovers={setKidsHover} heading='New' />
        </div>

        {/* Second Colunm */}
        <div className='flex flex-col gap-6'>

        <div>
          <Details details={data?.shoesDetails} setHovers={setKidsHover} heading='Shoes By Age' />
        </div>

        <div>
          <Details details={data?.allShoesDetails} setHovers={setKidsHover} heading='All Shoes' />
        </div>
        </div>

        {/* Third Colunm */}

        <div className='flex flex-col gap-6'>

        <div>
          <Details details={data?.clothingDetails} setHovers={setKidsHover} heading='Clothing By Age' />
        </div>

        <div>
          <Details details={data?.allClothes} setHovers={setKidsHover} heading='All Clothes' />
        </div>
        </div>

        {/* Fourth Colunm */}

        <div className='flex flex-col gap-4'>

          <div>
            <Details details={data?.accDetails} setHovers={setKidsHover} heading='Accessories' />
          </div>

          {/* Second part under clothing */}

          <div>
            <Details details={data?.sportDetails} setHovers={setKidsHover} heading='Shop By Sport' />
          </div>
        </div>

      </div>
    </div>
  )
}

export default Kids
