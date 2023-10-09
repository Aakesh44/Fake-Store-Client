import React, { useState } from 'react'
import { useContext } from 'react'
import { useParams,Link,useNavigate } from 'react-router-dom';
// import load from "./images/load.png"
import  DataContext  from '../context/DataContext';
import {  AiFillStar,AiFillPlusSquare,AiFillMinusSquare,AiOutlineHeart,AiFillHeart ,AiOutlineShoppingCart} from "react-icons/ai";
import { BsBagCheck } from "react-icons/bs";

const SpecialProduct = () => {
    const {dataElec,mainUser,addToCart,removeFromCart,likeProduct,dislikeProduct,memoizedBuyProduct}=useContext(DataContext)


    const {id}=useParams();
    const post=dataElec.find(n=>(n.id).toString()===id);
    const navigate=useNavigate();
    const [count,setCount]=useState(1)


    // const handleProductClick=(pid)=>{
    //     navigate(`/Productpage/${pid}`)
    //     setCount(1)
    // };
    // const Data=dataElec.filter(n=>n.category===post.category)
    // const otherData=Data.filter(n=>n.id !==post.id)

    function handleLike(productId) {
        if(!mainUser?.likedProducts.includes(post._id)){
          likeProduct(productId)
        }
        else{
          dislikeProduct(productId)
        }
      
      }
    //   console.log(mainUser?.likedProducts.includes(post._id));
  
    function handleCart(productId) {
        if(!mainUser?.cartProducts.includes(post._id)){
          addToCart(productId)
        }
        else{
          removeFromCart(productId)
        }
      
      }

    async function handleBuyProduct(){
        // buyProduct.productId = post._id,
        // buyProduct.counts = count
        // buyProduct.price = (post.price)*count.toFixed(0)
        if (mainUser) {
            
            await memoizedBuyProduct.setBuyProduct({
                productId : post._id,
                counts : count,
                price : (post.price)*count.toFixed(1)
            })
            navigate('/Sold')
            
            console.log(memoizedBuyProduct.buyProduct);
        }

      }

  return (

    <>
    {post ?
        <main className=' border-fuchsia-600 h-screen een bg-red-3000 w-full sm:flex items-center mt-18 '>

            <section className='w-full h-80 bg-blue-3000 mb-auto sm:w-1/2 sm:h-3/5 p-5 flex items-center justify-center'>

                <img src={post?.img} alt="" style={{maxHeight:'450pxk',aspectRatio:'10/12'}} className=' max-h-72 md:max-h-96 xl:max-h-full  aspect-square shadow-md'/>

            </section>

            <section className='w-full  min-h-fit py-5 sm:w-1/2 lg:w-1/3 sm:h-full bg-fuchsia-50 00 flex flex-col justify-evenly gap-4'>
                <div className=' w-4/5 h-fit bg-fuchsia-100 p-2 mx-auto rounded flex items-center justify-center  '>
                    <h1 className='navtext  w-full xl:text-xl sm:text-sm font-bold mr-auto '>
                        { post.title}  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis recusandae laborum magni consectetur aut deserunt quasi dolorem explicabo facere. Saepe vero a laborum ipsum architecto error deleniti atque laboriosam blanditiis.
                    </h1>
                </div>

                <div className='mx-auto rounded select-none bg-fuchsia-100  flex items-center sm:text-sm justify-between w-4/5  py-2 md:py-3 lg:py-5  px-5'>
                    <h1 className=' w-1/3 navtext font-semibold mr-auto'>{`(${count}) ₹ ${(post.price)*count}`}</h1>
                    
                    <h1 className=' w-1/3 mx-auto flex items-center justify-center font-semibold  text-green-600 text-xl sm:text-sm'>
                        {4.3}
                        <AiFillStar />
                    </h1>

                    {mainUser?.likedProducts.includes(post._id) ?
                    <AiFillHeart onClick={()=>handleLike(post._id)} className= ' text-purple-800   h-5 w-5 cursor-pointer'/>:
                    <AiOutlineHeart onClick={()=>handleLike(post._id)} className= ' text-purple-800  h-5 w-5 cursor-pointer'/>}

                </div>

                <div className=' mx-auto select-none bg-fuchsia-100 rounded flex items-center justify-center w-4/5  py-2 md:py-3 lg:py-5  '>
                    <AiFillMinusSquare onClick={()=>{if (count>1) {setCount(count-1)}}} className='Icon h-8 w-8 cursor-pointer'/>
                        <h1 className=' h-10 w-10 mx-3 outline-none border-none text-center bg-white flex items-center justify-center'>{count}</h1>
                    <AiFillPlusSquare onClick={()=>setCount(count+1)} className='Icon h-8 w-8 cursor-pointer'/>
                </div>

                <div onClick={()=>handleCart(post._id)} className=' bg-fuchsia-700 text-white select-none rounded active:scale-95 text-lg navtext font-semibold cursor-pointer mx-auto flex items-center justify-center w-4/5  py-2 md:py-3 lg:py-5   gap-3'>
                    {(!mainUser?.cartProducts.includes(post._id)) ? <h1>Add cart</h1> :<h1>Added</h1>}
                    
                    <AiOutlineShoppingCart className=' h-5 w-5 xl:h-7 xl:w-7' />
                </div>

                <Link to={`${!mainUser && '/SignUp'}`} onClick={handleBuyProduct}  className=' rounded select-none active:scale-95 mx-auto flex items-center justify-center w-4/5  bg-fuchsia-700 text-white py-2 md:py-3 lg:py-5  navtext font-semibold'>
                    <button  className=' text-lg flex items-center justify-center gap-3'>
                        Buy now <BsBagCheck className='h-5 w-5 xl:h-7 xl:w-7'/>
                    </button>
                </Link>
            </section>

        </main>
    :<><h1>OOPS spmething wrong</h1><Link to='/'>Go to home</Link></>}

    </>
  )
}

export default SpecialProduct

{/* <div className=' hidden sm:block w-full h-2/6 bg-bl ue-200'>
<h1 className=' text-lg font-semibold xl:text-xl'>Related products</h1>
<section className='overflow-x-scroll  h-full'>
    <div className='h-4/5 relative w-full flex items-center justify-start xl:gap-5 md:gap-4 bg-white sm:gap-3 overflow-x-auto'>
        <div className='w-1/2 md:w-1/5 lg:w-1/5 xl:w-1/6'></div>
            {Data ?
                <>
                    {otherData.map(n=>
                        <div key={n.id} onClick={()=>handleProductClick(n.id)} className=' h-5/6 w-5/6 sm:w-1/5 md:w-1/5 lg:w-1/5 xl:w-1/6 shadow-md bg-gree n-500  rounded-md bg-red-00 flex-shrink-0 cursor-pointer overflow-hidden p-1'>
                            <img src={n.image} alt="" className=' aspect-square w-full h-full' />
                            
                        </div>
                    )}
                </>:
                <>loading
                </>
            }  
        <div className='w-1/2 md:w-1/5 lg:w-1/5 xl:w-1/6'></div>
    </div>
</section>
</div> */}