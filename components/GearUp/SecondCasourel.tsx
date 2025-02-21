'use client'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import { Swiper, SwiperSlide } from 'swiper/react';
// Shoes component receiving props
const SecondCasourel = ({ data }: { data: any[] }) => {

    const [slideNo, setSlideNo] = useState(0)

    const increaseSlides = () => {
        if(slideNo===data.length-1) {
            return
        }
        else {
            const no = slideNo + 1
            setSlideNo(no)
        }
    } 

    const decreaseSlide = () => {
        if(slideNo===0) {
            return
        }
        else {
            const no = slideNo - 1
            setSlideNo(no)
        }
    }
    

    return (
        <div className='flex flex-col gap-6 mt-12'>
            <div>
                <h1 className='text-2xl mx-6 font-medium'>More Sports to Explore</h1>
            </div>
            <div className='relative z-10'>
                <Swiper
                    modules={[Navigation, Pagination]}
                    navigation={{
                        nextEl: ".swiper-button-next-shoes",
                        prevEl: ".swiper-button-prev-shoes",
                    }}
                    freeMode={true}
                    breakpoints={{
                        300: { slidesPerView: 1.3, spaceBetween: 10 },
                        550: { slidesPerView: 1.8, spaceBetween: 10 },
                        950: { slidesPerView: 3.1, spaceBetween: 20 },
                    }}
                >
                    {data.map((e, index) => {
                        return (
                            <SwiperSlide key={index} >
                                <div className='flex flex-col gap-3'>

                                    {/* image */}

                                    <div>
                                        <img src={e.img} alt="" />
                                    </div>

                                    <div className='flex flex-col gap-2'>

                                        <div>
                                            <h1 className='font-medium text-xl'>{e.sport}</h1>
                                        </div>

                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
                <div className='w-full hidden sm:flex justify-end px-0 items-center my-3 lg:my-5'>
                    <button className={`swiper-button-prev-shoes ${slideNo===0? 'bg-gray-100 hover:bg-gray-100': 'bg-gray-200 hover:bg-gray-300'} cursor-pointer p-2.5 mr-[3.8rem] rounded-full absolute top-0 transform -translate-y-[4rem] z-10`} onClick={decreaseSlide} style={{ transition: 'all 0.3s ease-in-out' }}>
                        <ChevronLeft color={slideNo===0? 'gray': 'black'} style={{ strokeWidth: 1 }} size={28} />
                    </button>
                    <button className={`swiper-button-next-shoes ${slideNo===2? 'bg-gray-100 hover:bg-gray-100': 'bg-gray-200 hover:bg-gray-300'} transition-all duration-300 p-2.5 rounded-full absolute top-0 transform -translate-y-[4rem] z-10`} onClick={increaseSlides}>
                        <ChevronRight color={slideNo===2? 'gray': 'black'} style={{ strokeWidth: 1 }} size={28} />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SecondCasourel
