'use client'
import { ChevronRight } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React, { Dispatch, SetStateAction } from 'react'

interface Details {
    setShowSubs: Dispatch<SetStateAction<boolean>>,
    setSub: Dispatch<SetStateAction<string>>,
    setOpen: Dispatch<SetStateAction<boolean>>,
    setShow: Dispatch<SetStateAction<boolean>>,
}

const New: React.FC<Details> = ({ setShowSubs, setSub, setOpen, setShow }) => {

    const router = useRouter()

    const options = [{ heading: 'New Arrivals', isMore: false, link: '/w/new-3n82y' }, { heading: 'Best Sellers', isMore: false, link: "/w/best-76m50" }, { heading: 'Latest Drops', isMore: false, link: "/w/new-upcoming-drops-k0gk" }, { heading: 'Nike 24.7', isMore: false, link: "/w/new-upcoming-drops-k0gk" }, { heading: 'Valentines Day Shop', isMore: false, link: "/w/new-upcoming-drops-k0gk" }, { heading: 'SNKRS Launch Calender', isMore: false, link: "/w/new-upcoming-drops-k0gk" }, { heading: 'Shop Classics', isMore: true, link: "/w/new-upcoming-drops-k0gk" }, { heading: 'Explore', isMore: true, link: "/w/new-upcoming-drops-k0gk" }]

    // for detecting click so specific action can be perform
    const showMore = (e: any, e2: string, link: string) => {
        if (e) {
            setShowSubs(true)
            setSub(e2)
        }
        else {
            router.push(link)
            setOpen(false)
            setShowSubs(false)
            setShow(false)
        }
    }

    return (
        <div className='flex flex-col'>

            {options.map((e, index) => {
                return <div className='py-2.5 w-[260px] flex justify-between cursor-pointer items-center' onClick={() => showMore(e.isMore, e.heading, e.link)} key={index}>
                    <h1 className='text-md font-semibold text-[#686767]'>{e.heading}</h1>
                    {e.isMore && <ChevronRight size={25} color='#0c0c0c' />}
                </div>
            })
            }

        </div>
    )
}

export default New
