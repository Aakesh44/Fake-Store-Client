import React from 'react';
import './App.css';
import Header from "./Header"
// import Showbar from './Showbar';
// import Ad from './Ad';
// import ElectronicsMini from './ElectronicsMini';
// import JewelsMini from './JewelsMini';
// import MenClothMini from './MenClothMini';
// import WomenClothMini from './WomenClothMini';
import ElectronicsMain from "./ElectronicsMain"
import JewelsMain from "./JewelsMain"
import MenClothMain from "./MenClothmain"
import WomenClothMain from "./WomenClothMain"
// import Info from './Info';
import Navmenu from "./Navmenu"
import Footer from './Footer';
import Login from "./Login"
import About from './About';
import Buy from './Buy';
import Me from './Me';
import Sold from "./Sold"
import Like from './Like';
import MyCart from "./MyCart"
import { Route, Routes } from 'react-router-dom';
import Missing from './Missing';
import Home from './Home';
import { DataProvider } from './context/DataContext';
import Productpage from './Productpage';
import SpecialProduct from './SpecialProduct';




function App() {

  return (
    <div className="App p-2 md:px-14 lg:px-20 md:pt-8 ">
      <DataProvider>
        <Header/>
        <Routes>
            <Route path='/' element={<Home/>}/>

            <Route path="Productpage">
                <Route index element={<Productpage/>}/>
                <Route path=":id" element={<SpecialProduct/>}/>
            </Route>
            
            <Route path="ElectronicsMain/Productpage">
                <Route index element={<Productpage/>}/>
                <Route path=":id" element={<SpecialProduct/>}/>
                <Route path="Productpage:id" element={<SpecialProduct/>}/>

            </Route>
            <Route path="JewelsMain/Productpage">
                <Route index element={<Productpage/>}/>
                <Route path=":id" element={<SpecialProduct/>}/>
            </Route>
            <Route path="MenClothMain/Productpage">
                <Route index element={<Productpage/>}/>
                <Route path=":id" element={<SpecialProduct/>}/>
            </Route>
            <Route path="WomenClothMain/Productpage">
                <Route index element={<Productpage/>}/>
                <Route path=":id" element={<SpecialProduct/>}/>
            </Route>


            <Route path='/Navmenu' element={<Navmenu/>}/>
            <Route path='/Login' element={<Login/>}/>
            <Route path='/About' element={<About/>}/>
            <Route path='/Buy' element={<Buy/>}/>
            <Route path='/Me' element={<Me/>}/>
            <Route path='/Sold' element={<Sold/>}/>
            <Route path='/Like' element={<Like/>}/>
            <Route path='/MyCart' element={<MyCart/>}/>
            <Route path='/ElectronicsMain' element={<ElectronicsMain/>}/>
            <Route path='/JewelsMain' element={<JewelsMain/>}/>
            <Route path='/MenClothMain' element={<MenClothMain/>}/>
            <Route path='/WomenClothMain' element={<WomenClothMain/>}/>
            <Route path='*' element={<Missing/>}></Route>
        </Routes>
        <Footer/>
      </DataProvider>


    </div>
  );

}

export default App;
