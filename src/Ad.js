import React from 'react'
import logo from '../src/images/logo.svg'


const Ad = () => {
  return (
    <main className=' md:mb-14 mb-12  flex flex-row justify-center lg:mt-32 '>
      <section>

          <div className=' w-full h-48 md:h-72 lg:h-96 p-1 bg-fuchsia-500 flex rounded-lg '>
            <div className=' w-1/2 h-full  p-3 py-10 md:py-14 md:px-5 md:flex md:flex-col items-center'>
                  <h1 className=' text-white text-xl text-center md:my-auto lg:text-5xl md:text-4xl'>Fake Store</h1>
                  <h1 className="mt-6 text-white md:text-justify md:text-lg md:font-sans lg:text-3xl my-auto">Fake store is an online shoping website model </h1>
            </div>
            <div className=' w-1/2 my-auto h-full lg:h-96 flex items-center'>
                  <img src={logo} alt="" className='lg:h-96 h-44' />
            </div>
          </div>
{/* 
          <div className=' w-full min-h-full p-1 flex mb-10'>
            helllo
          </div>
          <div className=' w-full min-h-full p-1 flex m-0'>
            hello
          </div> */}
      </section>

    </main>
  )
}

export default Ad