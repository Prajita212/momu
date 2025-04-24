import React from 'react'
import Home from './home/page'
import About from './about/page'
import Contact from './contact/page'
import Faq from './faq/page'
import Testimonial from './testimonial/page'
import Partners from './partners/page'

function page() {
  return (
    <div>
<Home/>
<About/>
<Contact/>
<Faq/>
<Testimonial/>
     <Partners/> 
    </div>
  )
}

export default page