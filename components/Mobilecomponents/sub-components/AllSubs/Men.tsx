'use client'

const Men = ({ sub }: { sub: string }) => {
    const shoes = ['All Shoes', 'Lifestyle', 'Jordan', 'Dunk', 'Retro Running', 'Training & Gym', 'Basketball', 'Running']

    const clothing = ['All Clothing', 'Hoodies & Sweatshirts', 'Shorts', 'Pants & Tights', 'Outerwear']

    const acc = ['Bags & Backpacks', 'Hats & Headwear', 'Socks']

    const sport = ['Baseball', 'Basketball', 'Fan Gear', 'Football', 'Golf', 'Running', 'Track & Field', 'Soccer', 'Tennis', 'Training & Gym']

    return (
        <>
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

export default Men
