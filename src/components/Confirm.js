import React, { useContext, useState } from 'react'
import DataContext from '../context/DataContext'
import axios from 'axios'
import PropTypes from 'prop-types';

const Confirm = ({setdone}) => {

    const {memoizedBuyProduct,dataElec,mainUser,buyProduct} = useContext(DataContext)

    const [loading,setLoading] = useState(false)
    
    const placeOrder = async () =>{
    
        setLoading(true)
        
        try {
          const config = {
              headers: {
                  "Content-Type":"application/json"
              }
          }
    
          const response = await axios.post(
              "https://fake-store-server.vercel.app/orderPlace",
              {
                userId:mainUser?._id,
                productId: memoizedBuyProduct.buyProduct.productId,
                count:memoizedBuyProduct.buyProduct.counts,
                price:memoizedBuyProduct.buyProduct.price
              },
              config
          )
          
          console.log('edited');
          setLoading(false)
          // handleGetUser()
          console.log(response.data);
          setdone(true)
      } 
      catch (err) {
          console.log(err.message);
        //   setError(true)
      }
      }

    console.log(memoizedBuyProduct.buyProduct);
    console.log(buyProduct);
    const product = dataElec.find(n=> n._id === memoizedBuyProduct.buyProduct.productId)

  return (
    <main className=' relative w-full h-fit select-none border-2 border-black flex justify-center'>
        <h1 className=' absolute top-1 left-4 mb-3 font-mono'>-- Dont go back or reload the page --</h1>
        <section className=' w-10/12 my-10 relative'>
            <header className=' h-42 w-full bg-fuchsia-400 rounded-sm flex items-center '>
                <div className=' h-full w-fit px-5 text-xs md:text-sm font-semibold'>
                    <h1 className=' text-sm md:text-base mb-2 whitespace-nowrap text-center'>Ship To</h1>
                    <h1>{mainUser?.username}</h1>
                </div>
                <div className=' h-full w-fit px-5 text-xs md:text-sm font-semibold'>
                    <h1 className=' text-sm md:text-base mb-2 text-center'>Total</h1>
                    <h1 className=' whitespace-nowrap'>₹ {memoizedBuyProduct.buyProduct.price}</h1>
                </div>
                <div className=' h-full w-fit px-5 text-xs md:text-sm font-semibold text-center'>
                    <h1 className=' text-sm md:text-base mb-2'>Count</h1>
                    <h1 className=' '>{memoizedBuyProduct.buyProduct.counts}</h1>
                </div>

                <h1 className=' text-base md:text-xl font-semibold mx-auto'>Delivery in 3 days</h1>
            </header>

            <aside className=' w-full my-5 flex flex-wrap items-center justify-around'>
                <img style={{maxWidth:'300px'}} src={product?.img} alt="" className=' w-60 md:w-96 lg:w-3/4 xl:w-1/3 shadow max-w-sm aspect-square '/>

                <div className=' lg:w-1/2 xl:w-1/3 overflow-hidden p-10'>
                    <h1 className=' text-xl font-semibold mb-10'>{product?.title}</h1>
                    <h1>{product?.description?.slice(0,200)}</h1>

                </div>

                <div className=' 10/12 md:w-3/4 lg:w-1/2  xl:w-1/3 p-10 flex flex-col'>
                    <span style={{gridTemplateColumns:'repeat(2,1fr)'}} className='grid border my-2 py-2 p-1 '><h1>Mobile Number</h1><h1 className=' overflow-hidden text-ellipsis whitespace-nowrap'>{mainUser?.phone}</h1></span>
                    <span style={{gridTemplateColumns:'repeat(2,1fr)'}} className='grid border my-2 py-2 p-1 '><h1>Landmark</h1>     <h1 className=' overflow-hidden text-ellipsis whitespace-nowrap'>{mainUser?.landmark}</h1></span>
                    <span style={{gridTemplateColumns:'repeat(2,1fr)'}} className='grid border my-2 py-2 p-1 '><h1>Area</h1>         <h1 className=' overflow-hidden text-ellipsis whitespace-nowrap'>{mainUser?.area}</h1></span>
                    <span style={{gridTemplateColumns:'repeat(2,1fr)'}} className='grid border my-2 py-2 p-1 '><h1>District</h1>     <h1 className=' overflow-hidden text-ellipsis whitespace-nowrap'>{mainUser?.dist}</h1></span>
                    <span style={{gridTemplateColumns:'repeat(2,1fr)'}} className='grid border my-2 py-2 p-1 '><h1>Pincode</h1>      <h1 className=' overflow-hidden text-ellipsis whitespace-nowrap'>{mainUser?.pincode}</h1></span>

                    <button onClick={placeOrder} className='my-5 px-3 py-2 border-red-500 border-2'>Confirm Order</button>

                </div>
            </aside>
            {(loading) &&
                <section className=' absolute inset-0 light flex items-center justify-center'>
                    <div className='spinner h-full'></div>
                </section>
            }
        </section>
    </main>
  )
}

Confirm.propTypes ={
    setdone:PropTypes.func.isRequired
}

export default Confirm