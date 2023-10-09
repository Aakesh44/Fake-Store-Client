import React from 'react'
import { useContext } from 'react';
import  DataContext from '../context/DataContext';
import { Link } from 'react-router-dom';
import boy from '../images/boy.png'
import address from '../images/home-address.png'
import like from '../images/wishlist.png'
import cart from '../images/shopping-cart.png'
import order from '../images/order.png'
import contact from '../images/operator.png'
import Profile from './Profile';
import { useState } from 'react';
import {  AiFillStar,AiOutlineHeart,AiFillHeart,AiOutlineCloseCircle } from "react-icons/ai";
import Orders from './Orders';

const Me = () => {

      
  const {mainUser,dataElec,likeProduct,dislikeProduct,removeFromCart,getOrder}=useContext(DataContext)

  const [option,setOption] = useState('profile')
    
  const likes = dataElec?.filter(n=> mainUser?.likedProducts?.includes(n._id))

  function handleLike(productId) {
    if(!checkLike(productId)){
      likeProduct(productId)
    }
    else{
      dislikeProduct(productId)
    }
  
  }

  function checkLike(productId) {
    return mainUser?.likedProducts?.includes(productId)
  }
  const cartItems = dataElec?.filter(n=> mainUser?.cartProducts?.includes(n._id))
  return (
    <main className='Card Mecard relative w-full rounded-3xl  mt-5  mx-auto mb-16 xl:mt-0 flex flex-col md:flex-row justify-center items-start lg:items-center  xl:py-12'>

      <section  className='boxes mb-auto w-full md:w-1/3  grid flex-wrap gap-5 p-5'>

        <div onClick={()=>setOption('profile')} className={`${option === 'profile' && 'shadow-md shadow-fuchsia-500 transition'}`}>
            <img src={boy} alt=""/>
            <h1 className=''>Profile</h1>
        </div>
        <div onClick={()=>setOption('address')} className={`${option === 'address' && 'shadow-md shadow-fuchsia-500 transition'}`}>
            <img src={address} alt="" />
            <h1>Address</h1> 
        </div>        
        <div onClick={()=>setOption('wishlist')} className={`${option === 'wishlist' && 'shadow-md shadow-fuchsia-500 transition'}`}>
            <img src={like} alt="" />
            <h1>WishList</h1>
        </div>        
        <div onClick={()=>setOption('cartitems')} className={`${option === 'cartitems' && 'shadow-md shadow-fuchsia-500 transition'}`}>
            <img src={cart} alt="" />
            <h1>Cart Items</h1>
        </div>        
        <div onClick={()=>{setOption('orders');getOrder()}} className={`${option === 'orders' && 'shadow-md shadow-fuchsia-500 transition'}`}>
            <img src={order} alt="" />
            <h1>Orders</h1>
        </div>
        <div onClick={()=>setOption('contact')} className={`${option === 'contact' && 'shadow-md shadow-fuchsia-500 transition'}`}>
            <img src={contact} alt="" />
            <h1>Contact</h1>
        </div>
      </section>

      <section className=' w-full md:w-2/3 min-h-max border mr-2' >

        {option === 'profile' ?
          <Profile/>:
         option === 'address' ?
          <main className='profiledetails w-full h-full'>
            <header className='w-full h-20  border-b-2 p-2 mb-5 text-xl font-semibold flex items-center'>Address Details</header>

            <div>
              <h1>Full Name</h1>
              <h2>{mainUser?.username}</h2>
            </div>
            <div>
              <h1>Land Mark</h1>
              <h2>{mainUser?.landmark}</h2>
            </div>
            <div>
              <h1>Area</h1>
              <h2>{mainUser?.area}</h2>
            </div>
            <div>
              <h1>District</h1>
              <h2>{mainUser?.dist || '- not added -'}</h2>
            </div>
            <div>
              <h1>Pincode</h1>
              <h2>{mainUser?.pincode|| '- not added -'}</h2>
            </div>

          </main>:
          option === 'wishlist' ?

          <main className=' flex flex-wrap border-2 w-full flex-row items-center justify-center p-5 '>
          {likes.map(n=> 
          
            <section key={n.id} className='Card relative rounded-lg w-1/2 h-3/4 lg:h-auto lg:w-1/3 p-3'>

            {checkLike(n._id) ? 
            <AiFillHeart onClick={()=>handleLike(n._id)} className= ' text-purple-800  absolute right-2 top-2 xl:h-5 xl:w-5 cursor-pointer'/>:
            <AiOutlineHeart onClick={()=>handleLike(n._id)} className= ' text-purple-800 absolute right-2 top-2 xl:h-5 xl:w-5 cursor-pointer'/>
            }
            
            <div className=' bg-white h-full  lg:h-72 xl:h-80 w-full rounded-xl'>
              <div className='w-full h-4/6 lg:h-4/6 bg-white rounded-t-xl flex items-center justify-center p-3 sm:p-10 '>
                <img src={n.img} alt="" className=' aspect-square w-full h-full '/>
              </div>

              <div className='w-full h-2/6 lg:h-2/6 p-2 flex flex-col gap-2 justify-around'>
                <div className=' flex  justify-between md:px-3 lg:px-0'>
                  <h1 className=' font-semibold text-xs  md:text-base mr-auto overflow-hidden whitespace-nowrap text-ellipsis'>{ n.title}</h1>
                  <h1 className='font-semibold text-xs md:text-base  ml-auto'>₹{n.price}</h1>
                </div>
                <div className=' flex justify-center md:px-3 lg:px-0'>
                  <h1 className='text-xs md:text-sm mr-auto overflow-hidden whitespace-nowrap text-ellipsis'>{ n.description}</h1>
                  <h1 className='ml-auto text-xs md:text-sm flex justify-start items-center text-green-600'>{n.rating.rate} <AiFillStar/></h1>
                </div>
                  <Link to={`/Productpage/${n.id}`} className='navtext text-xs md:text-base text-center font-semibold border-2 p-1 px-3 mx-auto border-fuchsia-600 rounded-xl md:px-2 focus:bg-fuchsia-600 focus:text-white'>
                      open
                  </Link>
              </div>
            </div>
            </section>
        )}
          </main>:
          option === 'cartitems' ?

          <main   className=' flex flex-wrap border-2 flex-row gap-5 items-center p-2 justify-center '>
              {cartItems.map(n=> 
              
              <section key={n.id} className='relative Card rounded-lg w-1/2 h-3/4 lg:h-auto lg:w-1/3 p-3'>

              <AiOutlineCloseCircle onClick={()=>removeFromCart(n._id)} className=' absolute top-3 right-3 h-5 w-5 text-gray-600 cursor-pointer'/>

              <div className=' bg-white h-full  lg:h-72 xl:h-80 w-full rounded-xl'>
                <div className='w-full h-4/6 lg:h-4/6 bg-white rounded-t-xl flex items-center justify-center p-3 md:p-5 xl:p-10'>
                  <img src={n.img} alt="" className=' aspect-square lg:w-full lg:h-full '/>
                </div>

                <div className='w-full h-2/6 lg:h-2/6 p-2 flex flex-col justify-around'>
                  <div className=' flex md:px-6 lg:px-0'>
                    <h1 className=' font-semibold text-xs  md:text-base mr-auto'>{n.title.length >15 ? `${n.title.substring(0, 15)}....` : n.title}</h1>
                    <h1 className='font-semibold text-xs md:text-base  ml-auto'>₹{n.price}</h1>
                  </div>
                  <div className=' flex md:px-6 lg:px-0'>
                    <h1 className='text-xs md:text-sm mr-auto'>{n.description.length >15 ? `${n.description.substring(0, 15)}....` : n.description}</h1>
                    <h1 className='ml-auto text-xs md:text-sm flex justify-start items-center text-green-600'>{n.rating.rate} <AiFillStar/></h1>
                  </div>
                    <Link to={`/Productpage/${n.id}`} className='navtext text-xs md:text-base text-center font-semibold border-2 w-2/5 lg:w-3/5 mx-auto border-fuchsia-600 rounded-xl px-0 md:px-2 focus:bg-fuchsia-600 focus:text-white'>
                        open
                    </Link>
                </div>
              </div>
              </section>              
              )}
          </main>:
          option === 'orders' ?
          <Orders/>:
          option === 'contact' &&
          <></>
        }



      </section>
    </main>
  )
}

