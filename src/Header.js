import React, { useContext, useState } from 'react'
import { FiMenu } from "react-icons/fi";
import { RiShoppingBag3Fill } from "react-icons/ri";
import {BsSearch} from  "react-icons/bs";
import { Link } from 'react-router-dom';
import DataContext from './context/DataContext';
import { RiAccountCircleLine } from "react-icons/ri";

const Header = () => {

    const {placeholder,dataElec}=useContext(DataContext)

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
    <div className='  flex mb-6 md:mb-14 h-8 md:h-12 justify-around lg:justify-around ' >

        <div 
            className=' my-auto cursor-pointer md:hidden'>
            {show ? 
            (<Link to='/Navmenu'><FiMenu onClick={handleClick}/></Link>):
            (<Link to='/'><FiMenu onClick={handleClick}/></Link>)
            }
        </div>
        <Link to="/">
            <div
                className=' my-auto bg-fuchsia-800 text-white p-1 rounded-sm cursor-pointer md:ml-5 md:h-10 md:w-10 md:flex md:items-center md:justify-center lg:h-14 lg:w-14 lg:rounded-md md:mx-8'>
                <RiShoppingBag3Fill className='md:h-6 md:w-6 '/>
            </div>
        </Link>

        <div 
            className=' flex lg:w-96 '>
            
            <div className=''>
                <input 
                    type="text"
                    id='mainitemsearch' 
                    placeholder={placeholder}
                    value={search}
                    onChange={(e)=>searchfun(e.target.value)}
                    className=' placeholder:text-sm lg:placeholder:text-xl placeholder:text-center outline outline-1 outline-fuchsia-800 rounded-sm h-6 my-auto lg:h-14 md:h-9 lg:border-2 lg:border-fuchsia-900 lg:w-5/6'/>
                
                {search.length>0 && filteredProducts.length>0 && (
                    <ul className=' absolute mt-8 lg:px-10 md:px-10 bg-white shadow-md px-5 py-6'>
                        {filteredProducts.map(n=>(

                            <li key={n.id} className=' mb-2 hover:text-fuchsia-900 font-semibold' onClick={resetDropdown}>
                                <Link to={`Productpage/${n.id}`}>
                                    {n.title.length >15 ? `${n.title.substring(0, 20)}....` : n.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
            <label 
                htmlFor="mainitemsearch"
                className='hidden my-auto ml-1 h-5 w-5 text-fuchsia-800 cursor-pointer '>
                <BsSearch className='lg:h-7 lg:ml-5 lg:w-7 md:h-5 md:w-5'/></label>
        </div>

        <ul className='hidden md:flex'> 

            <li className=' mx-4 text-fuchsia-950 my-auto lg:text-2xl md:text-xl '><Link to='/'>Home</Link></li>
            <li className=' mx-4 text-fuchsia-950 my-auto lg:text-2xl md:text-xl '><Link to='/Login'>Login</Link></li>
            <li className=' mx-4 text-fuchsia-950 my-auto lg:text-2xl md:text-xl'><Link to='/About'>About</Link></li>
            <li className=' mx-4 text-fuchsia-950 my-auto lg:text-2xl md:text-xl'><Link to='/MyCart'>MyCart</Link></li>
            <li className=' mx-4 text-fuchsia-950 my-auto lg:text-2xl '><Link to='/Me'><RiAccountCircleLine className='md:h-8 md:w-8'/></Link></li>

        </ul>


</div>
  )
}

export default Header