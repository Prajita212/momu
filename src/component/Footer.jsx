import React from 'react'
import image from '../../public/momu4.jpg'
import Image from 'next/image'
function Footer() {
  return (
      <div className='flex items-center justify-center md:text-lg text-xs md:gap-20 gap-7 bg-[#FFA20C] text-white text-center h-12'>
       <Image src={image} className='relatie w-20 h-10'/>
        <div>
        <p>© {new Date().getFullYear()} Momu. All rights reserved.</p>
</div>
<div className='flex'>
  <p>Privacy Policy |</p>
  <p> Terms of Use |</p>
  <p>Cookie Policy</p>
</div>
      </div> 
  )
}

export default Footer