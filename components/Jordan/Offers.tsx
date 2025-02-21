'use client'
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import { usePathname } from 'next/navigation';

const Offers = () => {

  const pathname = usePathname()
  return (
    <div className={`bg-[#f5f3f0] relative border text-xs border-solid border-b-gray-200 -translate-y-3 h-[3.6rem] mt-3 font-medium`}>
      
      {/* // slides */}

      <div className='flex justify-center h-[3.6rem] relative items-center w-full'>


        <Swiper
      modules={[Autoplay, Pagination, Navigation]}
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      spaceBetween={10}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      speed={500}
    >
      <SwiperSlide><h1 className='w-full text-center' style={{ textDecoration: pathname!='/jordan'? 'underline': 'none' }}>Get a Nike Gift Card</h1></SwiperSlide>
      <SwiperSlide><h1 className='w-full text-center' style={{ textDecoration: pathname!='/jordan'? 'underline': 'none' }}>Members: Free Shipping on Orders $50+</h1></SwiperSlide>
      <SwiperSlide><h1 className='w-full text-center' style={{ textDecoration: pathname!='/jordan'? 'underline': 'none' }}>Look for Store Pickup at Checkout</h1></SwiperSlide>
    </Swiper>

      </div>
    </div>
  )
}

export default Offers
