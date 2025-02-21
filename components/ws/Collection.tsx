import { ChevronDown, FileTerminal, Filter, FilterIcon, FilterX, FilterXIcon } from 'lucide-react'
import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react'
import FirstSec from './FirstSec'

const Collection = ({ allData, hideFilters, showFilters, setOpen }: {
    allData: {
        types: any[],
        AllItems: any[],
    }, hideFilters: Dispatch<SetStateAction<boolean>>, showFilters: boolean, setOpen: Dispatch<SetStateAction<boolean>>
}) => {

    const [sort, setSort] = useState(false)
    const [isHovered1, setHovered1] = useState(false)
    const [isHovered2, setHovered2] = useState(false)

    // for showing sort by
    const listRef = useRef<HTMLDivElement>(null)
    const btnRef = useRef<HTMLButtonElement>(null)

    useEffect(() => {
        const hanbleOutsideClick = (e: MouseEvent) => {
            if ((listRef.current && !listRef.current.contains(e.target as Node)) && (btnRef.current && !btnRef.current.contains(e.target as Node))) {
                setSort(false)
            }
        }

        window.addEventListener("mousedown", hanbleOutsideClick)

        return () => {
            window.addEventListener("mousedown", hanbleOutsideClick)
        }
    }, [])



    return (
        <div className='flex flex-col gap-2 mdx:gap-6'>

            {/* Buttons */}
            <div className='flex gap-8 relative z-30 justify-end py-2' style={{ fontWeight: '500' }}>
                <div>
                    {/* //for showing filters button in pc */}
                    <button className='hidden mdx:flex gap-1 items-center' onClick={() => hideFilters(!showFilters)}>{showFilters ? 'Show Filters' : 'Hide Filters'}<svg aria-hidden="true" className="icon-filter-ds" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" strokeWidth="1.5" d="M21 8.25H10m-5.25 0H3"></path><path stroke="currentColor" strokeWidth="1.5" d="M7.5 6v0a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" clipRule="evenodd"></path><path stroke="currentColor" strokeWidth="1.5" d="M3 15.75h10.75m5 0H21"></path><path stroke="currentColor" strokeWidth="1.5" d="M16.5 13.5v0a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" clipRule="evenodd"></path></svg></button>

                    {/* for showing filters button in mobile an tablet screen */}

                    <div className='flex mdx:hidden items-center py-1 px-6 justify-between w-screen'>
                        {/* results */}
                        <div>
                            <h1 className='text-[gray]'>{allData.AllItems.length + allData.AllItems.length} Results</h1>
                        </div>

                        <button className='flex border border-solid border-[#c7c6c6] rounded-3xl py-[0.25rem] px-[1.18rem] mdx:hidden gap-1 items-center' onClick={() => setOpen(true)}>Filter<svg aria-hidden="true" className="icon-filter-ds" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" strokeWidth="1.5" d="M21 8.25H10m-5.25 0H3"></path><path stroke="currentColor" strokeWidth="1.5" d="M7.5 6v0a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" clipRule="evenodd"></path><path stroke="currentColor" strokeWidth="1.5" d="M3 15.75h10.75m5 0H21"></path><path stroke="currentColor" strokeWidth="1.5" d="M16.5 13.5v0a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" clipRule="evenodd"></path></svg></button>

                    </div>

                    <div ref={listRef} className='absolute h-[8.5rem] rounded-l-3xl w-[10.8rem] bg-white py-4 pl-4 pr-5 flex-col font-medium text-balance justify-end items-end translate-x-16' style={{ display: sort ? 'flex' : 'none' }}>
                        <h1 className='hover:text-[#696969] cursor-pointer'>Featured</h1>
                        <h1 className='hover:text-[#696969] cursor-pointer'>Newest</h1>
                        <h1 className='hover:text-[#696969] cursor-pointer'>Price: High-Low</h1>
                        <h1 className='hover:text-[#696969] cursor-pointer'>Price: Low-High</h1>
                    </div>
                </div>
                <div className='hidden mdx:block'>
                    <button ref={btnRef} className='flex gap-1 items-end' onClick={() => setSort(!sort)}>Sort By <ChevronDown size={21} color='black' style={{ transition: 'all 0.3s ease-in-out', transform: sort ? 'rotateX(180deg)' : 'rotateX(0deg)' }} /></button>
                </div>
            </div>

            {/* Collections */}

            <div className='flex flex-col gap-4'>

                <div className='grid grid-cols-2 mdx:grid-cols-3 gap-2 mdx:gap-4'>
                    {allData.AllItems.map((e, index) => {
                        return <FirstSec allData={e} key={index} />
                    })}
                </div>

                {/* same data(only for showing page large) */}
                <div className='grid grid-cols-2 mdx:grid-cols-3 gap-2 mdx:gap-4'>
                    {allData.AllItems.map((e, index) => {
                        return <FirstSec allData={e} key={index} />
                    })}
                </div>
            </div>

        </div>
    )
}

export default Collection
