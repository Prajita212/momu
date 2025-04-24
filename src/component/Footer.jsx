import React from 'react'
import image from '../../public/momu4.png'
import Image from 'next/image'
function Footer() {
  return (
      <div className='flex justify-center mt-10'>
      <div className='flex items-center justify-center lg:text-lg md:text-sm text-xs lg:gap-20 md:gap-15 gap-2 bg-[#FFA20C] text-white text-center h-12 w-full lg:w-350'>
       <Image src={image} alt="momu" className='relatie lg:h-17 lg:w-17 md:w-12 md:h-12 w-8 h-8'/>
        <div>
        <p>© {new Date().getFullYear()} Momu. All rights reserved.</p>
</div>
<div className='flex gap-2'>
  <p>Privacy Policy |</p>
  <p> Terms of Use |</p>
  <p>Cookie Policy</p>
</div></div>
      </div> 
  )
}

export default Footer