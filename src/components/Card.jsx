import React from 'react'
import star from '../assets/star.png';
const Card = () => {
  return (
    <div class=" mt-8  flex items-center justify-center">
    <div class="px-10">
      <div class="bg-[#EDEDFA] max-w-xl rounded-2xl px-10 py-8 shadow-lg hover:shadow-2xl transition duration-500">
       <img src={star} className='rounded-3xl  w-16 h-16 ' alt="" />   
        <div class="mt-2">
          <p class="mt-4 font-bold text-3xl text-black">
                    <br />
                Boost productivity and streamline workflow with us. Enjoy our intuitive interface and robust features.
                    </p>
                    <br />
        </div>
      </div>
      
    </div>
            
         <div className='border-x-2 border-y-2 rounded-lg'>
         <img  className=" rounded-md h-72 " src="https://framerusercontent.com/images/qJeaFhSmQ29M1S55GRW5kYb4.png?scale-down-to=1024" alt="" />
         <h4 className=' ml-2 font-semibold text-2xl'>Smart Task Management</h4>   
         <p className=' ml-2 text-[#868585] mt-2 text-lg '>Say goodbye to chaos with our smart task management system</p>
         </div>   
  </div>
  )
}

export default Card