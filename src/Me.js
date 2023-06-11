import React, { useContext } from 'react'
import DataContext from './context/DataContext'
import { Link } from 'react-router-dom';

const Me = () => {
    const cardStyles = {
        borderRadius: '30px',
        boxShadow: '15px 15px 30px #bebebe, -15px -15px 30px #ffffff'
      };

    const {name,email}=useContext(DataContext)
  return (
    <div className=' w-4/5 py-44 mt-5  mx-auto mb-16 xl:mt-20 flex flex-col justify-center items-center'style={cardStyles}>

        <h1 className=' text-2xl font-semibold mt-5'>{name}</h1>
        <h1 className='text-xl font-semibold mt-5'>{email}</h1>

        <Link to='/Like'>
        <button className=' h-10 w-30 border-2 px-3 border-fuchsia-800 my-16'>Liked items</button>
        </Link>
    </div>
  )
}

export default Me