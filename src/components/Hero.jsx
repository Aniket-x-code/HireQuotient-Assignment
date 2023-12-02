import React from 'react'
import icon from '../assets/play.png'
import Scroller from './Scroller'

const Hero = () => {
  return (
<div className='bg-gradient-to-b from-[#FDF2EC] to-white'>

    <section class="sticky">
      <div
        class="max-w-lg px-4 sm:pt-14 pt-12 sm:pb-8 mx-auto text-left md:max-w-none md:text-center"
      >
        <div class='text-center py-4 hidden sm:block'>
          <button class="bg-white border border-[#E2E8F0] hover:bg-neutral-200 text-purple-600 text-xd font-normal py-1 px-4 rounded-xl inline-flex items-center">
              👋
            &nbsp; &nbsp;<span> Welcome to Manage Wise! </span>
          </button>
        </div>


        <h1 class="font-bold leading-10 tracking-tight  mx-2 text-[#070505] text-center sm:leading-none text-2xl sm:text-7xl" >
          <span class="inline ">Empower your business with <br />
          <span className='text-[#FE8162]'>Strategic</span> insights </span>
        </h1>

        <p className=' text-[#767575] mt-6 pt-4 font-normal text-xl' >
                Powerful management platform designed to streamline your business <br />
                operations, boost productivity, and drive success
        </p>
      </div>


      <div class="max-w-xl px-4 pb-14 mx-auto text-left md:max-w-none md:text-center" >
            <div className='flex justify-center gap-5'>
                    <button class="group relative h-14 w-48 overflow-hidden rounded-2xl bg-[#8247FF] text-lg font-bold text-white">
                        Get Started
                        <div class="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
                    </button>
                    <button class="group relative h-14 w-48 overflow-hidden rounded-2xl bg-white text-lg font-bold text-black flex items-center justify-center ">
                        Watch demo <img src={icon} alt="" />
                        <div class="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
                    </button>
             </div>

      </div>

    </section>
    <Scroller/>
   

</div>
        
    
  )
}

export default Hero