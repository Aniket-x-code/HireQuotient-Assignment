import React, { useEffect } from 'react'
import AOS from 'aos';
import fr from '../assets/fr.png';
import 'aos/dist/aos.css'

const Scroller = () => {

    useEffect(() => {
        AOS.init({
          duration : 2000
        });
      },[])
    

      
  return (
    <div className=' mx-28 py-6 ' data-aos="fade-up"
    data-aos-duration="3000">
    <img className='animation'  src={fr}  alt="img" />
    </div>
  )
}

export default Scroller