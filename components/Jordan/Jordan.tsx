'use client'
import Collection from '@/components/Jordan/Collection'
import Everything from '@/components/Jordan/Everything'
import Offers from '@/components/Jordan/Offers'
import ShoesColl from '@/components/Jordan/ShoesColl'
import Button from '@/components/PcComponents/sub-components/Button'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const Jordan = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        const getData = async () => {
            const response = await fetch('http://localhost:3000/Data/shoes.json')

            if (!response.ok) {
                throw new Error("Error Fetching Data")
            }

            const allData = await response.json()
            setData(allData)
        }
        getData()
    }, [])
    
    return (
        <div className='flex flex-col gap-9 relative overflow-hidden z-[10]'>

            {/* Offers */}
            <div className='relative'>
                <Offers />
            </div>

            {/* logo */}

            <div className='flex justify-center'>
                <Collection />
            </div>

            {/* Pic */}

            <div className='flex flex-col justify-center gap-10 md:mx-8 mdx:mx-12 my-1'>

                <div>
                    <Image width={1000} height={1000} className='w-full' src="/Images/jordan.webp" alt='Jordan' />
                </div>

                {/* About */}

                <div className='flex flex-col justify-center gap-6'>

                    <div className='flex flex-col justify-center gap-1.5 mx-5'>
                        <div>
                            <h1 className='text-center font-semibold'>JORDAN WOMEN</h1>
                        </div>

                        <div>
                            <h1 className='text-center text-4xl md:text-5xl font-extrabold'>GENERATION HEIR</h1>
                        </div>

                        <div className='flex justify-center'>
                            <h1 className='font-semibold text-sm md:text-base text-center w-[36rem]'>Play Nice? Don't waste their time. Inspired by her game, the Heir Series is built for getting shifty and cutting through whatever blocks your flight.</h1>
                        </div>
                    </div>

                    {/* Button */}

                    <div className='flex justify-center gap-2'>
                        <Button text='Shop' color='#0c0c0c' hoverColor='gray' tColor='white' />
                        <Button text='Explore' color='#0c0c0c' hoverColor='gray' tColor='white' />
                    </div>

                </div>

                {/* Trending */}

                <div className='flex flex-col gap-6 mt-12 mx-6 sm:mx-4 md-mx-0'>

                    <div>
                        <h1 className='text-2xl' style={{ fontWeight: '900' }}>TRENDING</h1>
                    </div>

                    <div className='flex flex-col sm:flex-row gap-3'>

                        {/* //Trend 1 */}

                        <div>
                            <div className='topPic absolute text-white bg-transparent flex flex-col justify-end gap-6 py-6 sm:py-3 md:py-11 mdx:py-6 px-3 mdx:px-8 ml-3 mr-10'>
                                <div className='flex flex-col gap-0.5' style={{ width: '80%' }}>
                                    <h1 className='font-semibold text-lg sm:text-base mdx:text-lg'>Air Jordan 1 Retro High OG 'Black Toe'</h1>
                                    <h1 className='text-2xl sm:text-xl mdx:text-2xl' style={{ fontWeight: '900' }}>MY VERY BEST</h1>
                                </div>

                                {/* Shop */}
                                <div>
                                    <Button text='Shop' tColor='#0c0c0c' hoverColor='lightgray' color='white' />
                                </div>
                                <div>

                                </div>
                            </div>
                            <div>
                                <img className='w-full hidden mdx:block' src="/Images/jordan(1).webp" alt='Trend 1' />
                                <img className='w-full block mdx:hidden' src="/Images/jordan(1)-(1).webp" alt='Trend 1' />
                            </div>
                        </div>

                        {/* Trend 2 */}

                        <div className=''>
                            <div className='topPic absolute text-white bg-transparent flex flex-col justify-end gap-6 py-5 sm:py-2 md:py-10 mdx:py-5 px-3 mdx:px-8 ml-3 mr-10'>
                                <div className='flex flex-col gap-0.5' style={{ width: '80%' }}>
                                    <h1 className='font-semibold text-lg sm:text-base mdx:text-lg'>The Latest Jordan Apparel</h1>
                                    <h1 className='text-2xl sm:text-xl mdx:text-2xl' style={{ fontWeight: '900' }}>FOR THE CROWN</h1>
                                </div>

                                {/* Shop */}
                                <div>
                                    <Button text='Shop' tColor='#0c0c0c' hoverColor='lightgray' color='white' />
                                </div>
                                <div>

                                </div>
                            </div>
                            <div>
                                <img className='w-full hidden mdx:block' src="/Images/jordan(2).webp" alt='Trend 1' />
                                <img className='w-full block mdx:hidden' src="/Images/jordan(2)-(2).webp" alt='Trend 1' />
                            </div>

                        </div>

                    </div>

                </div>

                {/* Shoes Collection */}

                <div className='mt-10 mx-6 sm:mx-4'>
                    <ShoesColl data={data} />
                </div>

                {/* Heat Check */}

                <div className='flex flex-col justify-center gap-6 mt-20'>

                    <h1 className='text-2xl mx-6 sm:mx-4' style={{ fontWeight: '900' }}>HEAT CHECK</h1>

                    <div>
                        <Image width={1000} height={1000} className='w-full hidden mdx:block' src="/Images/jordan(main).webp" alt='Jordan' />
                        <Image width={1000} height={1000} className='w-full block mdx:hidden' src="/Images/nike-just-do-it(heat).webp" alt='Jordan' />
                    </div>

                    {/* About */}

                    <div className='flex flex-col justify-center gap-6'>

                        <div className='flex flex-col justify-center gap-1.5 mx-5'>

                            <div>
                                <h1 className='text-center text-4xl md:text-5xl font-extrabold mx-4'>FIRST PICK ENERGY</h1>
                            </div>

                            <div className='flex justify-center'>
                                <h1 className='font-semibold text-sm md:text-base text-center w-[36rem]'>Zips up, Hoods up, and all ayes on you in this heritage-inspired Jordan Draft Jacket.</h1>
                            </div>
                        </div>

                        {/* Button */}

                        <div className='flex justify-center gap-2'>
                            <Button text='Shop' color='#0c0c0c' hoverColor='gray' tColor='white' />
                        </div>

                    </div>
                </div>

                {/* //Kids coll */}

                <div className='flex flex-col sm:flex-row gap-3 mx-6 md:mx-6 mdx:mx-10 mt-20'>

                    {/* First */}

                    <div className='flex flex-col gap-3'>
                        <img className='w-full' src="/Images/jordan-kid.webp" alt="" />
                        <h1 className='text-[18px]' style={{ fontWeight: '900' }}>MENS</h1>
                    </div>

                    {/* Second */}

                    <div className='flex flex-col gap-3'>
                        <img className='w-full' src="/Images/jordan-girl.webp" alt="" />
                        <h1 className='text-[18px]' style={{ fontWeight: '900' }}>WOMENS</h1>
                    </div>

                    {/* Third */}

                    <div className='flex flex-col gap-3'>
                        <img className='w-full' src="/Images/jordan-kid2.webp" alt="" />
                        <h1 className='text-[18px]' style={{ fontWeight: '900' }}>KIDS</h1>
                    </div>

                </div>

                {/* Everything */}

                <div className='mx-6 sm:mx-4'>
                    <Everything />
                </div>
            </div>

        </div>
    )
}

export default Jordan