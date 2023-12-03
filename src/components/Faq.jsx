import React from 'react'
import Accordian from './Accordian'

const Faq = () => {
  return (
    <>
    <div class=' ml-8  flex flex-row  py-4  mb-16 '>
         <div className='basis-1/2'>
            <button class="bg-white ml-16 mt-20 border border-[#E2E8F0] hover:bg-neutral-200 text-purple-600  font-normal py-1 px-4 rounded-xl inline-flex items-left">
            🙋🏽‍♀️&nbsp;&nbsp;<span>FAQ </span>
            </button>
            <h1 class="font-semibold leading-10 ml-16  max-w-2xl justify-center  text-left tracking-tight mt-8 text-black  sm:leading-none text-2xl sm:text-6xl" >
                        <span class="inline "> Need 
                        <span className='text-[#FE8162]'> Answers ?</span>  </span>
            </h1>
         </div>
         <div className='basis-1/2'>
         <p className=' text-[#767575] ml-16 mt-28 pt-4 mb-8 font-semibold text-3xl text-left bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent '>Check out our most commonly asked questions below to find the information <br /> you need.</p>
         </div>
          
    </div>
    <Accordian/>
    </>
  )
}

export default Faq