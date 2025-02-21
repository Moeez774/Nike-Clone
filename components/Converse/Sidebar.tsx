'use client'
import { ChevronDown, Heading } from 'lucide-react'
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'

const Sidebar = ({ setOpen }: { setOpen: Dispatch<SetStateAction<boolean>> }) => {

    const collection = [{ 'Gender': ['Men', 'Women'] }, { 'Kids': ['Boys', 'Girls'] }, { 'Kids & Age': ['Babies & Toddlers (0-3 yrs)', 'Little Kids (3-7 yrs)', 'Big Kids (7-15 yrs)'] }, { 'Sale & Offers': ['Sale'] }, { 'Colors': ['Black', 'Blue', 'Brown', 'Green', 'Gray', 'Pink', 'Red', 'White', 'Yellow'] }, { 'Shop By Price': ['$25 - $50', '$50 - $100', '$100 - $150', 'Over $150'] }, { 'Brand (1)': ['Nike Sportswear', 'Jordan', 'Nike By You', 'Converse', 'Nike Lab', 'ACG', 'Nike Pro'] }, { 'Sports': ['Lifestyle'] }]

    const subs = [{}]

    const [allCollections, setCollections] = useState<number[]>([])
    const [show, setShow] = useState(false)

    const showCollection = (e: number) => {
        if (allCollections.includes(e)) {
            setCollections(allCollections.filter(item => item !== e))
        }
        else {
            setCollections((prev) => ([...prev, e]))
        }
    }

    return (
        <div className='flex flex-col gap-8'>

            {/* Heading */}

            <div>
                <h1 className='text-2xl font-medium'>Converse (59)</h1>
            </div>

            {/* Sidebar */}

            <div className='flex flex-col justify-center gap-12 pr-4 overflow-y-auto'>

                <div className='flex flex-col gap-6'>

                    <div className='flex gap-3'>
                        <div>
                            <h1 className='font-semibold'>Pick Up Today</h1>
                        </div>
                        <div>
                            <label className="switch">
                                <input type="checkbox" />
                                <span className="slider">
                                    <svg className="slider-icon" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation"><path fill="none" d="m4 16.5 8 8 16-16"></path></svg>
                                </span>
                            </label>
                        </div>
                    </div>

                    <hr className='bg-gray-100' />

                    <div className='flex font-semibold flex-col gap-1.5'>
                        <h1>Shops</h1>
                        <h1>Tops & T-Shirts</h1>
                    </div>
                </div>

                <div className='flex flex-col gap-2.5 mb-4'>
                    <hr className='bg-gray-100' />

                    {collection.map((e, index) => {
                        return <div key={index} className='flex flex-col gap-[1.10rem]'>
                            <div className={`flex flex-col ${allCollections.includes(index) ? 'gap-[1.10rem]' : 'gap-0'} transition-all duration-300`}>
                                <div className='flex justify-between items-center cursor-pointer' onClick={() => showCollection(index)}>
                                    <h1 className='font-semibold'>{Object.keys(e)}</h1>
                                    <ChevronDown size={20} className={`cursor-pointer transition-all duration-500`} color='black' style={{ transform: allCollections.includes(index) ? 'rotateX(-180deg)' : 'rotateX(0deg)' }} />
                                </div>

                                {/* // for showing subs */}

                                {Object.values(e).map((sub: string[], subIndex) => {
                                    return (
                                        <div key={subIndex}>
                                            <div key={subIndex} className={`${Object.keys(e)[0] != 'Colors' ? 'flex' : 'hidden'} flex-col gap-1 transition-all duration-300 overflow-hidden`} style={{ transition: 'all 0.3s ease-in-out', height: allCollections.includes(index) ? `${sub.length * 2.25}rem` : '0rem' }}>
                                                {sub.map((heads, headsIndex) => {
                                                    return (
                                                        <div key={headsIndex} className='items-start transition-all duration-300 font-medium' style={{ display: headsIndex < 4 ? 'flex' : show ? 'flex' : 'none' }}>
                                                            <label className="custom-checkbox mt-0.5 font-medium">
                                                                <input name="dummy" type="checkbox" />
                                                                <span className="checkmark"></span>
                                                            </label>
                                                            <div className='-translate-x-1'>
                                                                <h1 className='cursor-pointer hover:text-[gray]'>{heads}</h1>
                                                            </div>
                                                        </div>
                                                    )
                                                })}

                                                {/* // for showing readmore button on subs exceeding above 4 */}
                                                <div className={`${sub.length > 4 ? 'flex' : 'hidden'}`}>
                                                    <button onClick={() => setShow(!show)}>{show ? '- Less' : '+ More'}</button>
                                                </div>
                                            </div>

                                            {/* // for showing colors */}
                                            <div className={`${Object.keys(e)[0] === 'Colors' ? 'flex' : 'hidden'} flex-wrap flex-row gap-[1.545rem] overflow-hidden justify-center transition-all duration-300 ${allCollections.includes(index) ? 'h-48' : 'h-0'}`}>
                                                {sub.map((heads, index) => {
                                                    return (
                                                        <div key={index} className='flex items-center flex-col'>
                                                            <div className='w-7 h-7 rounded-full' style={{ backgroundColor: heads, border: '1px solid gray' }}></div>
                                                            <div className='text-xs font-medium'>
                                                                {heads}
                                                            </div>
                                                        </div>
                                                    )
                                                })}
                                            </div>


                                        </div>
                                    )
                                })}
                            </div>
                            {index != collection.length - 1 && <hr className='bg-gray-100' />}
                        </div>
                    })}

                </div>

            </div>

        </div>
    )
}

export default Sidebar
