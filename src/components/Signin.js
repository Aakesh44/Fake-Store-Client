import React, { useContext,useState } from 'react'
import DataContext from '../context/DataContext'
import axios from 'axios'
import { Link } from 'react-router-dom'
const Signin = () => {

    const {handleUser} = useContext(DataContext)
    const [email,setEmail] = useState("")
    const [password,setpassword] = useState("")
    const [error,setError] = useState(false)
    const [loading,setLoading] = useState(false)

    const handleSubmit = async (e) =>{
        e.preventDefault()
        setLoading(true)
        try {
            const config = {
                headers: {
                    "Content-Type": "application/json"
                }
            }
            
            const response = await axios.post(
                "https://fake-store-server.vercel.app/log-in",
                {
                    email: email,
                    password: password
                },
                config
            );
            // console.log(response);
            // setUserData(response.data)
            setError(false)
            
            localStorage.setItem('storeUser',JSON.stringify(response.data._id))
            setLoading(false)
            handleUser()
        } catch (error) {
            console.log(error.message);
            setError(true)
        }
     }
  return (
    <main className=' w-4/5 py-5 rounded-md shadow-md md:py-6  xl:w-1/2  xl:py-5  mt-5  mx-auto mb-16 xl:mt-20 flex justify-center items-center'>


    <form onSubmit={handleSubmit} className=' feed-form relative'>
        
        {(loading && !error) &&
            <section className=' absolute inset-0 light flex items-center justify-center'>
                <div className='spinner h-full'></div>
            </section>
        }

        
        {error && <h1>Invalid email or password</h1>}
            
        <label htmlFor="" className='mt-2'>Email*</label>
        <input 
          placeholder='Enter your email'
          className=' placeholder:text-sm mt-3'
          value={email}
          onChange={(e)=>setEmail(e.target.value)}/>

        <label htmlFor="" className='mt-2'>Password*</label>
        <input type="text"
          placeholder='Enter your Password'
          value={password}
          onChange={(e) => setpassword(e.target.value)}
          className=' placeholder:text-sm mt-3'/>

        <button
          type="submit" 
          className=' button_submit Secclr mt-10'>
            Create account
      </button>
        <h3 className=' my-5 bg-white text-black'>Dont have an account ? <Link to='/SignUp' className=' underline text-sm font-semibold text-purple-800'>Sign Up</Link></h3>
    </form>
</main>
  )
}

export default Signin