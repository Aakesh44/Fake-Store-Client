import React, { useContext } from 'react'
import  DataContext  from '../context/DataContext';
import { Link } from 'react-router-dom'
import Mainload from "../images/Mainload.jpg" 
import loading from "../images/loading.png"
import {  AiFillStar,AiOutlineHeart,AiFillHeart,AiOutlineShoppingCart } from "react-icons/ai";
import { BsBagCheck } from "react-icons/bs";



const MainProduct = () => {
    const {dataElec,addToCart,likeProduct,dislikeProduct,Mainproduct,mainUser,removeFromCart,}=useContext(DataContext);
    const Data=dataElec.filter(n=>n.category?.toLowerCase()===Mainproduct)
    console.log(Mainproduct);

    // const [like,setLike] = useState(null)

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

    function checkCart(productId) {
      return mainUser?.cartProducts?.includes(productId)
    }

    function handleCart(productId) {
      if(!checkCart(productId)){
        addToCart(productId)
      }
      else{
        removeFromCart(productId)
      }
    
    }

    return (
  
      <main className='  min-h-screen Borclr  flex flex-col mt-10 mb-20'>
  
        <section className='   Borclr h-32 flex justify-center items-center'>
  
          <div  className='h-full flex flex-col items-center justify-center'>
            <h1 className='navtext font-bold text-center lg:text-5xl  md:text-2xl'>Best of {Mainproduct}</h1>
            {Data ? <p className='navtext font-semibold text-center  md:text-xl lg:text-2xl'>{Data.length} products</p>:<p className=' text-center  md:text-xl'>no results</p>}
            
          </div>
  
  
        </section>
        
        <section className='Minheight  bg-white flex flex-wrap flex-row items-center justify-center '>
            
        {Data ? 
  
        <>
          {Data.map(n=> 
  
            <section style={{minWidth:'280px'}} key={n.id} className=' w-1/3 bg-transparent Lbg clr sm:w-1/3 m-3 md:w-1/3 md:m-8  rounded-xl  h-1/2 lg:h-auto lg:w-1/4 xl:w-1/5 p-3'>
  
            <div className=' bg-white shadow-2xl h-fit w-full rounded-xl overflow-hidden relative'>

              <span onClick={()=>handleLike(n._id)} className='h-6 w-6 cursor-pointer rounded-full flex items-center justify-center absolute right-2 top-2 bg-gray-200'>
                {checkLike(n._id) ? 
                  <AiFillHeart  className= ' text-purple-800   xl:h-5 xl:w-5 '/>:
                  <AiOutlineHeart  className= ' text-purple-800  xl:h-5 xl:w-5 '/>
                }
              </span>


              <div className='w-full h-80  bg-blend-screen  flex items-center justify-center p-'>
                {n.img ? <img src={n.img} alt="" className=' aspect-square bg-blend-screen w-full h-full '/>:<img src={loading} alt="" className=' aspect-square animate-spin transition bg-blend-screen w-full h-full '/> }
              </div>
              
              <div className='w-full h-20 md:h-28 md:p-2 flex flex-col justify-around gap-2 bg-red-600m '>

                <div className=' flex px-10 md:px-6 lg:px-0 w-full'>
                  <h1 className=' font-semibold text-xs truncate  md:text-base mr-auto'>{ n.title}</h1>
                  
                  <h1 className='font-semibold text-xs md:text-base w-1/4  text-right ml-auto'>₹{n.price}</h1>
                </div>

                <div className=' flex px-10  md:px-6 lg:px-0 w-full'>
                  <h1 className='text-xs md:text-sm mr-auto truncate '>{n.description}</h1>
                  
                  <h1 className='ml-auto w-1/4 text-xs md:text-sm flex justify-end items-center text-green-600'>4.6 <AiFillStar/></h1>
                </div>

                <div className='mt-auto navtext text-xs md:text-base font-semibold  w-full flex items-center justify-around mx-auto  px-0 md:px-2 mb-2'>
                  
                  <button style={checkCart(n._id) ? {backgroundColor:'rgb(192 38 211)',color:'white'} : {backgroundColor:'white',color:'black'}}
                  onClick={()=>handleCart(n._id)} className=' w-1/3 py-1 flex items-center justify-center border-2 border-fuchsia-600 rounded-xl gap-1 ' >                   
                      add <AiOutlineShoppingCart/>
                  </button>

                  <button className=' w-1/3 py-1 flex items-center justify-center border-2 border-fuchsia-600 rounded-xl gap-1 focus:bg-green-600 focus:text-white'>
                    <Link to={`/Productpage/${n.id}`} className='flex items-center justify-center w-full gap-1'>
                      buy <BsBagCheck/>
                    </Link>
                  </button>
                </div>
              </div>
            </div>
            </section>
          )}
        </>:
         <section style={{height:'86vh'}} className='w-full flex bg-white flex-col items-center justify-center'>
          
        
            <div className=' h-full w-full lg:w-4/6 flex bg-red-30 0  flex-col gap-1 items-center justify-center navtext font-semibold text-4xl'>
                <h1 className='text-xl lg:text-5xl'>Loading</h1>
                <img src={Mainload} alt="" className='sm:h-4/5 sm:w-4/5 lg:h-4/5 lg:w-4/5 xl:w-3/5 aspect-square' />
                <Link to='/' className=' text-xl underline'>Go Home</Link>
            </div>
            


        </section>
        }
  
        </section>    
  
      </main>
      
    )
}



export default MainProduct