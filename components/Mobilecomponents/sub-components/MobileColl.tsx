import { ChevronRight } from 'lucide-react'
import React, { Dispatch, SetStateAction } from 'react'

const MobileColl = ({ setShow, setColl } : { setShow: Dispatch<SetStateAction<boolean>>, setColl: Dispatch<SetStateAction<string>> }) => {

    const showColl = (value: string) => {
        setShow(true)
        setColl(value)
    }

  return (
    <div className='flex flex-col pt-12'>

        {/* // first button */}
        <button className='flex justify-between py-2 items-center text-2xl cursor-pointer' onClick={() => showColl('New')} style={{ width: '260px' }}>
            <h1 className='font-medium'>New</h1>
            <ChevronRight color='black' className='font-normal' size={25} style={{ fontWeight: '300' }} />
        </button>

        {/* second button */}

        <button className='flex justify-between py-2 items-center text-2xl cursor-pointer' onClick={() => showColl('Men')} style={{ width: '260px' }}>
            <h1 className='font-medium'>Men</h1>
            <ChevronRight color='black' size={25} className='font-normal' />
        </button>

        {/* third button */}

        <button className='flex justify-between py-2 items-center text-2xl cursor-pointer' onClick={() => showColl('Women')} style={{ width: '260px' }}>
            <h1 className='font-medium'>Women</h1>
            <ChevronRight color='black' size={25} className='font-normal' />
        </button>

        {/* fourth button */}

        <button className='flex justify-between py-2 items-center text-2xl cursor-pointer' onClick={() => showColl('Kids')} style={{ width: '260px' }}>
            <h1 className='font-medium'>Kids</h1>
            <ChevronRight color='black' size={25} className='font-normal' />
        </button>

        {/* fifth button */}

        <button className='flex justify-between py-2 items-center text-2xl cursor-pointer' onClick={() => showColl('Jordan')} style={{ width: '260px' }}>
            <h1 className='font-medium'>Jordan</h1>
            <ChevronRight color='black' size={25} className='font-normal' />
        </button>
    </div>
  )
}

export default MobileColl
