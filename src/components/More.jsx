import React from 'react'
import Pdtcard from './Pdtcard'

const More = () => {
  return (
      <div className='bg-[#1C1C1C] '>
            
                <div class='text-left ml-8  mt-16 py-4 hidden sm:block'>
                    <button class="bg-white ml-16 mt-20 border border-[#E2E8F0] hover:bg-neutral-200 text-purple-600  font-normal py-1 px-4 rounded-xl inline-flex items-left">
                    🤩 &nbsp; &nbsp;<span>AND MORE </span>
                    </button>
                </div>
                
                <div className='text-left ml-8 mt-8 mb-8'>
                <h1 class="font-bold  leading-10 tracking-tight  mx-16 text-white  sm:leading-none text-xl sm:text-5xl" >
                    <span >Explore an array of features that elevate your <br /> 
                    <span className='text-[#FE8162] text-left'> Productivity</span>  to new heights
                     </span>
                 </h1>
                 </div> 

                 <p className=' text-[#767575] ml-24 mt-6 pt-4 font-normal text-2xl text-left' >
                 Discover the tools that will revolutionize the way you <br />
                 manage and optimize your operations
                 </p>   

              <Pdtcard/>


      </div>
  )
}

export default More