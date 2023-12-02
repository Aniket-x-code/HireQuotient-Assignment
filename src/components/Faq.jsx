import React from 'react'

const Faq = () => {
  return (
    <div class=' ml-8   py-4 hidden sm:block'>
         <div>
            <button class="bg-white ml-16 mt-20 border border-[#E2E8F0] hover:bg-neutral-200 text-purple-600  font-normal py-1 px-4 rounded-xl inline-flex items-left">
            🙋🏽‍♀️&nbsp;&nbsp;<span>FAQ </span>
            </button>

            <h1 class="font-semibold leading-10 ml-16  max-w-2xl justify-center  text-left tracking-tight mt-8 text-black  sm:leading-none text-2xl sm:text-6xl" >
                        <span class="inline "> Need <br />
                        <span className='text-[#FE8162]'> Answers ?</span>  </span>
            </h1>

           <p className=' text-[#767575] ml-16  mt-6 pt-4 mb-8 font-normal text-xl text-left'>Check out our most commonly <br /> asked questions below to find the <br /> information you need.</p>
           </div>
        </div>
  )
}

export default Faq