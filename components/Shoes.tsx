'use client'
import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import { Bold, ChevronLeft, ChevronRight, Wind } from "lucide-react";
import './PcComponents/Header.css'

const Shoes = () => {
    const [number, setNumber] = useState(1)
    const [isMobile, setMobile] = useState(false)

    useEffect(() => {
        console.log(number)
    }, [number])

    const increment = () => {
        if(number===7) {
            setNumber(1)
        }
        else {
            setNumber(number+1)
        }
    }

    const decrement = () => {
        if(number===1) {
            setNumber(7)
        }
        else {
            setNumber(number-1)
        }
    }

    useEffect(() => {
        const checkMobile = () => {
            setMobile(window.innerWidth >= 1024);        
        }
      
        checkMobile()
        window.addEventListener("resize", checkMobile);
      
        return () => window.removeEventListener("resize", checkMobile);
      }, []);

    return (
        <div className='flex flex-col gap-8 my-8'>
            <div className='mx-12'>
                <h1 className='boldHeading text-4xl mdx:text-5xl'>Shop By Classics</h1>
            </div>
            <div className='relative z-10'>
                <Swiper
                    modules={[Navigation, Pagination]}
                    navigation={{
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                    }}
                    loop={true}
                    breakpoints={{
                        300: { slidesPerView: 1.5 },
                        500: { slidesPerView: 1.8 },
                        640: { slidesPerView: 2.8 },
                        768: { slidesPerView: 3.8 },
                        950: { slidesPerView: 5.3 },
                        1240: { slidesPerView: 5.7 },
                    }}
                    centeredSlides={true}
                    spaceBetween={20}
                    allowTouchMove={false}
                >
                    <SwiperSlide>
                        <div className='images z-20 absolute flex justify-end p-6 mdx:p-11'>
                            <div className='py-2 h-10 hidden lg:block rounded-3xl px-4 text-white text-base font-semibold' style={{ backgroundColor: 'rgba(0 ,0 ,0 , 0.5)', transition: 'all 0.3s ease-in-out', opacity: number===1? '1': '0' }}><h1 className='cursor-default'>1/7</h1></div>
                        </div>
                        <img className='relative z-10' src="/Images/shoes.webp" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className='images z-20 absolute flex justify-end p-6 mdx:p-11'>
                        <div className='rounded-3xl py-2 h-10 hidden lg:block px-4 text-white text-base font-semibold' style={{ backgroundColor: 'rgba(0 ,0 ,0 , 0.5)', transition: 'all 0.3s ease-in-out', opacity: number===2? '1': '0' }}><h1 className='cursor-default'>2/7</h1></div>
                    </div>
                        <img className='relative z-10' src="/Images/shoes(1).webp" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className='images z-20 absolute flex justify-end p-6 mdx:p-11'>
                        <div className='rounded-3xl py-2 h-10 hidden lg:block px-4 text-white text-base font-semibold' style={{ backgroundColor: 'rgba(0 ,0 ,0 , 0.5)', transition: 'all 0.3s ease-in-out', opacity: number===3? '1': '0' }}><h1 className='cursor-default'>3/7</h1></div>
                    </div>
                        <img className='relative z-10' src="/Images/shoes(2).webp" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className='images z-20 absolute flex justify-end p-6 mdx:p-11'>
                        <div className='rounded-3xl py-2 h-10 hidden lg:block px-4 text-white text-base font-semibold' style={{ backgroundColor: 'rgba(0 ,0 ,0 , 0.5)', transition: 'all 0.3s ease-in-out', opacity: number===4? '1': '0' }}><h1 className='cursor-default'>4/7</h1></div>
                    </div>
                        <img className='relative z-10' src="/Images/shoes(3).webp" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className='images z-20 absolute flex justify-end p-6 mdx:p-11'>
                        <div className='rounded-3xl py-2 h-10 hidden lg:block px-4 text-white text-base font-semibold' style={{ backgroundColor: 'rgba(0 ,0 ,0 , 0.5)', transition: 'all 0.3s ease-in-out', opacity: number===5? '1': '0' }}><h1 className='cursor-default'>5/7</h1></div>
                    </div>
                        <img className='relative z-10' src="/Images/shoes(4).webp" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className='images z-20 absolute flex justify-end p-6 mdx:p-11'>
                        <div className='rounded-3xl py-2 h-10 hidden lg:block px-4 text-white text-base font-semibold' style={{ backgroundColor: 'rgba(0 ,0 ,0 , 0.5)', transition: 'all 0.3s ease-in-out', opacity: number===6? '1': '0' }}><h1 className='cursor-default'>6/7</h1></div>
                    </div>
                        <img className='relative z-10' src="/Images/shoes(5).webp" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className='images z-20 absolute flex justify-end p-6 mdx:p-11'>
                        <div className='rounded-3xl py-2 h-10 hidden lg:block px-4 text-white text-base font-semibold' style={{ backgroundColor: 'rgba(0 ,0 ,0 , 0.5)', transition: 'all 0.3s ease-in-out', opacity: number===7? '1': '0' }}><h1 className='cursor-default'>7/7</h1></div>
                    </div>
                        <img className='relative z-10' src="/Images/shoes(6).webp" alt="" />
                    </SwiperSlide>
                </Swiper>
                <div className='w-full justify-between flex px-10 items-center my-3 lg:my-5'>
                    <button className="swiper-button-prev bg-white p-2.5 rounded-full absolute ml-20 top-1/2 left-2 transform -translate-y-1/2 z-10" onClick={decrement}>
                        <ChevronLeft color='black' size={20} />
                    </button>
                    <button className="swiper-button-next bg-white p-2.5 mr-20 rounded-full absolute top-1/2 right-2 transform -translate-y-1/2 z-10" onClick={increment}>
                        <ChevronRight color='black' size={20} />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Shoes
