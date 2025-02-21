import React from 'react'
import '../Mobile.css'
import Button from '@/components/PcComponents/sub-components/Button'
import '../../PcComponents/Header.css'
import { usePathname } from 'next/navigation'

const MobileVideo = () => {

    const pathname = usePathname()
    return (
        <>
       { pathname==='/' && <div className='flex flex-col md:hidden gap-8'>

            <div className='mobileVideo-container overflow-hidden'>
                <div className='sampleBlock'></div>
                <video className='mobileVid relative z-20' autoPlay loop disablePictureInPicture muted src="/Videos/Untitled design.mp4"></video>
            </div>

            <div className='flex flex-col justify-center mb-12 gap-6 text-black'>
                <div className='flex flex-col gap-2'>

                    <div>
                        <h1 className='text-center font-semibold'>First Look at Nike 24.7 Collection</h1>
                    </div>

                    <div className='flex flex-col gap-1 text-4xl'>
                        <h1 className='boldHeading text-center'>TAILORED FOR</h1>
                        <h1 className='boldHeading text-center'>ALL-DAY COMFORT</h1>
                    </div>

                    <div>
                        <h1 className='text-center font-medium mx-5'>A new collection featuring polished looks and a luxurious feel.</h1>
                    </div>

                </div>

                {/* Shop Button */}

                <div className='flex justify-center text-white'>
                    <Button text="Shop" color="#0c0c0c" tColor='#ffffff' hoverColor='gray' />
                </div>
            </div>
        </div> }
        </>
    )
}

export default MobileVideo
