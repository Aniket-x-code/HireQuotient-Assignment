import React, { useEffect } from 'react';
import AOS from 'aos';
import fr from '../assets/fr.png';
import 'aos/dist/aos.css';

const Scroller = () => {
  useEffect(() => {
    const initializeAOS = () => {
      AOS.init({
        duration: 2000
      });
    };

    // Adding a delay to avoid the AOS animation on page load
    const delay = 100;
    const timeoutId = setTimeout(initializeAOS, delay);

    // Clear the timeout when the component unmounts to avoid memory leaks
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className='mx-28 py-6'>
      <img className='animation' data-aos="zoom-in" src={fr} alt="img" />
    </div>
  );
};

export default Scroller;
