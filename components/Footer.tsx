'use client'
import { ChevronDown } from 'lucide-react'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import AccordionFooter from './ws/AccordionFooter'

const Footer = () => {

    const pathname = usePathname()

    const [resources, setResources] = useState<any[]>([])
    const [help, setHelp] = useState<any[]>([])
    const [company, setCompany] = useState<any[]>([])
    const [promotion, setPromotion] = useState<any[]>([])

    // fetching footers items from server 
    useEffect(() => {
        const getItems = async () => {
            let a = await fetch('/api/footers', {
                method: "GET", headers: {}
            })

            let response = await a.json()
            setResources(response.data["Resources"])
            setHelp(response.data["Help"])
            setCompany(response.data["Company"])
            setPromotion(response.data["Promotion & Discounts"])
        }

        getItems()
    }, [])

    // hiding footer for signup page
    if(pathname === '/register') {
        return
    }

    return (
        <>
        <div className='hidden mdx:block'>

            <hr />

        <div className='flex w-full flex-col mdx:flex-row mdx:justify-between items-start my-16'>

            {/* // resources */}
            {resources.length != 0 && <div className='flex flex-col gap-0 mdx:gap-6'>

                <div className='flex justify-between w-full mdx:w-auto'>
                    <h1 className='text-black text-sm font-semibold'>Resources</h1>
                    <ChevronDown size={25} color='black' className='mdx:hidden' />
                </div>

                <div className='flex flex-col gap-3'>
                    {resources.map((e: string, index: number) => {
                        return (
                            <h1 key={index} className='text-sm cursor-pointer text-[gray] font-semibold'>{e}</h1>
                        )
                    })}
                </div>
            </div>}

            {/* // Hrlp */}
            {help.length != 0 && <div className='flex flex-col gap-0 mdx:gap-6'>

                <div>
                    <h1 className='text-black text-sm font-semibold'>Help</h1>
                </div>

                <div className='flex flex-col gap-3'>
                    {help.map((e: string, index: number) => {
                        return (
                            <h1 key={index} className='text-sm cursor-pointer text-[gray] font-semibold'>{e}</h1>
                        )
                    })}
                </div>
            </div>}

            {/* // Company */}
            {company.length != 0 && <div className='flex flex-col gap-0 mdx:gap-6'>

                <div>
                    <h1 className='text-black text-sm font-semibold'>Company</h1>
                </div>

                <div className='flex flex-col gap-3'>
                    {company.map((e: string, index: number) => {
                        return (
                            <h1 key={index} className='text-sm cursor-pointer text-[gray] font-semibold'>{e}</h1>
                        )
                    })}
                </div>
            </div>}

            {/* // Promotion and Discounts */}
            {promotion.length != 0 && <div className='flex flex-col gap-0 mdx:gap-6'>

                <div>
                    <h1 className='text-black text-sm font-semibold'>Promotion & Discounts</h1>
                </div>

                <div className='flex flex-col gap-3'>
                    {promotion.map((e: string, index: number) => {
                        return (
                            <h1 key={index} className='text-sm cursor-pointer text-[gray] font-semibold'>{e}</h1>
                        )
                    })}
                </div>
            </div>}

            <div className='flex items-center cursor-pointer gap-1'>
                <svg aria-hidden="true" color='gray' className="css-npy3on" focusable="false" viewBox="0 0 24 24" role="img" width="17px" height="17px" fill="none"><path stroke="currentColor" strokeMiterlimit="10" strokeWidth="1.5" d="M21.75 12A9.75 9.75 0 0112 21.75M21.75 12A9.75 9.75 0 0012 2.25M21.75 12c0 2.071-4.365 3.75-9.75 3.75S2.25 14.071 2.25 12m19.5 0c0-2.071-4.365-3.75-9.75-3.75S2.25 9.929 2.25 12M12 21.75A9.75 9.75 0 012.25 12M12 21.75c2.9 0 5.25-4.365 5.25-9.75S14.9 2.25 12 2.25m0 19.5c-2.9 0-5.25-4.365-5.25-9.75S9.1 2.25 12 2.25M2.25 12A9.75 9.75 0 0112 2.25"></path></svg>
                <h1 className='text-[gray] text-sm font-semibold'>United States</h1>
            </div>
        </div>
        </div>

        <AccordionFooter resources={resources} help={help} company={company} promotion={promotion} />

    </>
    )
}

export default Footer
