import React, { useContext,useEffect,useState } from 'react'
// import tvimg2 from "./images/tvimg2.png"
// import ringimg2 from "./images/ringimg2.png"
// import menimg2 from "./images/menimg2.png"
// import womenimg2 from "./images/womenimg2.png"
import loading from "../images/loading.png"
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom'
import  DataContext  from '../context/DataContext';
// import { AiFillStar } from "react-icons/ai";

const MiniProduct = ({categorys}) => {
    const {dataElec,setMainProduct}=useContext(DataContext)
    

    const calculateNumberOfElements = () => {
      const screenSize = window.innerWidth;
      
      if (screenSize >= 1280) {
        return 4;
      } else {
        return 3;
      }
    };
    const [numberOfElements, setNumberOfElements] = useState(calculateNumberOfElements());
    useEffect(() => {
      const handleResize = () => {
        setNumberOfElements(calculateNumberOfElements());
      };
    
      window.addEventListener("resize", handleResize);
    
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);

    const Data=dataElec.filter(n=>n.category===categorys).slice(0,numberOfElements)



  return (
    <main>
      <main className='elecmini bg-gradient-to-r from-pink-100 to-blue-100 Lb gclr w-full flex flex-wrap mb-32'>

        <section className='w-1/2  h-1/2 sh lg:h-auto lg:w-1/4 xl:w-1/5 p-3'>

          <div className=' bg-cover shadow bg-no-repeat bg-center bg-white h-80 xl:h-96 w-full rounded-xl flex flex-col'
          style={{backgroundImage:`url(${
            categorys=== 'electronics'      ? "https://img.freepik.com/free-photo/modern-stationary-collection-arrangement_23-2149309642.jpg?size=626&ext=jpg&ga=GA1.2.935296291.1680001946&semt=ais" :
            categorys=== "accessories"         ? "https://img.freepik.com/free-photo/still-life-aesthetic-earrings_23-2149649114.jpg?size=626&ext=jpg&ga=GA1.2.935296291.1680001946&semt=ais":
            categorys=== "men clothing"   ? "https://img.freepik.com/free-photo/man-posing-grandstands-full-shot_23-2149659140.jpg?size=626&ext=jpg&ga=GA1.1.935296291.1680001946&semt=ais":
            categorys=== "women clothing" ? "https://img.freepik.com/free-photo/woman-wearing-high-heels-stocking_23-2150261096.jpg?size=626&ext=jpg&ga=GA1.1.935296291.1680001946&semt=ais":
            categorys=== "kids' wear"  ? "https://img.freepik.com/free-photo/full-shot-kids-posing-together_23-2149067072.jpg?size=626&ext=jpg&ga=GA1.2.935296291.1680001946&semt=ais":
            categorys=== 'footwear'         ? "https://img.freepik.com/free-photo/woman-legs-with-flowers-shoes_23-2148098449.jpg?size=626&ext=jpg&ga=GA1.1.935296291.1680001946&semt=ais":
            categorys=== "cosmetics" ?   "https://img.freepik.com/free-photo/caucasian-woman-applying-perfume-her-neck_53876-14.jpg?size=626&ext=jpg&ga=GA1.2.665246650.1680002263&semt=sph":
            categorys=== "home decor"  ? "https://img.freepik.com/free-photo/interior-design-with-armchair-potted-plant_23-2149427983.jpg?size=626&ext=jpg&ga=GA1.1.665246650.1680002263&semt=ais":""

          })`
            
          }}>

            <div className='w-full mt-auto py-4 h-2/6 flex flex-col justify-around items-center'>
              <h1 className='navtext text-white font-semibold text-center text-sm md:text-base lg:text-lg xl:text-2xl'>  {categorys} items </h1>
              <Link to='/MainProduct' onClick={()=>setMainProduct(categorys)} className=' btnblur bg-whi border-2 border-fuchsia-400 text-white px-1 p-0 md:py-1 lg:px-2 xl:px-3 rounded font-normal lg:font-bold md:font-semibold text-base md:p-1' >
                 <h1 className=''> View All</h1>
              </Link>
            </div>

          </div>
        </section>

        {Data ? 
          <>
            {Data.map(n=>
                      <Link to={`Productpage/${n.id}`} key={n.id} className='w-1/2 h-1/2 sh  lg:h-auto lg:w-1/4 xl:w-1/5 p-3'>
                      <div className=' bg-white h-80 xl:h-96 w-full shadow-sm rounded-xl overflow-hidden'>

                        <div className='w-full h-5/6 lg:h-5/6 bg-white rounded-t-xl flex items-center justify-center '>
                          
                        {n.img ?  
                        <img src={n.img } alt="" className=' aspect-squa re lg:w-full lg:h-full '/>:
                        <img src={loading} alt="" className=' aspect-squa re h-16 w-16 animate-spin transition '/>}

                        </div>
            
                        <div className='w-full h-1/6 lg:h-1/6 p-2 flex flex-col justify-around'>
                          <div className=' flex md:px-6 lg:px-0'>
                            <h1 className=' font-semibold text-xs  md:text-base mr-auto truncate w-10/12'>{n.title}</h1>
                            <h1 className='font-semibold text-xs md:text-base  ml-auto'>₹{n.price}</h1>
                          </div>

                        </div>

                      </div>
                    </Link>
            )}
          </>:
          <>  loading
          </>}
        

        
      </main>
    </main>
  )
}

MiniProduct.propTypes = {
    categorys: PropTypes.string.isRequired,
  };

export default MiniProduct
