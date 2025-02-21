'use client'
import { useRouter } from 'next/navigation'
import React, { Dispatch, SetStateAction } from 'react'

interface Detials {
    sub: string,
    setOpen: Dispatch<SetStateAction<boolean>>,
    setShow: Dispatch<SetStateAction<boolean>>,
    setShowSubs: Dispatch<SetStateAction<boolean>>,
    setSub: Dispatch<SetStateAction<string>>,
}

const New: React.FC<Detials> = ({ sub, setOpen, setShow, setShowSubs, setSub }) => {

    const router = useRouter()
    const options = ['Dunk', 'Jordan 1', 'Air Force', 'Air Max', 'Blazer', 'Vomero']

    const options2 = ['Running Shoe Finder', 'Bra Finder', 'Product Care', 'Member Rewards', 'Buying Guides']

    // pushing to one link for now
    const push = () => {
        setSub('')
        setShowSubs(false)
        router.push('/w/zoom-vomero-shoes-7gee1zy7ok')
        setOpen(false)
        setShow(false)
    }

    return (
        <>
            {sub === 'Shop Classics' && <div className='flex flex-col'>

                {options.map((e, index) => {
                    return <div className='py-2.5 w-[260px] flex justify-between cursor-pointer items-center' onClick={push} key={index}>
                        <h1 className='text-md font-semibold text-[#686767]'>{e}</h1>
                    </div>
                })
                }

            </div>}

            {sub === 'Explore' && <div className='flex flex-col'>

                {options2.map((e, index) => {
                    return <div className='py-2.5 w-[260px] flex justify-between cursor-pointer items-center' onClick={push} key={index}>
                        <h1 className='text-md font-semibold text-[#686767]'>{e}</h1>
                    </div>
                })
                }

            </div>}
        </>
    )
}

export default New
