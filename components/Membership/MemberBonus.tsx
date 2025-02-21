'use client'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import { Swiper, SwiperSlide } from 'swiper/react';
import Button from '../PcComponents/sub-components/Button';

const MemberBonus = () => {

    const data = [{ pic: '/Images/nike-membership-shipping.jpg', sub: 'Free Shipping', head: 'Member score free delivery on every $50+ order.' }, { pic: '/Images/nike-membership-hanger.jpg', sub: 'Wear Test', head: `Not sure? Try it for 60 days-return if it's not a fit.` }, { pic: '/Images/nike-membership-returns.jpg', sub: 'Receiptless Returns', head: `Return or exchange receipt-free in-store or in the Nike App.` }, { pic: '/Images/nike-membership-memebr.jpg', sub: 'Member Experiences', head: 'Join your community for live, Member-only events.' }, { pic: '/Images/nike-membership-chat.jpg', sub: 'Nike Experts', head: 'Members can get sport and style advice from experts.' }]

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
        <>
            <div className='hidden flex-col gap-6 sm:flex'>

            <div className='my-16'>
                    <h1 className='text-2xl font-medium'>Members Also Get</h1>
                </div>
                <div className='relative z-10'>
                    <Swiper
                        modules={[Navigation, Pagination]}
                        navigation={{
                            nextEl: ".swiper-button-next-members",
                            prevEl: ".swiper-button-prev-members",
                        }}
                        freeMode={true}
                        breakpoints={{
                            300: { slidesPerView: 1.1, spaceBetween: 10 },
                            550: { slidesPerView: 1.3, spaceBetween: 10 },
                            950: { slidesPerView: 3.1, spaceBetween: 13 },
                        }}
                    >
                        {data.map((e, index) => {
                            return (
                                <SwiperSlide key={index} >
                                    <div className='flex mt-20 h-[30em] gap-4 items-center flex-col text-black'>

                                        {/* image */}

                                        <div>
                                            <img src={e.pic} alt="" />
                                        </div>
                                        <div className='flex flex-col gap-6 justify-center items-center'>

                                            <div className='flex flex-col text-center mx-[5.5rem] gap-2'>
                                                <h1 className='font-medium text-2xl'>{e.sub}</h1>
                                                <h1 className='font-medium'>{e.head}</h1>
                                            </div>
                                        </div>

                                    </div>
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                    <div className='w-full hidden sm:flex justify-end px-10 items-center my-3 lg:my-5'>
                        <button className={`swiper-button-prev-members ${slideNo === 0 ? 'bg-gray-100 hover:bg-gray-100' : 'bg-gray-200 hover:bg-gray-300'} cursor-pointer p-2.5 mr-[3.8rem] rounded-full absolute top-0 transform -translate-y-[4rem] z-10`} onClick={decreaseSlide} style={{ transition: 'all 0.3s ease-in-out' }}>
                            <ChevronLeft color={slideNo === 0 ? 'gray' : 'black'} style={{ strokeWidth: 1 }} size={28} />
                        </button>
                        <button className={`swiper-button-next-members ${slideNo === 2 ? 'bg-gray-100 hover:bg-gray-100' : 'bg-gray-200 hover:bg-gray-300'} transition-all duration-300 p-2.5 rounded-full absolute top-0 transform -translate-y-[4rem] z-10`} onClick={increaseSlides}>
                            <ChevronRight color={slideNo === 2 ? 'gray' : 'black'} style={{ strokeWidth: 1 }} size={28} />
                        </button>
                    </div>
                </div>
            </div>

            {/* For screens under 640px */}

            <div className='flex sm:hidden flex-col gap-14'>

                <div>
                    <h1 className='text-2xl font-medium'>Members Also Get That</h1>
                </div>

                {data.map((e, index) => {
                    return (
                        <div key={index} className='flex sm:mt-20 sm:h-[30em] gap-4 items-center flex-col text-black'>

                            {/* image */}

                            <div>
                                <img className='w-16' src={e.pic} alt="" />
                            </div>
                            <div className='flex flex-col gap-6 justify-center items-center'>

                                <div className='flex flex-col text-center sm:mx-16 smx:mx-[5.5rem] gap-2'>
                                    <h1 className='font-medium text-xl'>{e.sub}</h1>
                                    <h1 className='font-medium text-sm'>{e.head}</h1>
                                </div>
                            </div>

                        </div>
                    )
                })}

            </div>
        </>
    )
}

export default MemberBonus
