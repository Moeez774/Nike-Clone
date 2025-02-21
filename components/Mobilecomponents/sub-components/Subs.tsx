import { ChevronLeft } from 'lucide-react'
import React, { Dispatch, SetStateAction } from 'react'
import New from './AllSubs/New'
import Men from './AllSubs/Men'
import Women from './AllSubs/Women'
import Kids from './AllSubs/Kids'
import Jordan from './AllSubs/Jordan'

interface Details {
    sub: string, 
    coll: string, 
    setShowSubs: Dispatch<SetStateAction<boolean>>, 
    showSubs: boolean,
    setShow: Dispatch<SetStateAction<boolean>>,
    setOpen: Dispatch<SetStateAction<boolean>>,
    setSub: Dispatch<SetStateAction<string>>
}

const Subs: React.FC<Details> = ({ sub, coll, setShowSubs, showSubs, setShow, setOpen, setSub }) => {
    return (
        <div className='flex flex-col gap-10'>

            <div className='text-black flex items-center gap-2.5 cursor-pointer' onClick={() => setShowSubs(false)}>
                <ChevronLeft size={25} color='#0c0c0c' />
                <h1 className='font-semibold'>{coll}</h1>
            </div>

            {/* New Collection */}

            {coll === 'New' && <div className='flex flex-col gap-[1.2rem] mx-3'>

                {/* Heading */}

                <div>
                    <h1 className='text-2xl font-medium'>{sub}</h1>
                </div>

                {/* Collection */}

                <div>
                    <New setOpen={setOpen} setSub={setSub} setShowSubs={setShowSubs} setShow={setShow} sub={sub} />
                </div>

            </div>}

            {/* Men's Collection's subs */}

            {coll === 'Men' && <div className='flex flex-col gap-[1.2rem] mx-3'>

                {/* Heading */}

                <div>
                    <h1 className='text-2xl font-medium'>{sub}</h1>
                </div>

                {/* Collection */}

                <div>
                    <Men sub={sub} />
                </div>

            </div>}

            {/* for Women's Collection's subs */}

            {coll === 'Women' && <div className='flex flex-col gap-[1.2rem] mx-3'>

                {/* Heading */}

                <div>
                    <h1 className='text-2xl font-medium'>{sub}</h1>
                </div>

                {/* Collection */}

                <div>
                    <Women sub={sub} />
                </div>

            </div>}

            {/* For Kids Collection's subs */}

            {coll === 'Kids' && <div className='flex flex-col gap-[1.2rem] mx-3'>

                {/* Heading */}

                <div>
                    <h1 className='text-2xl font-medium'>{sub}</h1>
                </div>

                {/* Collection */}

                <div>
                    <Kids sub={sub} />
                </div>

            </div>}

            {/* Jordan's subs */}

            {coll === 'Jordan' && <div className='flex flex-col gap-[1.2rem] mx-3'>

                {/* Heading */}

                <div>
                    <h1 className='text-2xl font-medium'>{sub}</h1>
                </div>

                {/* Collection */}

                <div>
                    <Jordan sub={sub} />
                </div>

            </div>}

        </div>
    )
}

export default Subs
