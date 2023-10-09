import React from 'react';
import './App.css';
import Header from "./components/Header"
import Navmenu from "./components/Navmenu"
import Login from "./components/Login"
import About from './components/About';
import Buy from './components/Buy';
import Me from './components/Me';
import Sold from "./components/Sold"
import Like from './components/Like';
import MyCart from "./components/MyCart"
import { Route, Routes } from 'react-router-dom';
// import Missing from './components/Missing';
import Home from './components/Home';
import { DataProvider } from './context/DataContext';
import SpecialProduct from './components/SpecialProduct';
import MainProduct from './components/MainProduct';
import Signin from './components/Signin';
import Final from './components/Final';




function App() {

  return (
    <main className="App relative bg-white px-2 md:px-14 lg:px-20 md:pt- ">
      <DataProvider>
        <Header/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='MainProduct' element={<MainProduct/>}/>


            <Route path="Productpage">
                <Route path=":id" element={<SpecialProduct/>}/>
            </Route>
            

            <Route exact path='/MyCart/Productpage'>
                <Route path=":id" element={<SpecialProduct/>}/>
            </Route>
            <Route exact path='/Like/Productpage'>
                <Route path=":id/*" element={<SpecialProduct/>}/>
            </Route>

        

            <Route path='/Navmenu' element={<Navmenu/>}/>
            <Route path='/SignUp' element={<Login/>}/>
            <Route path='/Login' element={<Signin/>}/>
            <Route path='/About' element={<About/>}/>
            <Route path='/Buy' element={<Buy/>}/>
            <Route path='/Me' element={<Me/>}/>
            <Route path='/Sold' element={<Sold/>}/>
            <Route path='/Like' element={<Like/>}/>
            <Route path='/MyCart' element={<MyCart/>}/>
            <Route path='/final' element={<Final/>} />
        
            <Route path='*' element={<Home/>}></Route>
        </Routes>
      </DataProvider>


    </main>
  );

}

export default App;
