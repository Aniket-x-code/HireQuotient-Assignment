import React, { useEffect, useState } from 'react'
import figma from '../assets/fif.png'

const Integration = () => {

  const [pos , setPos] = useState(0);

 useEffect(()=> {
  window.addEventListener('scroll', () => {
    console.log(window.scrollY);
    setPos(window.scrollY-3800);
  })
 },[])
 
  return (
    
    <div className='bg-[#1C1C1C]'>
            
        <div class='text-center ml-8   py-4 hidden sm:block'>
            <button class="bg-white ml-16 mt-20 border border-[#E2E8F0] hover:bg-neutral-200 text-purple-600  font-normal py-1 px-4 rounded-xl inline-flex items-left">
            🛠️ &nbsp; &nbsp;<span>INTEGRATIONS </span>
            </button>

            <h1 class="font-semibold leading-10  max-w-2xl justify-center mx-auto text-center tracking-tight mt-8 text-white  sm:leading-none text-2xl sm:text-6xl" >
                        <span class="inline "> Enable
                        <span className='text-[#FE8162]'> integration</span>   with other popular tools and platforms</span>
            </h1>

        <p className=' text-[#767575] mt-6 pt-4 mb-8 font-normal text-xl text-center'>Seamlessly connect and amplify your workflow <br />by enabling integration with a diverse array of <br />widely-used tools and platforms.</p>
          
          <img src={figma} alt=""  style={{bottom:`${pos}px`,position:'relative', color:'white' ,height:'50px', width:'50px', marginLeft:'200px' }}/>
          
        <img className='h-auto mx-auto max-w-lg' src="https://framerusercontent.com/images/sQd7MkwgkdQRRQ1a99k5Z1zLfA.png?scale-down-to=1024" alt="" />
        </div>
    </div>
  )
}

export default Integration