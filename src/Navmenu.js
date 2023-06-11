import React, { useEffect, useState } from 'react'
// import {RiAccountCircleLine} from  "react-icons/ri";
import { Link } from 'react-router-dom';

const Navmenu = () => {

    const [isActive]=useState(true)

    useEffect(()=>{
        const handleScroll=()=>{
            if (isActive) {
                document.documentElement.style.overflow='hidden'
                document.body.style.overflow = 'hidden';
              } else {
                document.documentElement.style.overflow = 'auto';
                document.body.style.overflow = 'auto';              
            }
        }
        handleScroll();
        window.addEventListener('scroll',handleScroll)
        return()=>{
            window.removeEventListener('scroll',handleScroll);
            document.documentElement.style.overflow = 'auto';
            document.body.style.overflow = 'auto';
        }
    },[isActive])

  return (
    <div style={{ transitionDelay: '3000ms',}}
        className=' bg-red-00 min-w-full h-screen bg-fuchsia-800 transition-transform duration-500 ease-out flex justify-center py-32 absolute top-12 right-0  '>

            {/* <p className='absolute top-3 right-3 h-5 w-5'>
                    {<Link to="/"><AiOutlineClose/></Link>}</p> */}

            <ul >
            <li className=' mb-8  text-white font-semibold font-sans'><Link to='/'>Home</Link></li>
            <li className=' mb-8 text-white font-semibold font-sans'><Link to='/Login'>Login</Link></li>
            <li className=' mb-8 text-white font-semibold font-sans'><Link to='/About'>About</Link></li>
            <li className=' mb-8 text-white font-semibold font-sans'><Link to='/MyCart'>MyCart</Link></li>
            <li className=' mb-8 text-white font-semibold font-sans'><Link to='/Me'>Profile</Link></li>
            
            </ul>


    </div>
  )
}

export default Navmenu