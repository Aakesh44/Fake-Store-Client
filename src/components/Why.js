import React from 'react'
import { BiSupport } from "react-icons/bi";
import { AiOutlineFileProtect } from "react-icons/ai";
import { MdOutlineCardMembership } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";

const Why = () => {
  return (
    <main className=' w-full mt-14'>
       <div className='navtext font-semibold w-full text-2xl md:text-3xl lg:text-4xl xl:text-5xl xl:py-5 mb-5 text-center'>
        Why choose us
      </div>

      <section className=' w-full bg-gradient-to-r from-pink-100 to-blue-100 bg- fuchsia-50 flex items-center justify-center flex-wrap  mb-14 xl:mb-24'>
        <div className='w-3/4 flex items-center justify-center md:w-1/2 lg:w-1/3 xl:w-1/4 h-full p-4 xl:p-8'>
          <div className=' bg-white info rounded-md p-3'>
            <BiSupport className='h-6 w-6 md:h-7 md:w-7 xl:h-8 xl:w-8 text-red-500 mb-2 xl:mb-4'/>
           <h1 className='text-lg md:text-xl xl:text-2xl font-semibold mb-2 xl:mb-4'> online support 24/7</h1>
           <h1 className=' text-start xl:text-lg'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam, ullam saepe veniam maiores dolores explicabo,</h1>
          </div>
        </div>
        <div className='w-3/4 flex items-center justify-center  md:w-1/2 lg:w-1/3 xl:w-1/4 h-full p-4 xl:p-8'>
          <div className=' bg-white info info rounded-md p-3'>
            <AiOutlineFileProtect className=' h-6 w-6 md:h-7 md:w-7 xl:h-8 xl:w-8 text-green-500 mb-2 xl:mb-4'/>
           <h1 className=' text-lg md:text-xl xl:text-2xl font-semibold mb-2 xl:mb-4'> Quality Products</h1>
           <h1 className=' text-start xl:text-lg'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam, ullam saepe veniam maiores dolores explicabo,</h1>
          </div>
        </div>
        <div className='w-3/4 flex items-center justify-center  md:w-1/2 lg:w-1/3 xl:w-1/4 h-full p-4 xl:p-8'>
          <div className=' bg-white info rounded-md p-3'>
            <MdOutlineCardMembership className='h-6 w-6 md:h-7 md:w-7 xl:h-8 xl:w-8 text-sky-500 mb-2 xl:mb-4'/>
           <h1 className=' text-lg md:text-xl xl:text-2xl font-semibold mb-2 xl:mb-4'> Member discount</h1>
           <h1 className=' text-start xl:text-lg'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam, ullam saepe veniam maiores dolores explicabo,</h1>
          </div>
        </div>
        <div className='w-3/4 flex items-center justify-center  md:w-1/2 lg:w-1/3 xl:w-1/4 h-full p-4 xl:p-8'>
          <div className=' bg-white info rounded-md p-3'>
            <GiReceiveMoney className='h-6 w-6 md:h-7 md:w-7 xl:h-8 xl:w-8 text-yellow-500 mb-2 xl:mb-4'/>
           <h1 className=' text-lg md:text-xl xl:text-2xl font-semibold mb-2 xl:mb-4'> Money return</h1>
           <h1 className=' text-start xl:text-lg'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam, ullam saepe veniam maiores dolores explicabo,</h1>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Why