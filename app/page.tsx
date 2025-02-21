'use client'
import About from "@/components/PcComponents/About";
import Specials from "@/components/PcComponents/Specials";
import Button from "@/components/PcComponents/sub-components/Button";
import Shoes from "@/components/Shoes";
import { useEffect } from "react";

export default function Home() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>

      <div className="flex flex-col gap-12">

        {/* Specials */}

        <div>
          <Specials />
        </div>

        {/* New Pegauses */}

        <div className='flex flex-col justify-center gap-6 text-black'>
          <div className='flex flex-col gap-2'>

            <div>
              <h1 className='text-center font-semibold'>New This Week</h1>
            </div>

            <div className='flex flex-col gap-1 mx-5 text-4xl md:text-5xl' style={{ letterSpacing: '-1px' }}>
              <h1 className='boldHeading text-center'>NIKE AIR PEGASUS WAVE</h1>
            </div>

            <div>
              <h1 className='text-center font-medium mx-5'>A new icon forms from the sound of energy.</h1>
            </div>

          </div>

          {/* Shop Button */}

          <div className='flex justify-center text-white'>
            <Button text="Shop" color="#0c0c0c" tColor='#ffffff' hoverColor='gray' />
          </div>
        </div>

        {/* Second Video */}

        <div className='video-container overflow-hidden'>
          <div className='sampleBlock'></div>
          <video className='relative z-10' autoPlay loop disablePictureInPicture muted src="/Videos/Nike. Just Do It. Nike.com — Mozilla Firefox - 27 January 2025.mp4"></video>
        </div>

        {/* Casourel of Shoes */}

        <div>
          <Shoes />
        </div>

        {/* About */}

        <div>
          <About />
        </div>

      </div>
    </>
  );
}
