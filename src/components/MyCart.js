import React, { useContext, useState } from 'react'
import  DataContext from '../context/DataContext';
import { Link, useNavigate } from 'react-router-dom';
import {  AiFillStar,AiOutlineCloseCircle } from "react-icons/ai";

const MyCart = () => {
  const {mainUser,dataElec,removeFromCart}=useContext(DataContext)
    
  const cartItems = dataElec?.filter(n=> mainUser.cartProducts.includes(n._id))

  const totalPrice = cartItems.reduce( (acc,b)=>{ return  acc + parseInt(b.price) },0 )

  const navigate = useNavigate()
  const [loading,setLoading] = useState(false)
  const removeFromCartItems = () =>{

    setLoading(true)

    for(let i=0;i<cartItems?.length;i++){
      removeFromCart(cartItems[i]?._id)
    }

    setLoading(false)

    navigate('/final')
    
  }

  return (
    <div>
      {cartItems.length === 0 ? 
      
      <>
       <h1 className=' text-3xl text-center py-44'>  Your Cart is empty</h1>
      </>:
          <main>
          <div className=' w-96 h-20 rounded-md flex items-center justify-around bg-fuchsia-300 mx-auto shadow static top-0'>
            <h1 className=' text-lg font-semibold'>Total {totalPrice?.toFixed(1)} ₹</h1>
            <button onClick={removeFromCartItems} className='px-4 py-2 rounded active:scale-95 bg-white font-semibold'>Buy Now</button>
          </div>
          <section   className=' relative flex flex-wrap items-center justify-around p-2'>
                {(loading) &&
                  <section className=' absolute inset-0 light flex items-center justify-center'>
                      <div className='spinner h-full'></div>
                  </section>
                }
          {cartItems.map(n=> 
          
          <section key={n.id} className='relative Card rounded-lg py-5 m-4 w-1/2 md:w-1/3 h-3/4 lg:h-auto lg:w-1/4 xl:w-1/5 p-3'>
          <AiOutlineCloseCircle onClick={()=>removeFromCart(n._id)} className=' absolute top-3 right-3 h-5 w-5 text-gray-600 cursor-pointer'/>
          <div className=' bg-white h-72 xl:h-96 w-full rounded-xl'>
            <div className='w-full h-5/6 md:h-4/6 lg:h-5/6 bg-red-4000 rounded-t-xl flex items-center justify-center p-5 '>
              <img src={n.img} alt="" className=' aspect-square h-full '/>
            </div>

            <div className='w-full h-1/5 md:h-2/6 lg:h-1/6 p-2 flex flex-col justify-around'>
              <div className=' flex md:px-6 lg:px-0'>
                <h1 className=' font-semibold text-xs  md:text-base mr-auto truncate'>{n.title}</h1>
                <h1 className='font-semibold text-xs md:text-base  ml-auto'>₹{n.price}</h1>
              </div>
              <div className='hidden sm:flex md:px-6 lg:px-0'>
                <h1 className='text-xs md:text-sm mr-auto truncate'>{n.description}</h1>
                <h1 className='ml-auto text-xs md:text-sm flex justify-start items-center text-green-600'>{4.3} <AiFillStar/></h1>
              </div>
                <Link to={`Productpage/${n.id}`} className='navtext text-xs md:text-base text-center font-semibold border-2 w-2/5 lg:w-3/5 mx-auto border-fuchsia-600 rounded-xl px-0 md:px-2 focus:bg-fuchsia-600 focus:text-white'>
                    open
                </Link>
            </div>
          </div>
          </section>

          )}
        </section>
            </main>
      }
      
    </div>
  )
}

export default MyCart