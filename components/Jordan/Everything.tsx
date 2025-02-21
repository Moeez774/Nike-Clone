'use client'
import React, { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react'

const Everything = () => {

    const [allData, setData] = useState<any>([])
    const [showThings, setThings] = useState(false)

    // for screen lower then pc mean 1024px

    const [isShoes, setShoes] = useState(false)
    const [isGear, setGear] = useState(false)
    const [isClothing, setClothing] = useState(false)
    const [isFeatured, setFeatured] = useState(false)

    const everythingRef = useRef<HTMLDivElement>(null)

    const allColls = [setShoes, setGear, setClothing, setFeatured]

    const onClick = (setter: Dispatch<SetStateAction<boolean>>) => {
        if(window.matchMedia("(max-width: 1024px)").matches) allColls.forEach((e) => e(e===setter))
    }

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('../../Data/Everything.json')

            if (!response.ok) {
                throw new Error("Error fetching jordan's collection")
            }

            const data = await response.json()
            setData(data)
        }
        fetchData()
    }, [])

    // for lisetining outside click of block so collection sget hide

    useEffect(() => {
        const handle = (e: MouseEvent) => {
            if(everythingRef.current && !everythingRef.current.contains(e.target as Node)) {
                allColls.forEach((e) => e(e===null))
            }
        }

        window.addEventListener("mousedown", handle)

        return () => {
            window.addEventListener("mousedown", handle)
        }
    }, [])

    return (
        <>
       { allData.length!=0 && <div className={`flex justify-center flex-col lg:flex-row gap-6 lg:gap-20 ${showThings? 'lg:h-[25rem]': 'lg:h-48'} transition-all duration-300 overflow-hidden my-20`} onMouseEnter={() => setThings(true)} ref={everythingRef} onMouseLeave={() => setThings(false)}>

            {/* First collection */}

            <div className={`flex flex-col transition-all duration-300 ${isShoes? 'gap-6': 'gap-0 lg:gap-6'}`}>

                <div>
                    <h1 className='text-lg cursor-pointer lg:cursor-default' style={{ fontWeight: '900' }} onClick={() => onClick(setShoes)}>Jordan Shoes</h1>
                </div>

                <div className={`flex flex-col ${isShoes? 'h-[19rem] lg:h-auto': 'h-0 lg:h-auto'} transition-all duration-300 overflow-hidden gap-4`}>
                    {allData["Jordan Shoes"].map((e: any, index: number) => {
                        return (
                            <div key={index}>
                                <h1 className='text-[gray] cursor-pointer hover:text-black transition-all duration-300 font-semibold'>{e}</h1>
                            </div>
                        )
                    })}
                </div>

            </div>

            {/* Second Collection */}

            <div className={`flex flex-col transition-all duration-300 ${isClothing? 'gap-6': 'gap-0 lg:gap-6'}`}>

            <div>
                    <h1 className='text-lg cursor-pointer lg:cursor-default' style={{ fontWeight: '900' }} onClick={() => onClick(setClothing)}>Jordan Clothing</h1>
                </div>

                <div className={`flex flex-col ${isClothing? 'h-[21.5rem] lg:h-auto': 'h-0 lg:h-auto'} transition-all duration-300 overflow-hidden gap-4`}>
                    {allData["Jordan Clothing"].map((e: any, index: number) => {
                        return (
                            <div key={index}>
                                <h1 className='text-[gray] cursor-pointer hover:text-black transition-all duration-300 font-semibold'>{e}</h1>
                            </div>
                        )
                    })}
                </div>

            </div>

            {/* Third Collection */}

            <div className={`flex flex-col transition-all duration-300 ${isGear? 'gap-6': 'gap-0 lg:gap-6'}`}>

            <div>
                    <h1 className='text-lg cursor-pointer lg:cursor-default' style={{ fontWeight: '900' }} onClick={() => onClick(setGear)}>Jordan Gear</h1>
                </div>

                <div className={`flex flex-col ${isGear? 'h-[11.5rem] lg:h-auto': 'h-0 lg:h-auto'} transition-all duration-300 overflow-hidden gap-4`}>
                    {allData["Jordan Gear"].map((e: any, index: number) => {
                        return (
                            <div key={index}>
                                <h1 className='text-[gray] cursor-pointer hover:text-black transition-all duration-300 font-semibold'>{e}</h1>
                            </div>
                        )
                    })}
                </div>

            </div>

            {/* Fourth Collection */}

            <div className={`flex flex-col transition-all duration-300 ${isFeatured? 'gap-6': 'gap-0 lg:gap-6'}`}>

            <div>
                    <h1 className='text-lg cursor-pointer lg:cursor-default' style={{ fontWeight: '900' }} onClick={() => onClick(setFeatured)}>Featured</h1>
                </div>

                <div className={`flex flex-col ${isFeatured? 'h-[9rem] lg:h-auto': 'h-0 lg:h-auto'} transition-all duration-300 overflow-hidden gap-4`}>
                    {allData["Featured"].map((e: any, index: number) => {
                        return (
                            <div key={index}>
                                <h1 className='text-[gray] cursor-pointer hover:text-black transition-all duration-300 font-semibold'>{e}</h1>
                            </div>
                        )
                    })}
                </div>

            </div>

        </div> }
        </>
    )
}

export default Everything
