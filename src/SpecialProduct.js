import React, { useContext } from 'react'
import { useParams,Link } from 'react-router-dom';
import load from "./images/load.png"
import DataContext from './context/DataContext';
import {  AiFillStar,AiOutlineHeart } from "react-icons/ai";

const SpecialProduct = () => {
    const {dataElec,cartItems,addToCart,likeProduct,buyProduct}=useContext(DataContext)
    const Data=dataElec.filter(n=>n.category==="electronics")

    const {id}=useParams();
    const post=dataElec.find(n=>(n.id).toString()===id);
  return (
    <main>

        <article>
            {post ?
            <>
                <div className=' border border-fuchsia-800 mt-10 flex flex-col min-h-fit overflow-auto relative pb-16 mb-36 xl:pb-0 xl:flex-row'>
                    <div className=' p-4 md:p-6 mx-auto xl:w-1/2 xl:p-6'>
                        <img src={post.image} alt="" />
                    </div>
                    <div className=' xl:w-1/2 xl:min-h-max xl:flex xl:flex-col xl:justify-between'>
                            <h1 className=' text-center mt-3 xl:mt-10 xl:text-3xl md:text-2xl md:px-3'>{post.title}</h1>
                            <h1 className=' flex mt-3 xl:mt-10 xl: bg-slate-00 xl:justify-evenly xl:items-center'>
                                <p className=' mr-auto ml-6 text-white bg-green-600 lg:bg-red-500 xl:bg-blue-500 px-2 rounded-md md:ml-10 md:px-8 md:py-2 md:text-lg xl:mr-0 xl:ml-0 xl:py-5 xl:px-16 xl:text-2xl'>₹{post.price}</p>
                                <p className=' ml-auto mr-6 flex text-white bg-green-600 px-2 rounded-md md:mr-10 md:px-8 md:py-2 md:text-lg xl:mr-0 xl:ml-0 xl:py-5 xl:px-16 xl:text-2xl'>{post.rating.rate} <AiFillStar className=' my-auto text-white'/></p>
                            </h1>
                            <h1 className=' flex mt-3 md:mt-6 xl:mt-10'>
                                <p className=' mr-auto ml-6 text-red-500 md:text-xl md:ml-10 xl:mr-0 xl:ml-0 xl:py-5 xl:px-16 xl:text-2xl'>stocks {post.rating.count}</p>
                                <p className=' ml-auto mr-6'><AiOutlineHeart onClick={()=>likeProduct(post)} className=' ml-auto mr-1 md:h-5 md:w-5 md:mr-10 lg:mr-6 lg:h-6 lg:w-6 xl:h-10 xl:w-10 '/></p>
                            </h1>

                            <h1 className=' mt-3 text-gray-500 mx-4 md:mt-6 md:text-lg md:px-3 text-center xl:mt-10 xl:text-xl'>{post.description}</h1>

                            
                            <div className=' h-12 md:h-20 mt-4  fixed bottom-0 left-0 w-full flex border-t-2 border-t-gray-100 xl:relative xl:px-3 font-semibold'>

                                <div onClick={()=>addToCart(post)} className=' w-1/2 h-full flex justify-center items-center bg-slate-50'>
                                    <button 
                                        
                                        className=' md:text-xl cursor-pointer'>Add to cart</button>
                                </div>
                                <Link to='/Buy' className=' w-1/2 h-full flex justify-center items-center bg-orange-400' onClick={()=>buyProduct(post)}>
                                    {/* <div className=' w-1/2 h-full flex justify-center items-center bg-orange-400'> */}
                                        <button  className=' md:text-xl cursor-pointer'>Buy Now</button>
                                    {/* </div> */}
                                </Link>
                            </div>
                    
                    </div>

                </div>
                
                
            </>:
            <>
                <h1>data varla</h1>
            </>}
        </article>

        {/* {post.category==='electronics' ?
            <>
            <div className=' w-full bg-yellow-2000 font-semibold text-3xl'>Related Products</div>
                <section className='overflow-x-scroll  h-48 md:h-72 lg:h-96'>
                <div className='h-full relative w-full flex items-center flex-nowrap'>


            
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
                <img src={load} alt="" srcset="" />
                <h1 className=' text-gray-300'>Loading</h1>
            </div>
        </>}


        </div>

    </section>
            </>:
            <>
                illa
            </>}  */}
        <section>

        </section>
    </main>
  )
}

export default SpecialProduct