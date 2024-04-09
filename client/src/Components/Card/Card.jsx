import React from 'react';
import "./Card.css";
import { useDispatch } from "react-redux";
import { add } from '../../Reducer/cartSlice';
import dogimg from "../../assets/dogs.jpeg"

export default function Card() {
  const dispatch = useDispatch();

  const product = {
    name: 'Arthur',
    gender: 'Male',
    location: 'Pune, India',
    imageUrl: dogimg
  };

  const addToCart = () => {
    dispatch(add(product));
  };

  return (
    <div className='cardContainer'>
      <img src={product.imageUrl} alt={product.name} loading='lazy' />

      <div>
        <h2>{product.name}</h2>
        <h6>{product.gender}</h6>
        <h6>{product.location}</h6>
      </div>

      <button className='cartBtn' onClick={addToCart}>Add to Cart</button>
    </div>
  );
}
