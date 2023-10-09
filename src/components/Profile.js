import { useContext, useState } from "react"
import React from 'react'
import  DataContext from '../context/DataContext';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Profile = () => {
    const {mainUser,setMainUser}=useContext(DataContext)

    const navigate = useNavigate()

    const handleLogOut =()=>{
      localStorage.removeItem('storeUser')
      navigate('/')
      window.location.reload()
    }

    const [makeChanges,setMakeChanges] = useState(false)

    const [name,setName] = useState(mainUser?.username)
    const [mobile,setMobile] = useState(mainUser?.phone)
    const [card_name,setcard_name] = useState(mainUser?.card_name || '- not added -')
    const [card_number,setcard_number] = useState(mainUser?.card_number || '- not added -')
    const [card_date,setcard_date] = useState(mainUser?.card_date || '- not added -')
    const [card_cvv,setcard_cvv] = useState(mainUser?.card_cvv || '- not added -')

    const editProfile = async (e) =>{
      e.preventDefault()
      try {
        const config = {
            headers: {
                "Content-Type":"application/json"
            }
        }
  
        const response = await axios.put(
            "http://localhost:4000/editProfile",
            {
              userId:mainUser._id,
              username:name,
              phone:mobile,
              card_name:card_name,
              card_number:card_number,
              card_date:card_date,
              card_cvv:card_cvv
            },
            config
        )
        setMainUser(response.data)
        // console.log('edited');
        setMakeChanges(false)
    } 
    catch (err) {
        console.log(err.message);
    }
    }

  return (
    <form onSubmit={(e)=>editProfile(e)} className='profiledetails w-full h-full'>
    <header className='w-full h-20  border-b-2 p-2 mb-5 text-xl font-semibold flex items-center'>Profile Details</header>

    <div className="">
      <h1 className="">Full Name</h1>
      <input type="text" readOnly={!makeChanges} value={name} onChange={(e)=>setName(e.target.value)} style={{outline:'none'}} className={makeChanges ? " border-2" : undefined}/>
    </div>
    <div>
      <h1>Email Id</h1>
      <input type="text" readOnly value={mainUser?.email} style={{outline:'none'}} className=""/>
    </div>
    <div>
      <h1>Mobile Number</h1>
      <input type="text" readOnly={!makeChanges} onChange={(e)=>setMobile(e.target.value)} value={mobile} style={{outline:'none'}} className={makeChanges ? " border-2" : undefined}/>
    </div>
    <div>
      <h1>Card_Name</h1>
      <input type="text" readOnly={!makeChanges} onChange={(e)=>setcard_name(e.target.value)} value={card_name } style={{outline:'none'}} className={makeChanges ? " border-2" : undefined}/>
    </div>
    <div>
      <h1>Card_Number</h1>
      <input type="text" readOnly={!makeChanges} onChange={(e)=>setcard_number(e.target.value)} value={card_number} style={{outline:'none'}} className={makeChanges ? " border-2" : undefined}/>
    </div>
    <div>
      <h1>Card_Expiry Date</h1>
      <input type="text" readOnly={!makeChanges} onChange={(e)=>setcard_date(e.target.value)} value={card_date} style={{outline:'none'}} className={makeChanges ? " border-2" : undefined}/>
    </div>
    <div>
      <h1>Card_Cvv</h1>
      <input type="text" readOnly={!makeChanges} onChange={(e)=>setcard_cvv(e.target.value)} value={card_cvv} style={{outline:'none'}} className={makeChanges ? " border-2" : undefined}/>
    </div>

    <div className=" w-full px-10 gap-5 my-5">
        <Link to='/' onClick={handleLogOut} className=" bg-red-600 text-white px-10 flex items-center justify-center whitespace-nowrap">
          Log out
        </Link>

        {!makeChanges ?
          <div onClick={()=>setMakeChanges(true)} className=" px-10 border-2 border-red-400 text-red-600 flex items-center justify-center whitespace-nowrap">
            Edit Profile
          </div>:
          <button type="submit"  className=" px-10 border-2 border-red-400 text-red-600">
            Confirm Changes
          </button>
        }

    </div>
</form>

  )
}

export default Profile