import React, { useEffect, useState } from 'react'
import { FaCartPlus } from "react-icons/fa6";
import { RiLoginCircleFill, RiLogoutCircleFill } from "react-icons/ri";
import {Link, useNavigate} from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {  useSelector, useDispatch } from 'react-redux';
import {clearData} from "../../Reducer/userSlice"
import "./Navbar.css"

function Navbar({ isLoggedIn, setIsLoggedIn }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  const data = useSelector(state => state.user);
  const cartNumber = useSelector(state => state.cart);
  
  useEffect(() => {
    const sessionId = localStorage.getItem('sessionId'); // Example: Use local storage
    if (sessionId) {
      setIsLoggedIn(true);
    }
    
    
  }, []);

 

  const handleLogout = async () => {
    localStorage.removeItem('sessionId');
    setIsLoggedIn(false);
    dispatch(clearData()); // Dispatch the clearData action
    navigate('/login');
    toast.success('Logout successful');
  };
  
  return (
    <div className='container'>
      <div>
        <Link to="/"><img src='/logo.png' loading='lazy' className='logo' /></Link>
      </div>
      <div className='linkContainer'>
        { isLoggedIn && <h6>Welcome, {data[0]}</h6>
        }
        <Link to="/" className='link'>Home</Link>
        <Link to="/about-us" className='link'>About Us</Link>
        <Link to="/adopt-a-pet" className='link'><img src='/public/download.svg' />Adopt a pet</Link>
        <Link to="/cart" className='link'><FaCartPlus />Cart <h5 className='cartN'>{cartNumber?.length}</h5></Link>
        {isLoggedIn ? (
          <button className='link logout' onClick={handleLogout}><RiLogoutCircleFill />Logout</button>
        ) : (
          <Link to="/login" className='link login'><RiLoginCircleFill />Login</Link>
        )}
      </div>
    </div>
  )
}

export default Navbar