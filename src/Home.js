import React from 'react'
import Header from './Header'
import Showbar from './Showbar'
import Ad from "./Ad"
import ElectronicsMini from "./ElectronicsMini"
import JewelsMini from "./JewelsMini"
import MenClothMini from "./MenClothMini"
import WomenClothMini from "./WomenClothMini"
import Info from "./Info"

const Home = () => {
  return (
    <div>
        {/* <Header/> */}
        <Showbar/>
        <Ad/>
        <ElectronicsMini/>
      <JewelsMini/>
      <MenClothMini/>
      <WomenClothMini/>
      <Info/>
    </div>
  )
}

export default Home