import Image from 'next/image'
import Button from './sub-components/Button'

const Specials = () => {

  return (
    <div className='flex flex-col'>


      {/* First Line */}

      <div className='flex flex-col sm:flex-row'>

        <div>
          <div className='pics flex flex-col px-6 py-0 md:py-6 mdx:px-12 mdx:py-12 gap-6 justify-end text-white absolute z-20'>

            <div className='flex flex-col gap-2'>
              <h1 className='text-base font-semibold' style={{ letterSpacing: '-0.5px' }}>Congratulations Madison Keys</h1>
              <h1 className='text-2xl' style={{ fontWeight: '500', letterSpacing: '-0.5px' }}>It Doesn't Happen Overnight. Until It Does.</h1>
            </div>

            <div>
              <Button text='Shop' tColor='#0c0c0c' color='white' hoverColor='lightgray' />
            </div>
          </div>
          <div className='relative z-10'>
            <Image width={1000} height={1000} className='sm:w-[50vw] hidden md:block' src='/Images/nike-just-do-it.webp' alt='Just do its' />
            <Image width={1000} height={1000} className='sm:w-[50vw] block md:hidden' src='/Images/nike-just-do-it-m.webp' alt='Just do its' />
          </div>
        </div>

        <div>
          <div className='pics flex flex-col px-6 py-0 md:py-6 mdx:px-12 mdx:py-12 gap-6 justify-end text-white absolute z-20'>

            <div className='flex flex-col gap-2'>
              <h1 className='text-base font-semibold' style={{ letterSpacing: '-0.5px' }}>Essentials For Your Every Mile</h1>
              <h1 className='text-2xl' style={{ fontWeight: '500', letterSpacing: '-0.5px' }}>Run Ready</h1>
            </div>

            <div>
              <Button text='Shop' tColor='#0c0c0c' color='white' hoverColor='lightgray' />
            </div>
          </div>

          <div className='relative z-10'>
            <Image width={1000} height={1000} className='sm:w-[50vw] hidden md:block' src="/Images/nike-just-do-it(1).webp" alt='Just do its' />
            <Image width={1000} height={1000} className='jump sm:w-[50vw] block md:hidden' src="/Images/nike-just-do-it-m(1).webp" alt='Just do its' />
          </div>
        </div>

      </div>

      {/* Second Line */}

      <div className='flex flex-col sm:flex-row'>

        <div>
          <div className='pics flex flex-col px-6 py-[4.6rem] md:py-6 mdx:px-12 mdx:py-12 gap-6 justify-end text-white absolute z-20'>

            <div className='flex flex-col gap-2'>
              <h1 className='text-base font-semibold' style={{ letterSpacing: '-0.5px' }}>Mad Energy Can't Be Stoped</h1>
              <h1 className='text-2xl' style={{ fontWeight: '500', letterSpacing: '-0.5px' }}>New in Nike Soccer</h1>
            </div>

            <div>
              <Button text='Shop' tColor='#0c0c0c' color='white' hoverColor='lightgray' />
            </div>
          </div>

          <div className='relative z-10'>
            <Image width={1000} height={1000} className='image sm:w-[50vw] hidden md:block' src="/Images/nike-just-do-it(2).webp" alt='Just do its' />
            <Image width={1000} height={1000} className='image block md:hidden sm:w-[50vw]' src="/Images/nike-just-do-it-m(2).webp" alt='Just do its' />
          </div>
        </div>

        <div>
          <div className='pics flex flex-col px-6 py-[4.6rem] md:py-6 mdx:px-12 mdx:py-12 gap-6 justify-end text-white absolute z-20'>

            <div className='flex flex-col gap-2'>
              <h1 className='text-base font-semibold' style={{ letterSpacing: '-0.5px' }}>Get Comfortable With Winning</h1>
              <h1 className='text-2xl' style={{ fontWeight: '500', letterSpacing: '-0.5px' }}>Nike Bras</h1>
            </div>

            <div>
              <Button text='Shop' tColor='#0c0c0c' color='white' hoverColor='lightgray' />
            </div>
          </div>

          <div className='relative z-10'>
            <Image width={1000} height={1000} className='sm:w-[50vw] hidden md:block' src="/Images/nike-just-do-it(3).webp" alt='Just do its' />
            <Image width={1000} height={1000} className='sm:w-[50vw] block md:hidden' src="/Images/nike-just-do-it-m(3).webp" alt='Just do its' />
          </div>
        </div>

      </div>
    </div>
  )
}

export default Specials
