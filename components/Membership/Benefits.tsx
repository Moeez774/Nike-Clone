'use client'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import { Swiper, SwiperSlide } from 'swiper/react';
import Button from '../PcComponents/sub-components/Button';

const Benefits = () => {

    const data = [{ pic: '/Images/nike-membership-45.webp', sub: 'Member Product', head: 'Your Exclusice Access', btnText: 'Shop' }, { pic: '/Images/nike-membership-1.webp', sub: 'Member Rewards', head: 'How We Say Thank You', btnText: 'Celebrate' }, { pic: '/Images/nike-membership-2.webp', sub: 'Sports & Wellness Apps', head: `Movement Where You're At`, btnText: 'Move' }, { pic: '/Images/nike-membership-3.jpg', sub: 'Nike By You', head: 'Your Cutomization Service', btnText: 'Customize' }, { pic: '/Images/nike-membership-4.webp', sub: 'SNKRS', head: 'Your Ultimate Sneaker Community', btnText: 'Explore' }]

    const [slideNo, setSlideNo] = useState(0)

    const increaseSlides = () => {
        if (slideNo === 2) {
            return
        }
        else {
            const no = slideNo + 1
            setSlideNo(no)
        }
    }

    const decreaseSlide = () => {
        if (slideNo === 0) {
            return
        }
        else {
            const no = slideNo - 1
            setSlideNo(no)
        }
    }
    // 492 x 615

    return (
        <div className='flex flex-col gap-6'>
            <div className='relative z-10'>
                <Swiper
                    modules={[Navigation, Pagination]}
                    navigation={{
                        nextEl: ".swiper-button-next-shoes",
                        prevEl: ".swiper-button-prev-shoes",
                    }}
                    freeMode={true}
                    breakpoints={{
                        300: { slidesPerView: 1.1, spaceBetween: 13 },
                        450: { slidesPerView: 1.3, spaceBetween: 13 },
                        640: { slidesPerView: 1.6, spaceBetween: 13 },
                        768: { slidesPerView: 2, spaceBetween: 13 },
                        950: { slidesPerView: 2.9, spaceBetween: 13 },
                        1100: { slidesPerView: 3.1, spaceBetween: 13 },
                    }}
                >
                    {data.map((e, index) => {
                        return (
                            <SwiperSlide key={index} >
                                <div className='flex flex-col gap-2'>

                                    {/* image */}

                                    <div>
                                        <img src={e.pic} alt="" />


                                    </div>
                                    <div className='absolute flex flex-col gap-6 justify-end p-12' style={{ width: '100%', height: 'auto', aspectRatio: '492 / 615' }}>
                                        
                                        <div className='flex flex-col text-white gap-2'>
                                            <h1 className='font-medium'>{e.sub}</h1>
                                            <h1 className='font-semibold text-2xl'>{e.head}</h1>
                                        </div>

                                        <div>
                                            <Button text={e.btnText} color='white' tColor='black' hoverColor='lightgray' />
                                        </div>
                                    </div>

                                </div>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
                <div className='w-full hidden sm:flex justify-end px-10 items-center my-3 lg:my-5'>
                    <button className={`swiper-button-prev-shoes ${slideNo === 0 ? 'bg-gray-100 hover:bg-gray-100' : 'bg-gray-200 hover:bg-gray-300'} cursor-pointer p-2.5 mr-[3.8rem] rounded-full absolute top-0 transform -translate-y-[4rem] z-10`} onClick={decreaseSlide} style={{ transition: 'all 0.3s ease-in-out' }}>
                        <ChevronLeft color={slideNo === 0 ? 'gray' : 'black'} style={{ strokeWidth: 1 }} size={28} />
                    </button>
                    <button className={`swiper-button-next-shoes ${slideNo === 2 ? 'bg-gray-100 hover:bg-gray-100' : 'bg-gray-200 hover:bg-gray-300'} transition-all duration-300 p-2.5 rounded-full absolute top-0 transform -translate-y-[4rem] z-10`} onClick={increaseSlides}>
                        <ChevronRight color={slideNo === 2 ? 'gray' : 'black'} style={{ strokeWidth: 1 }} size={28} />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Benefits
