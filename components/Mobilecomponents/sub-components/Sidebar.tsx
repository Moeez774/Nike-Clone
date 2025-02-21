import React, { useState } from 'react'

import {
    Sheet,
    SheetContent,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import MobileColl from './MobileColl'
import Collab from './Collab'
import Button from '@/components/PcComponents/sub-components/Button'
import AllCollections from './AllCollections'
import Subs from './Subs'
import Link from 'next/link'

const Sidebar = () => {

    // for checking sheet is closed or not

    const [isOpen ,setOpen] = useState(false)

    const [show, setShow] = useState(false)
    const [showSubs, setShowSubs] = useState(false)

    const [coll, setColl] = useState('')
    const [sub, setSub] = useState('')

    return (
        <div className='flex items-center'>

            <Sheet open={isOpen} onOpenChange={(open) => {
                setOpen(open);
                if(!open) {
                    setShow(false)
                    setShowSubs(false)
                    setColl('')
                    setSub('')
                }
            }}>
                <SheetTrigger>
                    <div>
                        <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" strokeWidth="1.5" d="M21 5.25H3M21 12H3m18 6.75H3"></path></svg>
                    </div>
                </SheetTrigger>
                { isOpen && <div className='h-screen absolute w-screen top-0 left-0 z-[100]' style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}>
                    </div> }
                <SheetContent className='w-[320px] z-[100] flex overflow-y-auto overflow-x-hidden'>
                    <SheetTitle></SheetTitle>

                    {/* Content */}

                    <div className={`flex flex-col mx-2 gap-20 absolute w-[320px] ${show? '-translate-x-[300px]': 'translate-x-0'}`} style={{ transition: 'all 0.3s ease-in-out' }}>

                        <div className='flex flex-col gap-10'>
                            {/* Collection */}

                            <div>
                                <MobileColl setColl={setColl} setShow={setShow}  />
                            </div>

                            {/* Colabe */}

                            <div>
                                <Collab setOpen={setOpen} />
                            </div>
                        </div>
                        {/* MemberShip */}

                        <div className='flex flex-col gap-6'>

                            {/* Offer */}
                            <div className='flex flex-col'>
                                <h1 className='text-[#6b6b6b] font-medium text-xl mr-[75px]'>Become a Nike Member for the best products, inspiration and stories in</h1>
                                <h1 className='text-[#6b6b6b] font-medium text-xl flex gap-1'>sport.<p className='text-xl text-black font-semibold'>Learn more</p></h1>
                            </div>

                            {/* Buttons */}

                            <div className='flex gap-2'>
                                <Link href='/membership'><Button tColor='white' text='Join Us' hoverColor='#0c0c0c' color='#0c0c0c' /></Link>
                                <div>
                                    <Link href='/register' ><button className={`px-4 py-1.5 rounded-3xl text-black bg-transparent font-semibold`} style={{ border: '0.5px solid #b8b7b7' }} onClick={() => setOpen(false)} >Sign In</button></Link>
                                </div>                            
                                </div>
                        </div>

                        {/* Options */}

                        <div className='flex flex-col'>

                            <div className='flex gap-3 cursor-pointer py-2' onClick={() => setOpen(false)}>
                            <Link href="/help" className='flex gap-3 cursor-pointer' ><svg aria-hidden="true" className="nav-icon" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" strokeMiterlimit="10" strokeWidth="1.5" d="M11.99 18v-1.5M9 9.75a3 3 0 114.29 2.71c-.78.37-1.29 1.16-1.29 2.03V15m9.75-3c0 5.385-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12 6.615 2.25 12 2.25s9.75 4.365 9.75 9.75z"></path></svg>
                            <h1 className='text-black font-semibold'>Help</h1></Link>
                            </div>

                            <div className='flex gap-3 cursor-pointer py-2' onClick={() => setOpen(false)}>
                            <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" strokeWidth="1.5" d="M8.25 8.25V6a2.25 2.25 0 012.25-2.25h3a2.25 2.25 0 110 4.5H3.75v8.25a3.75 3.75 0 003.75 3.75h9a3.75 3.75 0 003.75-3.75V8.25H17.5"></path></svg>
                            <h1 className='text-black font-semibold'>Bag</h1>
                            </div>

                            <div className='flex gap-3 cursor-pointer py-2' onClick={() => setOpen(false)}>
                            <svg aria-hidden="true" className="nav-icon" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" strokeMiterlimit="10" strokeWidth="1.5" d="M12 13.5v-7c0-1.74 1.01-2.75 2.25-2.75h4.39l1.61 6m0 0H3.75m16.5 0v10.5H3.75V9.75m0 0l1.61-6h5.14"></path></svg>
                            <h1 className='text-black font-semibold'>Orders</h1>
                            </div>

                            <div className='flex gap-3 cursor-pointer py-2' onClick={() => setOpen(false)}>
                            <svg aria-hidden="true" className="nav-icon" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" strokeMiterlimit="10" strokeWidth="1.5" d="M20.25 5.25V16.5c0 1.24-1.01 2.25-2.25 2.25H6c-1.24 0-2.25-1.01-2.25-2.25V5.25m4.5 13.25v-7.25h7.5v7.25M12 11.25v7.25M1.5 5.25h21"></path></svg>
                            <h1 className='text-black font-semibold'>Find a Store</h1>
                            </div>

                        </div>
                    </div>

                    {/* // showing collections */}

                    <div className={`w-[320px] absolute ${show && !showSubs? 'translate-x-0': show && showSubs? '-translate-x-[300px]': 'translate-x-[300px]'}`} style={{ transition: 'all 0.3s ease-in-out' }} >
                        <AllCollections setShow={setShow} setOpen={setOpen} setSub={setSub} coll={coll} setShowSubs={setShowSubs} />
                    </div>

                    {/* // showing collections */}

                    <div className={`w-[320px] absolute ${showSubs? 'translate-x-[0px]': 'translate-x-[300px]'}`} style={{ transition: 'all 0.3s ease-in-out' }} >
                        <Subs setShowSubs={setShowSubs} setShow={setShow} setOpen={setOpen} coll={coll} sub={sub} showSubs={showSubs} setSub={setSub} />
                    </div>
                </SheetContent>
            </Sheet>
        </div>
    )
}

export default Sidebar
