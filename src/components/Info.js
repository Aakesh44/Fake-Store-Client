import React from 'react'
import { AiOutlineGoogle } from "react-icons/ai";
import { BsTwitch,BsInstagram } from "react-icons/bs";
import { FiTwitter } from "react-icons/fi";
import { RxDiscordLogo } from "react-icons/rx";
import { TbBrandLinkedin } from "react-icons/tb";

const Info = () => {
  return (
    <div className=' py-24 mt-36 mb-3 border Bgclr flex flex-col justify-center items-center'>

        <ul className=' relative flex gap-4 bg-gray-200 w-full justify-center py-20'>
          <h1 className=' absolute top-1/3 left-10 text-5xl font-semibold'>FAKE STORE</h1>
            <AiOutlineGoogle className=' h-8 w-8 hover:scale-110'/>
            <BsTwitch className=' h-8 w-8 hover:scale-110'/>
            <FiTwitter className=' h-8 w-8 hover:scale-110'/>
            <RxDiscordLogo className=' h-8 w-8 hover:scale-110'/>
            <BsInstagram className=' h-8 w-8 hover:scale-110'/>
            <TbBrandLinkedin className=' h-8 w-8 hover:scale-110'/>
        </ul>

    </div>
  )
}

export default Info