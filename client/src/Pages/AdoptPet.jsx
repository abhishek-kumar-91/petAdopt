import React,{useEffect} from 'react'
import "./AdoptPet.css"
import Card from '../Components/Card/Card'
import {  useSelector, useDispatch } from 'react-redux';

function AdoptPet() {
 
  return (
    <div className='aContainer'>
      <div className='titleA'>
        <h1>Pets Available For Adoption</h1>
      </div>

    {/* Card */}
      <div className='cardContent'>
      
       
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />

        <Card />
        <Card />
      </div>
    </div>
  )
}

export default AdoptPet