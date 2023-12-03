import React from 'react'

import Reviews from './Reviews'


const Testimonial = () => {
  return (
    <div id='test'>
         <div class='text-left ml-8  mt-8 py-4 hidden sm:block'>
                    <button class="bg-white ml-16 mt-20 border border-[#E2E8F0] hover:bg-neutral-200 text-purple-600  font-sm py-1 px-4 rounded-xl inline-flex items-left">
                    🧡&nbsp; &nbsp;<span >TESTIMONIALS</span>
                    </button>
        </div>
        <h1 class="font-semibold leading-10 ml-24   max-w  text-left tracking-tight mt-8 text-black  sm:leading-none   sm:text-6xl" >
                        <span class="inline "> Hear from our  
                        <span className='text-[#FE8162]'> Satisfied</span> clients  </span>
        </h1>

        <p className=' text-[#767575] mt-6 ml-24 pt-4 mb-8 font-normal text-xl text-left'>
        Discover why our clients love working with us. Read their testimonials <br /> and learn how we has helped businesses.
        </p>

       
        <Reviews/>
    </div>
  )
}

export default Testimonial