import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './Pages/Home'
import Navbar from './Components/Navbar/Navbar'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import Footer from './Components/Footer/Footer'
import AdoptPet from './Pages/AdoptPet'
import Cart from './Pages/Cart'
import React, { useEffect, useState } from 'react';
import { Provider } from "react-redux"
import store from "./store/store"
import OrderPage from './Pages/OrderPage'
import AboutUs from './Pages/AboutUs'
import SuccessPage from './Pages/SuccessPage'


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const sessionId = localStorage.getItem('sessionId'); // Example: Use local storage
    if (sessionId) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <>
    <Provider store={store} >
    <BrowserRouter>
    <Navbar isLoggedIn ={isLoggedIn}  setIsLoggedIn={setIsLoggedIn}/>
      <Routes>
           <Route path='/' element = {<Home />} />
           <Route path='/cart' element = {<Cart isLoggedIn={isLoggedIn} />} />
           <Route path='/login' element = {<Login setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn}/>} />
           <Route path='/signup' element = {<Signup isLoggedIn={isLoggedIn}/>} />
           <Route path='/adopt-a-pet' element = {<AdoptPet isLoggedIn={isLoggedIn}/>} />
           <Route path='/ordered' element = {<OrderPage />} />
           <Route path='/about-us' element = {<AboutUs />} />
           <Route path='/success' element = {<SuccessPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </Provider>
    </>
  )
}

export default App
