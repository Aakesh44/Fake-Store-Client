import React, { useContext } from 'react'
import DataContext from '../context/DataContext'
import { Link } from 'react-router-dom'

const Orders = () => {

    const {orders,dataElec,mainUser} = useContext(DataContext)

    const ProductList = {}

    for(const product of dataElec){
      ProductList[product._id] = product
    }

  return (
    <main className='w-full h-fit p-10'> 
        {orders.map((order,ind)=>(
          
          <section key={ind} className=' h-full w-full'>
              <header className=' h-20 flex items-center justify-around bg-fuchsia-400 mb-5'>
                <h1 className=' whitespace-nowrap'>send to : {mainUser?.username}</h1>
                <h1 className=' whitespace-nowrap'>count : {order.count}</h1>
                <h1 className=' whitespace-nowrap'>price : {order.price?.toFixed(0)}</h1>
                <h1 className=' whitespace-nowrap'>order placed: {order.date?.slice(0,10)}</h1>
              </header>
              <aside className=' w-full flex h-96'>
                <img src={ProductList[order.productId]?.img} alt="" className='w-1/2 p-10'/>
                <div className=' w-1/2 aspect-square  p-10 flex flex-col gap-10'>
                    <h1 className=' font-semibold'>{ProductList[order.productId]?.title.slice(0,100)}</h1>
                    <h1>price: ₹{ProductList[order.productId]?.price?.toFixed(0)}</h1>
                    <Link to={`/Productpage/${ProductList[order.productId]?.id}`} className=' mx-auto mt-auto w-fit px-3 py-2 border-2 border-fuchsia-600  rounded-md whitespace-nowrap'>View Product</Link>
                </div>
              </aside>

          </section>
        ))}
    </main>
  )
}

export default Orders