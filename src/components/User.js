import React,{useContext, useState} from 'react'
import DataContext from '../context/DataContext';
import axios from 'axios';
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
import {useForm} from 'react-hook-form'

const schema = yup.object().shape({
    card_name:yup.string().required('card_name required').min(12,'enter valid card nuber').max(12,'enter valid card number'),
    card_date:yup.string().required('card_date required'),
    card_number:yup.number().required('card_number required'),
    card_cvv:yup.number().required('card_cvv required').min(3,'enter valid cvv nuber').max(3,'enter valid cvv number'),

})
const User = () => {

  const{handleOrder,mainUser,setMainUser}=useContext(DataContext)
  // 
  const [card_name,setcard_name] = useState("")
  const [card_number,setcard_number] = useState("")
  const [card_date,setcard_date] = useState("")
  const [card_cvv,setcard_cvv] = useState("")
  const [error,setError] = useState(false)
  const [loading,setLoading] = useState(false)

  const {register,handleSubmit,formState:{errors}}=useForm({
    resolver:yupResolver(schema),
    mode:"onTouched"
  })

  const editProfile = async (e) =>{
    e.preventDefault()
    setLoading(true)
    try {
      const config = {
          headers: {
              "Content-Type":"application/json"
          }
      }

      const response = await axios.put(
          "https://fake-store-server.vercel.app/editProfile",
          {
            userId:mainUser._id,
            card_name:card_name,
            card_number:card_number,
            card_date:card_date,
            card_cvv:card_cvv
          },
          config
      )

    
      setMainUser(response.data)
      console.log('edited');
      setLoading(false)
      
  } 
  catch (err) {
      console.log(err.message);
      setError(true)
  }
  }

  return (
    <div className=' relative'>
        <h1 className=' absolute top-1 left-4 mb-3 font-mono'>-- Dont go back or reload the page --</h1>

        <section className="section_form w-full" onSubmit={handleOrder}>
          <h1 className=' text-lg font-semibold my-2 whitespace-nowrap'>Enter your card details for payment</h1>
        <form onSubmit={(e)=>handleSubmit(editProfile(e))} id="consultation-form" className="feed-form w-full relative">

            {(loading && !error) &&
                <section className=' absolute inset-0 light flex items-center justify-center'>
                    <div className='spinner h-full'></div>
                </section>
            }

            {(error)&& <h1 className='text-center font-bold py-5'>Enter valid information</h1>}
            {(errors.card_cvv || errors.card_date || errors.card_name || errors.card_number) && <h1 className='text-center font-bold py-5'>{errors.card_cvv?.message || errors.card_date?.message || errors.card_name?.message || errors.card_number?.message}</h1>}
            <input type="text" {...register('card_name')} value={card_name} onChange={(e)=>setcard_name(e.target.value)}  className=' w-full'  placeholder="Card holder name" />
            <input type="tel"  {...register('card_number')} value={card_number} onChange={(e)=>setcard_number(e.target.value)}  placeholder="card number"/>
            <input type='text' {...register('card_date')} value={card_date} onChange={(e)=>setcard_date(e.target.value)}  placeholder='expiry date 1/23'/>
            <input name="text" {...register('card_cvv')} value={card_cvv} onChange={(e)=>setcard_cvv(e.target.value)}  placeholder="CVV" type=""/>
            <button type="submit" value="Submit" className="button_submit Secclr">Submit</button>
        </form>
        </section>

    </div>
  )
}


export default User