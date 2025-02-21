import React, { useState } from 'react'

const FirstSec = ({ allData }: {
    allData: any
}) => {

    const [isHovered1, setHovered1] = useState(false)
    
    // for setting about and image on hover
    const [about, setAbout] = useState(allData.About)
    const [img, setImg] = useState(allData.img)

    const hoverOn = () => {
        if (allData.Varients.length != 0) {
            setHovered1(true)
        }
    }

    // for setting image and picture on hover on pics
    const setVarients = (e: any) => {
        setImg(e.img)
        setAbout(e.About)
    }

    return (
        <div className='flex cursor-pointer mb-16 flex-col gap-2' onMouseEnter={() => hoverOn()} onMouseLeave={() => setHovered1(false)}>

            {/* img */}
            <div className='relative z-0'>
                <img src={img} alt="" />
            </div>

            <div className='flex'>
                <div className='flex gap-1.5 absolute cursor-default items-center' style={{ transition: 'all 0.2s ease-in-out', opacity: isHovered1 ? '1' : '0' }}>
                    {allData.Varients.map((e: any, index: number) => {
                        return (
                           <div key={index} style={{ display: index<4? 'block': 'none' }}>
                                <img className='w-9 cursor-pointer' onMouseEnter={() => setVarients(e)} src={e.img} alt="" />
                            </div>
                        )
                    })}
                    {allData.Varients.length>4 && <h1 className='text-[gray]'>+{allData.Varients.length-4}</h1> }
                </div>
            </div>

            {/* Details */}

            <div className={`font-semibold relative ml-3 mdx:mx-0 z-30 flex flex-col ${isHovered1 && about!='' ? 'gap-1 top-11' : isHovered1 && about===''? 'gap-1 top-9': 'gap-4 top-0'}`} style={{ transition: about!=''? 'top 0.2s ease-in-out': 'none' }}>

                <div className='flex flex-col gap-1'>

                   { about!='' && <h1 className='text-[#b34c23]'>{about}</h1>}

                    {!isHovered1 && <div className='z-30 flex flex-col gap-1'>
                        <h1>{allData.Name}</h1>
                        <h1 className='text-[gray]'>{allData.Category}</h1>
                        <h1 className='text-[gray]'>{allData.Color}</h1>
                    </div>}
                </div>

                {/* Price */}
                <div className='font-semibold relative z-30'>
                    <h1 className='text-black'>{allData.Price}</h1>
                </div>
            </div>

        </div>
    )
}

export default FirstSec
