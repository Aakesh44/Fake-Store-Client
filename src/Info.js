import React from 'react'
import { AiOutlineGoogle } from "react-icons/ai";
import { BsTwitch,BsInstagram } from "react-icons/bs";
import { FiTwitter } from "react-icons/fi";
import { RxDiscordLogo } from "react-icons/rx";
import { TbBrandLinkedin } from "react-icons/tb";

const Info = () => {
  return (
    <div className=' py-24 mb-3 border bg-orange-300 flex flex-col justify-center items-center'>
        <ul className=' text-start ml-3'>
          <li>"Our app is designed to simplify your life and streamline your tasks."</li>
          <li>"With our app, you can stay organized and boost your productivity."</li>
          <li>"Discover a world of possibilities with our innovative app."</li>
          <li>"Experience the power and convenience of our app in the palm of your hand."</li>
          <li>"Effortlessly manage your daily activities with our intuitive app."</li>
          <li>"Unlock a seamless and efficient workflow with our feature-rich app."</li>
          <li>"Our app offers a user-friendly interface and seamless navigation."</li>
          <li>"Experience a new level of efficiency with our cutting-edge app."</li>
          <li>"Say goodbye to clutter and hello to productivity with our app."</li>
          <li>"Explore our app's wide range of features and enhance your daily routine."</li>
        </ul>

        <ul className=' hidden md:block text-center'>
          <li>"We offer flexible pricing plans to cater to your specific needs and budget."</li>
          <li>"Choose from our affordable pricing options and get started today."</li>
          <li>"Our pricing is transparent and competitive, ensuring great value for your investment."</li>
          <li>"Discover our cost-effective pricing plans designed to fit businesses of all sizes."</li>
          <li>"We offer a range of pricing tiers to accommodate different usage levels and requirements."</li>
          <li>"Take advantage of our affordable pricing structure and unlock the full potential of our app."</li>
          <li>"Our pricing is designed to be fair and scalable, providing you with value for your money."</li>
          <li>"Get started with our free trial and explore our pricing options for upgraded features."</li>
          <li>"Our pricing is flexible and customizable, allowing you to pay only for what you need."</li>
          <li>"We believe in providing transparent pricing with no hidden fees or surprises."</li>

        </ul>

        <ul className=' flex gap-4 mt-20 bg-gray-200 w-full justify-center py-20'>
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