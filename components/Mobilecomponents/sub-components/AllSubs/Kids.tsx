'use client'

const Kids = ({ sub }: { sub: string }) => {

    const shoes = ['Big Kids (1Y - 7Y)', 'Little Kids (8C - 3Y)', 'Babby Toddler (1C - 10C)', 'Lifestyle', 'Jordan', 'Retro Running', 'Basketball', 'Running']

    const clothing = ['Big Kids (XS - XL)', 'Little Kids (4 - 7)', 'Babby & Toddler (0M - 4T)', 'Hoodies & Sweatshirts', 'Pants & Tights', 'Matching Sets', 'Outerwear', 'Shorts', 'Tops & T-Shirts']

    const acc = ['Bags & Backpacks', 'Hats & Headwear', 'Socks']

    const sport = ['Basketball', 'Dance', 'Gymnastics', 'Fan Gear', 'Football', 'Running', 'Soccer']

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

export default Kids
