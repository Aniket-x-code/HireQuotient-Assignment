import React from 'react'
const Header = () => {

    let Links =[
        {name:"Features",link:"#cap"},
        {name:"FAQ",link:"#faq"},
        {name:"Pricing",link:"#pricing"},
        {name:"Testimonial",link:"#test"},
      ];


  return (
    <div className='bg-[#FDF2EC] border-b-[1px] '>
        <div className='md:px-5 py-4 px-7 md:flex justify-between'> {/* logo */}
            <div >
                <img className='kol'  src="https://framerusercontent.com/images/tgELERqZ0nObn14bTi418qTbg.png?scale-down-to=512" alt='logo' />
            </div>
            {/* nav links*/}
            <ul className='md:flex pl-9 my-2 md:pl-0  '>
                {
                    Links.map(link => (
                    <li className='my-1 hover:text-purple-600 md:ml-10 mr-4 font-normal text-base '>
                        <a href={link.link} >{link.name}   </a>
                    </li>))
                }
               <a href="https://templatesunit.lemonsqueezy.com/checkout">
               <button  className= " bg-white  border rounded-lg border-black px-3 md:ml-8 py-2 shadow text-base font-bold">Buy Template</button></a> 
            </ul>
        </div>
    </div>
  )
}

export default Header