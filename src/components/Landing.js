import React from 'react'

import { AiOutlineShoppingCart ,AiOutlineLayout} from "react-icons/ai";
import { Link } from 'react-router-dom';
import { Link as ScrollLink} from 'react-scroll';


const Landing = () => {

  return (
    <main className='landbgd select-none bg-red-4000  md:pb-24  h-screen mx-auto w-11/12 sm:w-3/4 lg:w-full flex flex-col lg:flex-row '>

        <section className=' bg-green-5000 landtext w-full  h-1/3 md:h-1/2 lg:w-1/2 lg:h-full  flex flex-col items-center justify-around lg:py-24 md:py-12 xl:py-32' data-aos="fade-right"  data-aos-duration="1000">
            <div className=' text-2xl md:text-3xl xl:text-4xl font-semibold text-center px-16 xl:px-28'>
                <h1>A brand new way to shopping</h1>
                <h1 className='text-3xl md:text-5xl xl:text-7xl xl:mt-5'>Fake Store</h1>
            </div>
            <div className=' flex w-full md:w-4/5 xl:3/5 justify-evenly md:justify-around bg-yell ow-200'>
            <ScrollLink 
                        activeClass='active'
                        to='Showbar'
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        >
                <button className=' p-1 lg:p-2 rounded border-2 flex items-center justify-evenly gap-2 hover:scale-105 border-fuchsia-600 xl:text-xl font-bold'>
                            Explore now
                    <AiOutlineShoppingCart className=' lg:h-6 lg:w-6'/>
                </button>
                </ScrollLink> 
                <Link to='/about' className=' p-1 lg:p-2 rounded border-2  flex items-center justify-evenly gap-2  hover:scale-105 border-fuchsia-600 xl:text-xl font-bold'>
                    LEARN MORE      <AiOutlineLayout className=' lg:h-6 lg:w-6'/>              
                </Link>
            </div>
        </section>
        <section className=' bg-blue-4000 w-full  h-1/2 md:h-1/2 lg:w-1/2 lg:h-full  flex items-center justify-center md: lg:py-0' data-aos="fade-left"  data-aos-duration="1000">
            <img src="https://img.freepik.com/free-vector/online-shopping-concept_52683-63898.jpg?w=1060&t=st=1696589837~exp=1696590437~hmac=ad7ba7c1f2c2d8581675c4dbacb01088d339c1f42c4fda02bbab76275a4aad53" 
            alt="" className=' mb-auto md:mb-0 w-full h-max sm:h-5/6 sm:w-5/6 md:h-5/6 md:w-7/12 lg:w-full lg:h-max xl:h-4/6 xl:w-5/6' />
        </section>

    </main>
  )
}

export default Landing