import React, { useContext } from 'react'
import DataContext from './context/DataContext'
import { Link } from 'react-router-dom'
import load from "./images/load.png" 
import {  AiFillStar,AiOutlineHeart } from "react-icons/ai";

const WomenClothMain = () => {
  const {dataElec,likeProduct}=useContext(DataContext)
  const Data=dataElec.filter(n=>n.category==="women's clothing")

  return (

    <main className=' border-2 border-fuchsia-700 flex flex-col mt-10 mb-20'>
        <section className=' border-b-2 py-16'>
        <h1 className=' text-center  md:text-2xl'>Best of women's clothing</h1>
        {Data ? <p className=' text-center  md:text-xl'>{Data.length} products</p>:<p className=' text-center  md:text-xl'>no results</p>}
        
        </section>

        <section className=' flex flex-wrap flex-row items-center justify-center '>
          {Data ?
          <>
        {Data.map(n=> 

<div key={n.id} className=' h-36 w-11/12 md:w-5/12 lg:w-3/12  lg:h-72 md:h-44 md:m-5 border m-1 shadow-md flex'>

    <img src={`${n.image}`} alt="" className=' h-4/5 w-1/2 border-r my-auto m-1'/>
    <div className=' h-full w-1/2 p-1 flex flex-col'>
    <h2 className=' text-md lg:text-xl'>{n.title.length > 20 ? `${n.title.substring(0, 25)}...` : n.title}</h2>
        <h1 className=' text-sm font-semibold text-gray-500 flex md:mt-3 lg:text-lg'>{` From ${n.price} /-`} 
          <AiOutlineHeart onClick={()=>likeProduct(n)} className=' ml-auto mr-1 lg:mr-6 lg:h-6 lg:w-6'/></h1>
        <button className='  bg-green-600 px-3 mx-auto md:mt-auto my-1 rounded-sm text-white flex items-center'>
          {`${n.rating.rate}`}
          <AiFillStar className=' h-3 w-3 '/></button>
          <Link to={`Productpage/${n.id}`}>
            <button className=' bg-fuchsia-800 mx-5 md:mt-auto md:mb-1 rounded-md text-white lg:py-2 lg:mb-4'>Buy Now </button>
          </Link>
    </div> 
</div>)}
          </>:
          <>
            <p> <Link to='/'>loading you better go to home page</Link></p>
          </>}
        </section>
    </main>
    
  )
}

export default WomenClothMain