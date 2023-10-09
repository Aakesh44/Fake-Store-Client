import React, { useContext ,useState} from 'react'
import  DataContext  from '../context/DataContext';
import {useForm} from 'react-hook-form'
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
import axios from 'axios';
import { Link } from 'react-router-dom';


//npm install react-hook-form
//npm install yup @hookform/resolvers

 const schema=yup.object().shape({ 
  Uname:yup.string().required('username required'),
  email:yup.string().email().required('email required'),
  password:yup.string().required('password required').min(4,'min 4 char').max(8,'max 8 char'),
  phone:yup.string('valid number').required('phone number required').matches(/^\d+$/, 'phone number must digits').min(10,'enter valid number').max(10,'enter valid number'),
  pincode:yup.string('valid number').required('pincode required').matches(/^\d+$/, 'picode number must digits').min(6,'enter valid pincode').max(6,'enter valid number'),
  dist:yup.string().required('district name required'),
  area:yup.string().required('area name required'),
  landmark:yup.string().required('landmark required required')
})

const Login = () => {

  const {handleUser} = useContext(DataContext)
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [distric, setDistric] = useState('');
  const [area, setArea] = useState('');
  const [pincode, setPincode] = useState('');
  const [landmark, setLandmark] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [existError,setExistError] = useState(null)



  const {register,handleSubmit,formState:{errors}}=useForm({
    resolver:yupResolver(schema),
    mode:'onTouched'
  });
  console.log(errors);

  const handleSubmitForm = async() =>{
    console.log(name,email,password,distric,area,pincode,landmark,phoneNumber);
    try {
      const config = {
        headers: {
            "Content-Type": "application/json"
        }
      }

      const response = await axios.post(
        "https://fake-store-server.vercel.app/sign-up",
        {
          username:name,
          email:email,
          password:password,
          dist:distric,
          area:area,
          pincode:pincode,
          landmark:landmark,
          phone:phoneNumber,
        },
        config
      )

      // console.log(response);
      localStorage.setItem('storeUser',JSON.stringify(response.data._id))
      handleUser()

    } catch (error) {
      if (error.response) {
        setExistError(error.response.data.error)
        console.log('Server responded with:', error.response.data);
      } else {
        console.log('Request failed:', error.message);
      }
    }
  }

  return (

    <main className=' w-4/5 py-5 rounded-md shadow-md md:py-6  xl:w-1/2  xl:py-5  mt-5  mx-auto mb-16 xl:mt-20 flex justify-center items-center'>


      <form onSubmit={handleSubmit(handleSubmitForm)} className=' feed-form'>
        {existError && <h1>{existError}</h1>}
      
          <label htmlFor="">Name*</label>
          <input 
            {...register('Uname')}
            placeholder='Enter you name'
            className=' placeholder:text-sm'
            onChange={(e)=>setName(e.target.value)}/>
            <span className=' '>{errors.Uname?.message}</span>
            
          <label htmlFor="">Email*</label>
          <input 
            {...register('email')}
            placeholder='Enter your email'
            className=' placeholder:text-sm'
            onChange={(e)=>setEmail(e.target.value)}/>
            <span className=' '>{errors.email?.message}</span>

          <label htmlFor="">Password*</label>
          <input type="password"
            {...register('password')}
            placeholder='Enter your Password'
            onChange={(e) => setPassword(e.target.value)}
            className=' placeholder:text-sm'/>
            <span className=' '>{errors.password?.message}</span>

          <label htmlFor="">District*</label>
          <input 
            {...register('dist')}
            placeholder='Enter your District'
            onChange={(e) => setDistric(e.target.value)}
            className=' placeholder:text-sm'/>
            <span className=' '>{errors.dist?.message}</span>

          <label htmlFor="">Area*</label>
          <input 
            {...register('area')}
            placeholder='EnEnter your Area'
            onChange={(e) => setArea(e.target.value)}
            className=' placeholder:text-sm'/>
            <span className=' '>{errors.area?.message}</span>

          <label htmlFor="">Pincode*</label>
          <input 
            {...register('pincode')}
            placeholder='Enter your Pincode'
            onChange={(e) => setPincode(e.target.value)}
            className=' placeholder:text-sm'/>
            <span className=' '>{errors.pincode?.message.slice(0,25)}</span>

          <label htmlFor="">Landmark*</label>
          <input 
            {...register('landmark')}
            placeholder='Enter your pickup landmark'
            onChange={(e) => setLandmark(e.target.value)}
            className=' placeholder:text-sm'/>
            <span className=' '>{errors.landmark?.message}</span>

          <label htmlFor="">Mobile*</label>
          <input 
            {...register('phone')}
            placeholder='Enter your mobile number '
            onChange={(e) => setPhoneNumber(e.target.value)}
            className=' placeholder:text-sm'/>
            <span className=' '>{errors.phone?.message.slice(0,25)}</span>
      
          <button
            type="submit" 
            className=' button_submit Secclr'>
              Create account
        </button>

        <p className='w-full my-5 flex justify-center items-center text-black'>
          Already have an account?.. <Link to='/Login' className=' text-sm font-semibold cursor-pointer'>LogIn</Link>
        </p>

      </form>
</main>
)}

export default Login

{/* <div className="card Secclr lg:my-32 ">
          
<p className="title">Welcome {name}</p>

<button className='text-white text-xl mt-5 border border-white px-2'><Link to='/'>Explore</Link> </button>
<p className="text">Check all your favourites in one place.</p>
</div> */}