export default Me

null
      {/* {mainUser ? 
        <div className='w-full md:w-1/2'>
          <Profile/>
        </div>
        :
        <div className=' w-4/5 flex f mt-6  mb-3 justify-center items-center lg:w-3/5 text-2xl'>
          <Link to='/Login'><p className=' underline text-2xl mx-3'>Sign-up</p></Link>
          <Link to='/Login'><p className=' underline text-2xl mx-3'>Login</p></Link>
        </div>
      }

      <div className=' w-1/2   flex flex-col justify-center items-center flex-wrap bg-red-3000 my-6'>
        <Link to='' className='w-full md:w-1/2 p-2  cursor-pointer'>
          <button  className='border-2 w-full px-3 py-2 border-fuchsia-800 rounded-md xl:border-4 xl:text-lg '>Orders</button>
        </Link>
          <Link to='/Like' className='w-full md:w-1/2 p-2 cursor-pointer'>
          <button className=' border-2  w-full px-3 py-2 border-fuchsia-800 rounded-md xl:border-4 xl:text-lg'>Wishlist</button>
        </Link>
          <Link to='' className=' w-full md:w-1/2 p-2 cursor-pointer'>
          <button className='border-2  w-full px-3 py-2 border-fuchsia-800  rounded-md xl:border-4 xl:text-lg'>Coupons</button>
        </Link>
          <Link to='' className=' w-full md:w-1/2 p-2 cursor-pointer'>
          <button className='border-2  w-full px-3 py-2 border-fuchsia-800  rounded-md xl:border-4 xl:text-lg'>Help Center</button>
        </Link>
      </div>
 */}
