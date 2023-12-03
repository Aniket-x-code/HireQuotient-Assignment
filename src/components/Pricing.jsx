import React from 'react'
import Pricecard from './Pricecard'

const Pricing = () => {
  return (
    <div>
            <div class='text-center mt-16 py-4 hidden sm:block'>
            <button class="bg-white border border-[#E2E8F0] mt-8 hover:bg-neutral-200 text-purple-600  font-normal py-1 px-4 rounded-xl inline-flex items-center">
            💲
             &nbsp;<span>PRICING</span>
            </button>
             </div>
             <h1 class="font-semibold leading-10  max-w-3xl justify-center mx-auto text-center tracking-tight mt-8 text-black  sm:leading-none text-xl sm:text-6xl" >
                        <span class="inline "> Select your ideal
                        <span className='text-[#FE8162]'> pricing</span> plan</span>
            </h1>

            <p className=' text-[#767575] mt-6 pt-4 font-normal text-xl text-center' >
            At Manage Wise, we believe in providing you with <br /> pricing plans that adapt to your unique needs.
            </p>

            <Pricecard/>
    </div>
  )
}
export default Pricing