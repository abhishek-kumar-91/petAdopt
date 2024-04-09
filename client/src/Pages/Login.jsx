import React, { useState , useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from "react-redux";
import { addUser, addLoggedIn } from '../Reducer/userSlice';

function Login({ setIsLoggedIn, isLoggedIn }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();


  useEffect(() => {
    if (isLoggedIn) {
      navigate('/');
    }
  }, [isLoggedIn, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send login request to backend API
    try {
      const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        // Handle successful login
        const data = await response.json();
        const { sessionId, username } = data; // Assuming the session ID is returned in the response

        // Save session ID to localStorage
        localStorage.setItem('sessionId', sessionId);
        setIsLoggedIn(true); 
        // Redirect to home page
        dispatch(addUser(username));
        dispatch(addLoggedIn(true));
        navigate("/");

        toast.success("Logged in successfully");

      } else {
        toast.error("Login failed")
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="marginG">
      <div className="loginContainer">
        <div className="formContainer">
        <ToastContainer />
          <div className="box">
            <img src="/public/login.jpg" alt="Login" />
          </div>
          <div className="box box2">
            <form className="formBox" onSubmit={handleSubmit}>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="Enter your email..." value={email} onChange={(e) => setEmail(e.target.value)} />
              <label htmlFor="password">Password</label>
              <input type="password" id="password" placeholder="Enter your password...." value={password} onChange={(e) => setPassword(e.target.value)} />
              <button type="submit">Log In</button>
              <span>If you are a new user <Link to="/signup">Signup</Link></span>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
