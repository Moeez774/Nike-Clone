import { ChevronRight } from 'lucide-react'
import React, { Dispatch, SetStateAction } from 'react'

const Jordan = ({ setShowSubs, setSub }: { setShowSubs: Dispatch<SetStateAction<boolean>>, setSub: Dispatch<SetStateAction<string>>}) => {

    const options = [{ heading: 'New Arrivals', isMore: false }, { heading: 'Best Sellers', isMore: false }, { heading: 'All Sale', isMore: false }, { heading: 'Men', isMore: true }, { heading: 'Women', isMore: true }, { heading: 'Kids', isMore: true }, { heading: 'Accessories', isMore: true }]

    const showMore = (e: any, e2: string) => {
        if (e) {
            setShowSubs(true)
            setSub(e2)
        }
    }

    return (
        <div className='flex flex-col'>

            {options.map((e, index) => {
                return <div className='py-2.5 w-[260px] flex cursor-pointer justify-between items-center' onClick={() => showMore(e.isMore, e.heading)} key={index}>
                    <h1 className='text-md font-semibold text-[#686767]'>{e.heading}</h1>
                    { e.isMore && <ChevronRight size={25} color='#0c0c0c' /> }
                </div>
            })
            }

        </div>
    )
}

export default Jordan
