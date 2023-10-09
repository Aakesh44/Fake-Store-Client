import React from 'react'
// import Header from './Header'
import Showbar from './Showbar'
import Ad from "./Ad"
import Ad2 from "./Ad2"

import Landing from './Landing'
import Why from './Why'
import MiniProduct from './MiniProduct'
import Info from './Info'

const Home = () => {

  const categorys=["kids' wear",   "women clothing","men clothing", "accessories",  "cosmetics",    "footwear",     "electronics",  "home decor",   
  ]
  return (
    <div className=''>
      
        <Landing/>

        <section id='Showbar'><Showbar/></section>
        
        <Why/>

        <MiniProduct  categorys={categorys[0]}/>
        <MiniProduct  categorys={categorys[1]}/>
        <MiniProduct  categorys={categorys[2]}/>
        <Ad/>

        <MiniProduct  categorys={categorys[3]}/>
        <MiniProduct  categorys={categorys[4]}/>
        <MiniProduct  categorys={categorys[5]}/>
        <Ad2/>

        <MiniProduct categorys={categorys[6]} />
        <MiniProduct categorys={categorys[7]} />

        <Info/>
    </div>
  )
}

export default Home