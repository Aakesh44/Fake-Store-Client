import React, { useContext } from 'react'
import load from "./images/load.png"
import { Link } from 'react-router-dom'
import mencloth1 from "../src/images/mencloth1.webp"
// import men2 from "../src/images/men2.jpg"
import DataContext from './context/DataContext'


const WomenClothMini = () => {
    const {dataElec}=useContext(DataContext)
    const Data=dataElec.filter(n=>n.category==="women's clothing").slice(0,4)
  return (
    <main className="h-48 md:h-72 lg:h-96 md:mb-14 mb-12 bg-gray-5000 shadow-sm flex  items-center border-blue-950 border-1 p-1">

<div className=' h-full w-1/3 md:py-10 mr-auto sticky bg-fuchsia-4000  shadow-md  flex-shrink-0 flex flex-col items-center'>
      <img src={mencloth1} alt="" className=' my-auto lg:h-2/3 '/>
      <span className=' text-center my-auto md:text-xl lg:text-3xl'> Best of Womens clothing</span>
      <button className=' text-fuchsia-800 my-auto md:text-lg lg:text-2xl'><Link to='/WomenClothMain' >View All </Link></button>
    </div>


    <section className='overflow-x-scroll scrollbar-hidden h-48 md:h-72 lg:h-96'>
        <div className='h-full relative w-full flex items-center flex-nowrap gap-4 '>

        {Data ? 
        <>
           {Data.map(n=> 
            <div key={n.id} className=' h-5/6 w-5/6 lg:w-1/3 shadow-md  rounded-md bg-red-00 flex-shrink-0 mx-4 py-1 hover:py-0 cursor-pointer'>
                <Link to={`Productpage/${n.id}`}>
                  <img src={n.image} alt="" className=' relative h-2/4 lg:h-3/5 mx-auto md:mb-5 ' />
                  <h1 className='text-center md:text-xl lg:text-3xl'>{n.title.length >15 ? `${n.title.substring(0, 15)}....` : n.title}</h1>
                  <h1 className='text-center lg:text-xl mt-2 font-semibold text-fuchsia-800'>From {n.price}/-</h1>
                </Link>
            </div>)}
        </>:
        <>
            <div className=' h-5/6 w-5/6 lg:w-1/3 shadow-md rounded-md bg-red-00 flex-shrink-0 mx-4'>
                <img src={load} alt=""  />
                <h1 className=' text-gray-300'>Loading</h1>
            </div>
        </>}


        </div>

    </section>

    </main>
  )
}

export default WomenClothMini