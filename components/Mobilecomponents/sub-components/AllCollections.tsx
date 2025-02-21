'use client'
import React, { Dispatch, SetStateAction } from 'react'
import New from './AllCollections/New'
import { ChevronLeft } from 'lucide-react'
import Men from './AllCollections/Men'
import Women from './AllCollections/Women'
import Kids from './AllCollections/Kids'
import Jordan from './AllCollections/Jordan'

interface Details {
    setShow: Dispatch<SetStateAction<boolean>>, 
    coll: string, 
    setShowSubs: Dispatch<SetStateAction<boolean>>, 
    setSub: Dispatch<SetStateAction<string>>, 
    setOpen: Dispatch<SetStateAction<boolean>>,
}

const AllCollections: React.FC<Details> = ({ setShowSubs, setShow, coll, setSub, setOpen}) => {

    return (
        <>
            <div className='flex flex-col gap-10'>

                <div className='text-black flex items-center gap-2.5 cursor-pointer' onClick={() => setShow(false)}>
                    <ChevronLeft size={25} color='#0c0c0c' />
                    <h1 className='font-semibold'>All</h1>
                </div>

                {/* New Collection */}

                {coll === 'New' && <div className='flex flex-col gap-[1.2rem] mx-3'>

                    {/* Heading */}

                    <div>
                        <h1 className='text-2xl font-medium'>New</h1>
                    </div>

                    {/* Collection */}

                    <div>
                        <New setOpen={setOpen} setShow={setShow} setSub={setSub} setShowSubs={setShowSubs} />
                    </div>

                </div>}

                {/* New Collection */}

                {coll === 'Men' && <div className='flex flex-col gap-[1.2rem] mx-3'>

                    {/* Heading */}

                    <div>
                        <h1 className='text-2xl font-medium'>Men</h1>
                    </div>

                    {/* Collection */}

                    <div>
                        <Men setSub={setSub} setShowSubs={setShowSubs} />
                    </div>

                </div>}

                {/* New Collection */}

                {coll === 'Women' && <div className='flex flex-col gap-[1.2rem] mx-3'>

                    {/* Heading */}

                    <div>
                        <h1 className='text-2xl font-medium'>Women</h1>
                    </div>

                    {/* Collection */}

                    <div>
                        <Women setSub={setSub} setShowSubs={setShowSubs} />
                    </div>

                </div>}

                {/* New Collection */}

                {coll === 'Kids' && <div className='flex flex-col gap-[1.2rem] mx-3'>

                    {/* Heading */}

                    <div>
                        <h1 className='text-2xl font-medium'>Kids</h1>
                    </div>

                    {/* Collection */}

                    <div>
                        <Kids setSub={setSub} setShowSubs={setShowSubs}  />
                    </div>

                </div>}

                {/* New Collection */}

                {coll === 'Jordan' && <div className='flex flex-col gap-[1.2rem] mx-3'>

                    {/* Heading */}

                    <div>
                        <h1 className='text-2xl font-medium'>Jordan</h1>
                    </div>

                    {/* Collection */}

                    <div>
                        <Jordan setSub={setSub} setShowSubs={setShowSubs} />
                    </div>

                </div>}

            </div>
        </>
    )
}

export default AllCollections
