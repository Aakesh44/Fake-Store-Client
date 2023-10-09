import React,{useEffect} from 'react'
import adimg2 from '../images/adimg2.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { MdOutlineLocalOffer } from "react-icons/md";


const Ad = () => {
  
  useEffect(() => {
    AOS.init({
      once: true, // Set once option to true
    });
  }, []);

 
  
  return (
    <main 
      data-aos="zoom-in" data-aos-duration='500' 
      className=' w-full Bgclr  text-white xl:px-14 mb-14 xl:mb-24' >
      
      <section className='adsize flex flex-wrap'>

        <div className='w-full h-1/3  md:w-1/2  md:h-full flex gap-2 md:gap-4 lg:gap-6 flex-col items-center justify-center '>
          <h1 className=' navtext font-semibold text-3xl md:text-4xl lg:text-5xl xl:text-7xl text-center'>
              Festival Offer
          </h1>
          <h1 className=' text-center font-semibold lg:text-lg xl:text-xl'>most of the product have this offer</h1>
          <h1 className=' text-center font-semibold lg:text-lg xl:text-xl'>maybe youre the lucky one</h1>

          <MdOutlineLocalOffer className=' absolute top-5 left-6 xl:left-20 xl:top-12 text-white h-5 w-5 lg:h-8 lg:w-8 animate-bounce delay-1000'/>
        </div>

        <div className='w-full h-2/3 md:h-full md:w-1/2'>
              <img src={adimg2} alt="" className=' w-full h-full xl:w-10/12'/>
              
        </div>
      </section>

    </main>
  )
}

export default Ad