import React from 'react'
import Button from '../PcComponents/sub-components/Button'
import Casourel from './Casourel'
import SecondCasourel from './SecondCasourel'
import Everything from './Everything'

const GearUp = ({ firstColl, secondColl, everythingColl }: { firstColl: any[], secondColl: any[], everythingColl: any[] }) => {

    return (
        <div>

            <div className='mx-4 mdx:mx-12 min-h-screen gap-5 flex flex-col'>

                <div className='flex font-semibold flex-col gap-3 lgx:gap-0 lgx:flex-row justify-start lgx:justify-between py-4 lgx:items-center sticky z-20 top-0 bg-white'>

                    <div>
                        <h1 className='text-2xl font-medium'>Let's Gear Up</h1>
                    </div>

                    <div className='flex gap-8 overflow-x-hidden'>
                        <h1 className='cursor-pointer transition-all duration-200 hover:text-[gray]'>Golf</h1>
                        <h1 className='cursor-pointer transition-all duration-200 hover:text-[gray]'>Baseball</h1>
                        <h1 className='cursor-pointer transition-all duration-200 hover:text-[gray]'>Softball</h1>
                        <h1 className='cursor-pointer transition-all duration-200 hover:text-[gray]'>Basketball</h1>
                        <h1 className='cursor-pointer transition-all duration-200 hover:text-[gray]'>Football</h1>
                        <h1 className='cursor-pointer transition-all duration-200 hover:text-[gray]'>Soccer</h1>
                        <h1 className='cursor-pointer transition-all duration-200 hover:text-[gray]'>Lacrosse</h1>
                        <h1 className='cursor-pointer transition-all duration-200 hover:text-[gray]'>Volleyball</h1>
                    </div>

                </div>

                {/* images  */}

                <div>
                    <img src="/Images/gear-up-nike-com.webp" alt="" />
                </div>

                {/* CTA */}

                <div className='flex flex-col gap-6'>

                    <div className='flex flex-col gap-3 text-center mx-3 mdx:mx-5'>
                        <h1 className='boldHeading text-3xl sm:text-5xl mdx:text-7xl text-center'>PLAY YOUR GAME</h1>

                        <h1 className='font-medium text-sm md:text-base'>All the latest gear to elevate the way you play.</h1>
                    </div>

                    <div className='flex justify-center gap-2'>

                        <Button tColor='white' text='Shop Football' hoverColor='gray' color='#0c0c0c' />

                        <Button tColor='white' text='Shop Volleyball' hoverColor='gray' color='#0c0c0c' />

                        <Button tColor='white' text='Shop Soccer' hoverColor='gray' color='#0c0c0c' />

                    </div>

                </div>

                {/* //Collection Casourel */}

                <div className='my-5'>
                    <Casourel data={firstColl} />
                </div>

                {/* //Sport Casourel */}

                <div>
                    <SecondCasourel data={secondColl} />
                </div>

                {/* Everything about sport */}

                <div>
                    <Everything everythingColl={everythingColl} />
                </div>

            </div>

        </div>
    )
}

export default GearUp
