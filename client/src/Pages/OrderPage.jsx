import React,{useEffect, useState} from 'react'
import {useNavigate, Link} from "react-router-dom"
import "./OrderPage.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./Signup.css";
import { clearCart } from '../Reducer/cartSlice';
import {useDispatch} from "react-redux"


function OrderPage({isLoggedIn}) {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [formData, setFormData] = useState({
      name: '',
      address: '',
      mobilenumber: ''
    });
  
  
    useEffect(() => {
      if (isLoggedIn) {
        navigate('/');
      }
    }, [isLoggedIn, navigate]);
    const [errors, setErrors] = useState({});
  
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
      // Clear the error message when the user starts typing
      setErrors({ ...errors, [name]: '' });
    };
  
   
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
        const response = await fetch('http://localhost:3000/orderplaced', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        });
  
        if (response.ok) {
          toast.success('Order Placed Successful!');
          navigate("/");
          dispatch(clearCart())
          
        } else{
         console.log(response.message)
          
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };
  
    
  return (
    <div className='marginG'>
    <div className='loginContainer'>
      <div className='formContainer'>
        <ToastContainer />
        <div className='box box2'>
          <form className='formBox' onSubmit={handleSubmit}>
            <label htmlFor='name'>Full Name</label>
            <input type='text' name='name' id='name' placeholder='Enter your full name...' value={formData.name} onChange={handleChange} />
            {errors.name && <div className="error">{errors.name}</div>}
            <label htmlFor='address'>Address</label>
            <input type='text' name='address' id='email' placeholder='Enter your email...' value={formData.email} onChange={handleChange} />
            {errors.email && <div className="error">{errors.email}</div>}
            <label htmlFor='mobilenumber'>Mobile Number</label>
            <input type='text' name='mobilenumber' id='password' placeholder='Enter your password....' value={formData.password} onChange={handleChange} />
            {errors.password && <div className="error">{errors.password}</div>}
            <button type='submit'>Confirm Order</button>
            
          </form>
        </div>
        <div className='box'>
          <img src='/public/signup.jpg' alt='Signup' />
        </div>
      </div>
    </div>
  </div>
  )
}

export default OrderPage