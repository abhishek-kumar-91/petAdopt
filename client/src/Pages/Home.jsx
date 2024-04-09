import React from 'react'
import "./Home.css"
import {Link} from "react-router-dom"
import Contact from '../Components/Contact/Contact'
function Home() {
  return (
    <div className='homeContainer'>
      <img src='/public/homeBanner.jpg' loading='lazy' className='homeImg' />


      <div className='homeCardContainer'>
        <div className='homeCard'>
              <div className='cardDetails'><img src='/public/adop.svg' />
              <div className='text'>
              <div>Adopt a Pet</div>
              <div>Adopt, Don't Shop: Save a Life Today</div>
              </div> </div>

              <Link to="/adopt-a-pet"><button className='btn'>Adopt a Pet</button></Link>
        </div>

        
      </div>



      <div className='howWork'>
            <div className='htext'>
              <h1>How it works?</h1>
              <h5>Charges may vary based on Pet and City.</h5>

            </div>
            <div className='hImage'>
                <div className='imgDetails'><img src='/public/search.svg' loading='lazy'/><h4 className='tI'>Search</h4><h5 className='tII'>Search pet care heroes by location and service.</h5></div>
                <div className='imgDetails'><img src='/public/chat.svg' loading='lazy'/><h4 className='tI'>Book</h4><h5 className='tII'>Schedule your appointment at home.</h5></div>
                <div className='imgDetails'><img src='/public/cart.svg' loading='lazy'/><h4 className='tI'>Relax</h4><h5 className='tII'>Sit back and relax! Your pet hero is on his way.</h5></div>
            </div>
      </div>


      


    <div className='banner'>
        <img src='/public/userBanner.jpg' loading='lazy'/>
    </div>

    <Contact />
    </div>
  )
}

export default Home