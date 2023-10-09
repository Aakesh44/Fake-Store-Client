import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import  DataContext  from '../context/DataContext';
import {  AiFillStar,AiOutlineHeart,AiFillHeart } from "react-icons/ai";


const Like = () => {
    const {mainUser,dataElec,likeProduct,dislikeProduct}=useContext(DataContext)
    
    const like = dataElec?.filter(n=> mainUser?.likedProducts?.includes(n._id))

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
  return (
    <div>
      {like.length === 0 ? 
      <>
       <h1 className=' text-3xl text-center py-44'>  Empty</h1>
      </>:
          <>
          <section   className=' flex flex-wrap border-2 flex-row items-center justify-center p-5 gap-2 '>
          {like.map(n=> 
          
  
          <section key={n.id} className='Card relative rounded-lg w-2/5 h-3/4 lg:h-auto lg:w-1/4 xl:w-1/5 p-3'>

          {checkLike(n._id) ? 
          <AiFillHeart onClick={()=>handleLike(n._id)} className= ' text-purple-800  absolute right-2 top-2 xl:h-5 xl:w-5 cursor-pointer'/>:
          <AiOutlineHeart onClick={()=>handleLike(n._id)} className= ' text-purple-800 absolute right-2 top-2 xl:h-5 xl:w-5 cursor-pointer'/>
          }
          
          <div className=' bg-white h-full  lg:h-72 xl:h-80 w-full rounded-xl'>
            <div className='w-full h-4/6 lg:h-4/6 bg-white rounded-t-xl flex items-center justify-center p-3 sm:p-10 '>
              <img src={n.img} alt="" className=' aspect-square w-full h-full '/>
            </div>

            <div className='w-full h-2/6 lg:h-2/6 p-2 flex flex-col gap-2 justify-around'>
              <div className=' flex  justify-between md:px-6 lg:px-0'>
                <h1 className=' font-semibold text-xs  md:text-base mr-auto overflow-hidden whitespace-nowrap text-ellipsis'>{ n.title}</h1>
                <h1 className='font-semibold text-xs md:text-base  ml-auto'>₹{n.price}</h1>
              </div>
              <div className=' flex justify-center md:px-6 lg:px-0'>
                <h1 className='text-xs md:text-sm mr-auto overflow-hidden whitespace-nowrap text-ellipsis'>{ n.description}</h1>
                <h1 className='ml-auto text-xs md:text-sm flex justify-start items-center text-green-600'>{n.rating.rate} <AiFillStar/></h1>
              </div>
                <Link to={`Productpage/${n.id}`} className='navtext text-xs md:text-base text-center font-semibold border-2 p-1 px-3 mx-auto border-fuchsia-600 rounded-xl px-0 md:px-2 focus:bg-fuchsia-600 focus:text-white'>
                    open
                </Link>
            </div>
          </div>
        </section>
        )}
        </section>
            </>
      }
      {/* {like.title} */}
    </div>
  )
}

export default Like