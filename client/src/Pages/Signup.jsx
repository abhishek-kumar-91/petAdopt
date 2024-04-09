import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./Signup.css";

function Signup({ isLoggedIn }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const navigate = useNavigate();

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

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
      isValid = false;
    }

    if (!formData.password.trim()) {
      newErrors.password = 'Password is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      const response = await fetch('http://localhost:3000/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        toast.success('Signup successful!');
        navigate("/login");
      } else{
        toast.error("Email already registerd");
       console.log(response.message)
        
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('Signup failed. Please try again.');
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
              <label htmlFor='email'>Email</label>
              <input type='email' name='email' id='email' placeholder='Enter your email...' value={formData.email} onChange={handleChange} />
              {errors.email && <div className="error">{errors.email}</div>}
              <label htmlFor='password'>Password</label>
              <input type='password' name='password' id='password' placeholder='Enter your password....' value={formData.password} onChange={handleChange} />
              {errors.password && <div className="error">{errors.password}</div>}
              <button type='submit'>Sign Up</button>
              <span>If you are an existing user <Link to="/login">login</Link></span>
            </form>
          </div>
          <div className='box'>
            <img src='/public/signup.jpg' alt='Signup' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
