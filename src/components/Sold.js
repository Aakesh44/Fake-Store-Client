import React, { useState } from 'react';
import DataContext from '../context/DataContext';
// import Profile from './Profile';
import User from './User';
import Final from './Final';
import { useContext } from 'react';
import Confirm from './Confirm';
// import Brought from './context/Brought';
// import { Link } from 'react-router-dom';



const Sold = () => {

  const {mainUser}=useContext(DataContext)

  const [done,setdone] = useState(false)

  window.addEventListener("popstate", function () {
    // Redirect the user to the root URL
    window.history.pushState(null, null, "/");
  });

  return (
    <main>
      {(!mainUser?.card_name)  ?
        <section className=' w-full Lbgclr py-20  flex flex-col justify-center items-center lg:flex-row'>
          <div className='lg:w-1/2 flex items-center justify-center pb-10'>
            <User />
          </div>
        </section>:

        (!done) ? <Confirm setdone={setdone}/>: <Final/>
      }
    </main>
    
  );
};

export default Sold;


   