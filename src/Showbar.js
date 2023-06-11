import React, { useContext } from 'react'
import electronic1 from "./images/electronic1.webp"
import jewel2 from "../src/images/jewel2.jpg"
import mencloth1 from "../src/images/mencloth1.webp"
import load from "../src/images/load.png"
import { Link } from 'react-router-dom'
import DataContext from './context/DataContext'

const Showbar = () => {

  const {setCategory,handleCategory}=useContext(DataContext)

  return (
    <main className=' flex justify-around bg-fuchsia-00 h-48 md:mb-14 lg:mt-8'>
    <Link to="/ElectronicsMain" className=' w-2/12 text-xs md:text-sm lg:text-lg font-sans md:w-1/5 lg:w-1/6  md:object-contain my-auto  cursor-pointer'>
      <button > 
        <img src={electronic1} alt=''/>
        <h1 className=' text-center'>Electonics</h1>

      </button>
    </Link>

    <Link to='/JewelsMain' className=' w-2/12 text-xs md:text-sm lg:text-lg font-sans md:w-1/5 lg:w-1/6  md:object-contain my-auto cursor-pointer'>
    <div>     <img src={jewel2} alt='' />
        <h1 className=' text-center'>Jewels</h1>
    </div></Link>

    <Link to="/MenClothMain" className=' w-2/12 text-xs md:text-sm lg:text-lg font-sans md:w-1/5 lg:w-1/6  md:object-contain my-auto cursor-pointer'>
    <div > 
        <img src={mencloth1} alt='' />
        <h1 className=' text-center'>Men's</h1>
    </div>
    </Link>

    <Link to="/WomenClothMain" className=' w-2/12 text-xs md:text-sm lg:text-lg font-sans md:w-1/5 lg:w-1/6  md:object-contain my-auto cursor-pointer'>
      <div >
        <img src={mencloth1} alt='' />
        <h1 className=' text-center'>Womens</h1>
    </div>
    </Link>
    
  </main>
  )
}

export default Showbar