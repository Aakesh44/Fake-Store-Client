import React, { useContext } from 'react'
import DataContext from './context/DataContext'
import {  AiFillStar } from "react-icons/ai";
import { Link } from 'react-router-dom';


const Buy = () => {
  const{submitted,buy}=useContext(DataContext)
  const total=buy.reduce((sum,n)=>sum+n.price,0)
  console.log(buy);
  console.log(total);
  const number=buy.length
  return (
    <div>
      {!submitted ?
        <>
          <h1>You havent login yet..please login for further process</h1>
        </>:
          <div>
          {buy.length === 0 ? 
          <>
           <h1 className=' text-3xl text-center py-44'>  Your Cart is empty</h1>
          </>:
              <>
              <section   className=' flex flex-wrap border-2 flex-row items-center justify-center '>
              {buy.map(n=> 
              
      
              <div key={n.id} className=' h-36  w-11/12 md:w-5/12 lg:w-3/12  lg:h-72 md:h-44 md:m-5 border m-1 shadow-md flex  '>

   
                    <img src={`${n.image}`} alt="" className=' h-4/5 w-1/2 border-r my-auto m-1'/>
                    <div className=' h-full w-1/2 p-1 flex flex-col'>
                        <h2 className=' text-md lg:text-xl'>{n.title.length > 20 ? `${n.title.substring(0, 25)}...` : n.title}</h2>
                        <h1 className=' text-sm font-semibold text-gray-500 flex md:mt-3 lg:text-lg'>{` From ${n.price} /-`} </h1>
                        <button className='  bg-green-600 px-3 mx-auto md:mt-auto my-1 rounded-sm text-white flex items-center'>
                            {`${n.rating.rate}`}
                            <AiFillStar className=' h-3 w-3 '/>
                        </button>
                    </div> 


              </div>
              
            )}
              <div className=' h-12 md:h-20 mt-4  fixed bottom-0 left-0 w-full flex border-t-2 border-t-gray-100 xl:relative xl:px-3 font-semibold'>

                    <div  className=' w-1/2 h-full flex justify-center items-center bg-slate-50'>
                        <button className=' md:text-xl cursor-pointer'>
                          {total===0?<></>:
                            <>
                              ₹ {total} 
                              <p className=' text-green-600'>free delivery</p>
                            </>
                          }
                        </button>
                    </div>
                    <Link to='/Sold' className=' w-1/2 h-full flex justify-center items-center bg-orange-400'>
                      {/* <div className=' w-1/2 h-full flex justify-center items-center bg-orange-400'> */}
  
                          <button  className=' md:text-xl cursor-pointer'>
                            {number===0?
                            <>
                              oops
                            </>:number===1?
                            <>
                              {number} product Buy Now
                            </>:
                            <>
                              {number} products Buy Now
                            </>}
                            
                          </button>
                      
                      {/* </div> */}
                    </Link>

              </div>
              
            </section>
            <div className=' mt-10 min-w-full flex  bo rder-2 border-fuchsia-600 px-20 mx-auto'>
              <button className='border-2 border-fuchsia-600 px-20 mx-auto'>
                <Link to='/'>Add More</Link>
              </button>
            </div>
            </>
          }
          
        </div>
      }
    </div>
  )
}

export default Buy