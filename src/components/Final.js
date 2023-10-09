import React,{useEffect, useState} from 'react'
// import order1 from "./images/order.jpg"
import { Link } from 'react-router-dom'
const Final = () => {
    const [show,setShow]=useState(true)
    useEffect(()=>{
        const timeout=setTimeout(()=>{
            setShow(false)
        },1500);

        return ()=>{clearTimeout(timeout)}
    },[])
  return (
    <div>
        <section style={{height:'86vh'}} className='w-full flex bg-white flex-col items-center justify-center'>
            {show ? 
            <>
            <div className='spinner h-full'></div>
            </>:
            <>
            <div className=' h-full w-full lg:w-4/6 flex bg-red-30 0  flex-col gap-1 items-center justify-center navtext font-semibold text-4xl'>
                <h1 className='text-xl lg:text-5xl'>Thank you</h1>
                <img src="https://img.freepik.com/premium-vector/flat-design-order-confirmed-concept_108061-1022.jpg?size=626&ext=jpg&ga=GA1.1.935296291.1680001946&semt=ais" 
                alt="" className='sm:h-4/5 sm:w-4/5 lg:h-4/5 lg:w-4/5 xl:w-3/5 aspect-square' />
                <Link to='/' className=' text-xl underline'>Go Home</Link>
            </div>
            </>}


        </section>
    </div>
  )
}

export default Final