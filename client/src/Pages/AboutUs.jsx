import React from 'react';
import "./AboutUs.css";

function AboutUs() {
  return (
    <div className="about-us-container">
      <h1>About Us</h1>
      <p>Welcome to our pet adoption platform!</p>
      <p>At PetAdopt, we are passionate about connecting animals in need with loving homes. Our mission is to make the adoption process as easy and enjoyable as possible for both the adopters and the pets.</p>
      <h2>Why Adopt from Us?</h2>
      <ul>
        <li>Wide variety of pets available for adoption</li>
        <li>Expert guidance and support throughout the adoption process</li>
        <li>Each adoption helps save a life and make a difference</li>
        <li>Post-adoption resources and support for pet owners</li>
      </ul>
      <h2>How to Adopt a Pet</h2>
      <ol>
        <li>Browse our available pets and find one that matches your lifestyle and preferences.</li>
        <li>Submit an adoption application form.</li>
        <li>Meet the pet in person or virtually to ensure a good fit.</li>
        <li>Complete the adoption process and take your new furry friend home!</li>
      </ol>
      <p>Thank you for considering adoption. Together, we can give these animals the loving homes they deserve.</p>
    </div>
  );
}

export default AboutUs;
