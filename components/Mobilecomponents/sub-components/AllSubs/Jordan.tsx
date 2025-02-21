'use client'

const Jordan = ({ sub }: { sub: string }) => {
    const men = ['Shop All', 'Shoes', 'AJ1', 'Clothing', 'Basketball']

    const kids = ['Shop All', 'Shoes', 'AJ1', 'Clothing', 'Basketball', 'Big Kids', 'Little Kids', 'Baby & Toddler']

    const acc = ['Shop All', 'Bags & Backpacks', 'Hats & Headwear']

    return (
        <>
            { (sub === 'Men' || sub==='Women') && <div className='flex flex-col'>

                {men.map((e, index) => {
                    return <div className='py-2.5 w-[260px] flex justify-between cursor-pointer items-center' key={index}>
                        <h1 className='text-md font-semibold text-[#686767]'>{e}</h1>
                    </div>
                })
                }

            </div>}

            {sub === 'Kids' && <div className='flex flex-col'>

                {kids.map((e, index) => {
                    return <div className='py-2.5 w-[260px] flex justify-between cursor-pointer items-center' key={index}>
                        <h1 className='text-md font-semibold text-[#686767]'>{e}</h1>
                    </div>
                })
                }

            </div>}

            {sub === 'Accessories' && <div className='flex flex-col'>

                {acc.map((e, index) => {
                    return <div className='py-2.5 w-[260px] flex justify-between cursor-pointer items-center' key={index}>
                        <h1 className='text-md font-semibold text-[#686767]'>{e}</h1>
                    </div>
                })
                }

            </div>}
        </>
    )
}

export default Jordan
