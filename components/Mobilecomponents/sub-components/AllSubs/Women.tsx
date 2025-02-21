'use client'

const Women = ({ sub }: { sub: string }) => {
    const color = ['Elemental Pink', 'University Red', 'Game Royal', 'Mink Brown', 'Black and Sail']

    const shoes = ['All Shoes', 'Lifestyle', 'Jordan', 'Retro Running', 'Training & Gym', 'Basketball', 'Running', 'Track & Field', 'Sandals & Slides', 'Shoes $100 & Under']

    const clothing = ['All Clothing', 'Hoodies & Sweatshirst', 'Shorts', 'Pants', 'Leggings', 'Outerwear', 'Tops & T-Shirts', 'Bras', 'Matching Sets', 'Jordan']

    const acc = ['Bags & Backpacks', 'Hats & Headwear', 'Socks']

    const sport = ['Basketball', 'Fan Gear', 'Fitness', 'Golf', 'Running', 'Soccer', 'Tennis', 'Volleyball']

    return (
        <>
            {sub === 'Shop By Color' && <div className='flex flex-col'>

                {color.map((e, index) => {
                    return <div className='py-2.5 w-[260px] flex justify-between cursor-pointer items-center' key={index}>
                        <h1 className='text-md font-semibold text-[#686767]'>{e}</h1>
                    </div>
                })
                }

            </div>}

            {sub === 'Shoes' && <div className='flex flex-col'>

                {shoes.map((e, index) => {
                    return <div className='py-2.5 w-[260px] flex justify-between cursor-pointer items-center' key={index}>
                        <h1 className='text-md font-semibold text-[#686767]'>{e}</h1>
                    </div>
                })
                }

            </div>}

            {sub === 'Clothing' && <div className='flex flex-col'>

                {clothing.map((e, index) => {
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

            {sub === 'Shop By Sport' && <div className='flex flex-col'>

                {sport.map((e, index) => {
                    return <div className='py-2.5 w-[260px] flex justify-between cursor-pointer items-center' key={index}>
                        <h1 className='text-md font-semibold text-[#686767]'>{e}</h1>
                    </div>
                })
                }

            </div>}
        </>
    )
}

export default Women
