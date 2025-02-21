import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

interface Details {
    resources: any[],
    help: any[],
    company: any[],
    promotion: any[],
}

const AccordionFooter: React.FC<Details> = ({ resources, help, company, promotion }) => {

    const allServices = [{ head: "Recources", data: resources }, { head: "Help", data: help }, { head: "Company", data: company }, { head: "Promotion & Discounts", data: promotion }]

    return (
        <div className='mdx:hidden'>

            <hr />

            <div className='my-10 flex flex-col gap-3'>

                {allServices.map((e, index) => {
                    return (
                        <Accordion key={index} type="single" collapsible>
                            <AccordionItem value="item-1">
                                <AccordionTrigger className='font-semibold'>{e.head}</AccordionTrigger>

                                {e.data.map((e, index) => {
                                    return (
                                        <AccordionContent key={index}>
                                            <h1 className='text-sm cursor-pointer text-[gray] font-semibold'>{e}</h1>
                                        </AccordionContent>
                                    )
                                })}
                            </AccordionItem>
                        </Accordion>
                    )
                })}

                <div className='flex my-3 items-center cursor-pointer gap-1'>
                    <svg aria-hidden="true" color='gray' className="css-npy3on" focusable="false" viewBox="0 0 24 24" role="img" width="17px" height="17px" fill="none"><path stroke="currentColor" strokeMiterlimit="10" strokeWidth="1.5" d="M21.75 12A9.75 9.75 0 0112 21.75M21.75 12A9.75 9.75 0 0012 2.25M21.75 12c0 2.071-4.365 3.75-9.75 3.75S2.25 14.071 2.25 12m19.5 0c0-2.071-4.365-3.75-9.75-3.75S2.25 9.929 2.25 12M12 21.75A9.75 9.75 0 012.25 12M12 21.75c2.9 0 5.25-4.365 5.25-9.75S14.9 2.25 12 2.25m0 19.5c-2.9 0-5.25-4.365-5.25-9.75S9.1 2.25 12 2.25M2.25 12A9.75 9.75 0 0112 2.25"></path></svg>
                    <h1 className='text-[gray] text-sm font-semibold'>United States</h1>
                </div>

                <hr />

            </div>

        </div>
    )
}

export default AccordionFooter
