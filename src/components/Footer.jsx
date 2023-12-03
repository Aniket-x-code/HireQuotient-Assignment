import React from 'react'
import insta from '../assets/insta.png'
import twitter from '../assets/twitter.png'
import linkdin from '../assets/link.png'

let Links =[
    {name:"Features",link:"#cap"},
    {name:"FAQ",link:"#faq"},
    {name:"Pricing",link:"#pricing"},
    {name:"Testimonial",link:"#test"},
  ];



const Footer = () => {
  return (
   
    <div className='bg-[#FDF2EC] max-h-screen'>
        <div className='md:px-5 py-4 px-7 mb-12 pt-16 md:flex justify-between'> {/* logo */}
            <div >
                <img className='mt-8 h-12 ml-24'  src="https://framerusercontent.com/images/tgELERqZ0nObn14bTi418qTbg.png?scale-down-to=512" alt='logo' />
            </div>
            {/* nav links*/}
            <ul className='pl-9 my-2 md:pl-0  '>
                {
                    Links.map(link => (
                    <li className='my-1 hover:text-purple-600 md:ml-10 mr-4 font-normal text-base '>
                        <a href={link.link} >{link.name}   </a>
                    </li>))
                }
            
            </ul>
        </div>
       
        <div className='md:px-5 py-4 px-7 mb-12 pt-16 md:flex justify-between'>
        <div className='ml-12 '>
            <h3 className='ml-16'>© 2022 ManageWise, Inc.</h3>
        </div>
        <div className='flex'>
            <a href="https://www.instagram.com/"><img src={insta} className='h-8 w-8'  alt="" /></a>
            <a href="https://www.linkedin.com/feed/"><img src={linkdin} className='h-8 w-8'  alt="" /></a>
            <a href="https://twitter.com/home"><img src={twitter} className='h-8 w-8'  alt="" /></a>
        </div>
        </div>
    </div>
  )
}

export default Footer