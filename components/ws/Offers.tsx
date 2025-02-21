'use client'
import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { usePathname } from 'next/navigation';

const Offers = () => {

    const pathname = usePathname()
    return (
        <div className={`bg-gray-100 relative border flex justify-center text-xs border-solid border-b-gray-200 -translate-y-3 h-[3.6rem] mt-3 font-medium`}>

            {/* // slides */}

            <div className='flex justify-center h-[3.6rem] relative items-center w-full sm:w-[45em] md:w-[53em] mdx:w-[60em]'>


                <Swiper
                    modules={[Autoplay, Pagination, Navigation]}
                          autoplay={{ delay: 5000, disableOnInteraction: false }}
                          slidesPerView={1}
                          centeredSlides
                          navigation={{
                            nextEl: ".swiper-button-next",
                            prevEl: ".swiper-button-prev",
                        }}
                >
                    <SwiperSlide><h1 className='text-center underline cursor-pointer'>Get a Nike Gift Card</h1></SwiperSlide>
                    <SwiperSlide><h1 className='text-center underline cursor-pointer'>Members: Free Shipping on Orders $50+</h1></SwiperSlide>
                    <SwiperSlide><h1 className='text-center underline cursor-pointer'>Look for Store Pickup at Checkout</h1></SwiperSlide>
                </Swiper>
               { pathname!='/gear-up' && <div className='justify-between hidden sm:flex px-0 items-center my-3 lg:my-5'>
                <button className="swiper-button-prev p-2.5 rounded-full absolute top-1/2 left-2 transform -translate-y-1/2 z-10">
                    <ChevronLeft className='text-[gray] transition-all duration-300 hover:text-black' strokeWidth={2.5} size={23} />
                </button>
                <button className="swiper-button-next p-2.5 rounded-full absolute top-1/2 right-2 transform -translate-y-1/2 z-10">
                    <ChevronRight className='text-[gray] transition-all duration-300 hover:text-black' strokeWidth={2.5} size={23} />
                </button>
            </div> }
        </div>
        </div >
    )
}

export default Offers
