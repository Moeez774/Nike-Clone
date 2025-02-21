import React from 'react'
import './Help.css'
import { Search } from 'lucide-react'

const Help = () => {
    return (
        <div className='flex flex-col justify-center gap-16 relative z-30'>

            {/* Help Input */}

            <div className='flex flex-col gap-2 justify-center items-center'>

                <h1 className='text-3xl font-medium text-center' style={{ letterSpacing: '0.5px' }}>GET HELP</h1>

                <div className="inputGroup flex justify-between">
                    <input autoComplete="off" required={true} type="text" />
                        <label htmlFor="name" className='font-semibold px-1 py-4'>What can we help you with?</label>
                        <div className='flex items-center cursor-pointer my-1 py-3 px-[0.85rem] rounded-full hover:bg-gray-100 transition-all duration-300 translate-y-0'>
                        <Search size={20} color='gray' />
                        </div>
                </div>
            </div>

            <div className='flex flex-col gap-3 w-10/12 mx-auto'>
                <h1 className='text-3xl font-medium'>Get a personalized Help experience.</h1>

                <div>
                <button className='bg-black text-white hover:bg-[gray] py-3 px-6 rounded-3xl'>Sign In</button>
                </div>

                <h1 className='text-sm'>Not a member yet? <a href="" className='font-medium text-sm' style={{ textDecoration: 'underline', textDecorationThickness: 2 }}>Join Us</a></h1>
            </div>

        </div>
    )
}

export default Help
