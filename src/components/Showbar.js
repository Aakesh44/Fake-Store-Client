import React,{useContext} from 'react'
import { Link } from 'react-router-dom'
import  DataContext  from '../context/DataContext';

const Showbar = () => {

  const {setMainProduct,linkData}=useContext(DataContext)

  return (
    <main className=''>
      <div className='navtext font-semibold w-full text-2xl md:text-3xl lg:text-4xl xl:text-5xl xl:py-5 mb-5 text-center'>
        Shop our top categories
      </div>

    <main className=" py-8  bg-gradient-to-r from-pink-200 via-pink-100 to-blue-100 bg-opacity-20 min-h-96 gap-1 rounded-xl flex flex-wrap justify-around items-center">

    {linkData.map((n,ind)=>(

      <Link to='/MainProduct' key={ind} className="bg-cover bg-no-repeat bg-center bg-opacity-75  h-80 w-52 md:w-56 xl:w-60  pb-3 mt-3 mb-2 text-white  text-center  rounded-md flex flex-wrap flex-col justify-end items-center cursor-pointer overflow-hidden transform transition duration-500 hover:scale-105 shadow-xl " 
      style={{backgroundImage:`url(${n.img})`}} onClick={()=>setMainProduct(n.category)}>

      <h1 className="mt-1 text-white  w-fit text-2xl text-center font-semibold  leading-tight truncate">{n.category}</h1>
      <h2 className="text-white text-sm ">Starting from Rs. 499</h2>

      </Link>
    ))}



    </main>

  </main>
  )
}

export default Showbar

