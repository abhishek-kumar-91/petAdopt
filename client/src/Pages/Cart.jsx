import React, { useState } from 'react'
import "./Cart.css"
import {  useSelector, useDispatch } from 'react-redux';
import dogimg from "../assets/dogs.jpeg"
import {remove} from "../Reducer/cartSlice"
import {Link} from "react-router-dom"


export default function Cart({isLoggedIn}) {
  const data  = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const removeCart = (id) =>{
    dispatch(remove(id))
  }

  console.log("cart", isLoggedIn)
  return (
    <div className='marginContainer'>
        <div className='secondContainer'>
            <div className='box box1'>
            {data?.map((item, index) => (
        <div key={index} className='cartImg'>
          <img src={dogimg} alt={item?.name} />
          <div>
            <h3>{item?.name}</h3>
            <h5>{item?.location}</h5>
          </div>  

          <button onClick={()=> removeCart(item.id)} className='removebtn'>remove  </button>
        </div>
      ))}

                 
      </div>  

            <div className='box box2'>
                <h1>Total {data.length}</h1>
                {
                  isLoggedIn === true ? <Link to="/ordered" className='btnp'> <button>Place Order</button></Link>:
                 <button  className='btnp'>Please Sign in</button>
                }
               
            </div>

        </div>
    
    </div>
  )
}
