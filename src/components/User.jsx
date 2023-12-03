import React from 'react'
import Avatarblock from './Avatarblock'

const User = () => {
  return (
    <div className='bg-gradient-to-b from-white to bg-[#FDF2EC]' >
        <div className='bg-white  shadow-2xl   mx-28 rounded-xl grid grid-cols-1 sm:grid-cols-2  lg:grid-cols- gap-6 border-[1px] py-8' >
            <div>
                <div class='text-left ml-20  pt-12 pb-8 hidden sm:block'>
                            <button class="bg-white ml-4 mt-2 border border-[#E2E8F0] hover:bg-neutral-200 text-purple-600  font-normal py-1 px-4 rounded-xl inline-flex items-left">
                            👋 &nbsp; &nbsp;<span>DON'T MISS OUT </span>
                            </button>
                </div>
                  <div className='text-left ml-8 mt-2 mb-8'>
                     <h1 class="font-bold text-left  leading-14 tracking-tight  mx-16 text-black  sm:leading-none text-xl sm:text-5xl" >
                    <span >Unleash  your <br />  
                    <span className='text-[#FE8162] text-left'>  Potential</span>  with  us
                     </span>
                     </h1>
                 </div> 

                 <p className=' text-[#767575] ml-24 mt-6 pt-4 font-normal text-xl text-left' >
                 Join our community of ambitious <br /> individuals and organizations eager to <br /> make a difference.
                 </p>  
                 <a href="https://templatesunit.lemonsqueezy.com/checkout">
                 <button class="group relative mt-8 h-14 w-48 ml-24 overflow-hidden rounded-2xl bg-[#8247FF] text-lg font-bold text-white">
                        Try out now
                        <div class="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
                    </button>
                    </a>  
                </div>
                <div>
                    <Avatarblock/>
                </div>
        </div>
        
    </div>
  )
}

export default User