import React from 'react'

const Filtered = ({ collection }: { collection: any[] }) => {
    return (
        <>
        {
            collection.map((e, index) => {
                return <div key={index} className='flex flex-col gap-6 my-6'>
                    <div className={`flex flex-col gap-6 transition-all duration-300`}>
                        <div className='flex justify-between items-center cursor-pointer'>
                            <h1 className='font-semibold'>{Object.keys(e)}</h1>
                        </div>

                        {/* // for showing subs */}

                        {(Object.values(e) as string[][]).map((sub: string[], subIndex) => {
                            return (
                                <div key={subIndex}>
                                    <div key={subIndex} className={`flex flex-col gap-3 transition-all duration-300 overflow-hidden`}>
                                        {sub.map((heads, headsIndex) => {
                                            return (
                                                <div key={headsIndex} className='flex items-start transition-all duration-300 font-medium'>
                                                    <label className="custom-checkbox mt-0.5 font-medium">
                                                        <input name="dummy" type="checkbox" />
                                                        <span className="checkmark"></span>
                                                    </label>
                                                    <div className='-translate-x-1'>
                                                        <h1 className='cursor-pointer hover:text-[gray]'>{heads}</h1>
                                                    </div>
                                                </div>
                                            )
                                        })}

                                        {/* // for showing readmore button on subs exceeding above 4 */}
                                        {/* <div className={`${sub.length > 4 ? 'flex' : 'hidden'}`}>
                                    <button onClick={() => setShow(!show)}>{show ? '- Less' : '+ More'}</button>
                                </div> */}
                                    </div>

                                    {/* // for showing colors */}
                                    <div className={`${Object.keys(e)[0] === 'Colors' ? 'flex' : 'hidden'} flex-wrap flex-row gap-[1.545rem] overflow-hidden justify-center transition-all duration-300 ${collection.includes(index) ? 'h-48' : 'h-0'}`}>
                                        {sub.map((heads, index) => {
                                            return (
                                                <div key={index} className='flex items-center flex-col'>
                                                    <div className='w-7 h-7 rounded-full' style={{ backgroundColor: heads, border: '1px solid gray' }}></div>
                                                    <div className='text-xs font-medium'>
                                                        {heads}
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>


                                </div>
                            )
                        })}
                    </div>
                    {index != collection.length - 1 && <hr className='bg-gray-100' />}
                </div>
            })
        }
        </>
    )
}

export default Filtered
