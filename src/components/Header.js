import React, { useContext, useState } from 'react'
import { FiMenu } from "react-icons/fi";
import {BsPerson,BsHeart,BsHandbagFill} from  "react-icons/bs";
import { Link } from 'react-router-dom';
import  DataContext  from '../context/DataContext';
import  store from "../images/store.png";

const Header = () => {

    const {dataElec,mainUser}=useContext(DataContext)

    const [show,SetShow]=useState(true)
    const handleClick=()=>{SetShow(!show)}

    const [search,setSearch]=useState('')
    const [filteredProducts,setFilteredProducts]=useState([])

    const searchfun=(e)=>{

        const searchsmall=e.toLowerCase();

        const filteritem=dataElec.filter(n=>n.title.toLowerCase().includes(searchsmall)).slice(0,7);

        setSearch(searchsmall)

        setFilteredProducts(filteritem)

    }
    const resetDropdown = () => {
        setSearch('');
        setFilteredProducts([]);
      };
  return (
    <div className=' select-none w-full headerm shadow-sm  flex mb-6  h-14 md:h-20 justify-evenly items-center sticky top-0 z-30 bg-white right-0 left-0' >

        <div 
            className=' my-auto cursor-pointer md:hidden'>
            {show ? 
            (<Link to='/Navmenu'><FiMenu className=' h-6 w-6' onClick={handleClick}/></Link>):
            (<Link to='/'><FiMenu className='  h-6 w-6' onClick={handleClick}/></Link>)
            }
        </div>
        <Link to="/">
            
                <img src={store} alt="" className='h-6 w-6 md:h-8 md:w-8 lg:h-10 lg:w-10'  />
        </Link>



        <ul className='navtext font-semibold hidden md:flex my-auto'> 

            <li className=' mx-4 Mtext my-auto lg:text-2xl md:text-xl '><Link to='/'>Home</Link></li>
            <li className=' mx-4 Mtext my-auto lg:text-2xl md:text-xl'><Link to='/About'>About</Link></li>
        </ul>

        <div className=' flex lg:w-96  '>
            
            <input 
                type="text"
                id='mainitemsearch' 
                placeholder={"search items"}
                value={search}
                onChange={(e)=>searchfun(e.target.value)}
                className=' placeholder:text-lg placeholder:text-center rounded h-6 my-auto lg:h-10 md:h-9 border-2 border-fuchsia-900 lg:w-11/12 xl:w-96 px-5'/>
            
            {search.length>0 && filteredProducts.length>0 && (
                <ul className=' absolute mt-24 lg:px-10 md:px-10 z-10 headerm shadow-md px-5 py-6 xl:w-96 border-2'>
                    {filteredProducts.map(n=>(

                        <Link 
                        to={`Productpage/${n.id}`} 
                        key={n.id} 
                        className=' truncate mb-2 hover:bg-fuchsia-900 hover:text-white font-semibold' 
                        onClick={resetDropdown}>
                           
                                {n.title}
                                
                        </Link>
                        
                    ))}
                </ul>
            )}
       
        
    </div>

    {mainUser ? 
        <ul className='landtext  hidden md:flex my-auto'>
            <Link to='/Me' className='mx-4 flex justify-center items-center h-8 w-8 bg-fuchsia-500 rounded-md  '>
                <BsPerson className='h-5 w-5'/>
            </Link>
            <Link to='/Like' className='mx-4 relative flex justify-center items-center h-8 w-8 bg-fuchsia-500 rounded-md '>
                <BsHeart className='h-5 w-5'/>
                {mainUser?.likedProducts?.length ? <span style={{fontSize:'10px'}} className=' absolute -top-2 -right-2 h-4 w-4 bg-red-500 text-white  text -xs rounded-full flex items-center justify-center'>{mainUser?.likedProducts?.length}</span> : null}
            </Link>
            <Link to='/Mycart' className='mx-4 relative flex justify-center items-center h-8 w-8 bg-fuchsia-500 rounded-md '>
                <BsHandbagFill className='h-5 w-5'/>
                {mainUser?.cartProducts?.length ?  <span style={{fontSize:'10px'}} className=' absolute -top-2 -right-2 h-4 w-4 bg-red-500 text-white  text -xs rounded-full flex items-center justify-center'>{mainUser?.cartProducts?.length}</span>:  null}
            </Link>
        </ul>:
        <ul className='landtext  hidden md:flex my-auto'>
            <Link to='/Login' className='mx-4 flex justify-center items-center h-8 px-2 font-semibold bg-fuchsia-400 rounded-md  '>Log In</Link>
            <Link to='/SignUp' className='mx-4 flex justify-center items-center h-8 px-2 font-semibold bg-fuchsia-400 rounded-md '>Sign Up</Link>
        </ul>
    }



</div>
  )
}

export default Header