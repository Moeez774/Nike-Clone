import React from 'react'

const About = () => {
  return (
    <div className='flex flex-col gap-6'>
      
      {/* logo */}

      <div className='flex justify-center'>
      <svg aria-hidden="true" className="swoosh-svg w-16 h-16" style={{ transform: 'scale(1.33)' }} focusable="false" width="24px" height="24px" viewBox="0 0 24 24" role="img" fill="none"><path fill="currentColor" fillRule="evenodd" d="M21 8.719L7.836 14.303C6.74 14.768 5.818 15 5.075 15c-.836 0-1.445-.295-1.819-.884-.485-.76-.273-1.982.559-3.272.494-.754 1.122-1.446 1.734-2.108-.144.234-1.415 2.349-.025 3.345.275.2.666.298 1.147.298.386 0 .829-.063 1.316-.19L21 8.719z" clipRule="evenodd"></path></svg>
      </div>

      {/* Options */}

      <div className='flex justify-center font-semibold gap-8'>
        <h1 className='miniNavBtns'>Find a Store</h1>
        <h1 className='miniNavBtns'>Help</h1>
        <h1 className='miniNavBtns'>Join Us</h1>
        <h1 className='miniNavBtns'>Sign In</h1>
      </div>
    </div>
  )
}

export default About
