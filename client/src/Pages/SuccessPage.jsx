import React from 'react';
import "./SuccessPage.css";

function SuccessPage() {
  return (
    <div className="success-container">
      <h1>Congratulations!</h1>
      <p>Your pet adoption request was successful.</p>
      <p>Please collect your pet at our nearest store:</p>
      <div className="store-details">
        <p>Store Name: Pet Haven</p>
        <p>Address: 123 Main Street, Pune, Maharashtra, 411019</p>
        <p>Phone: (+91) 8899664477</p>
        <p>Hours: Monday - Friday: 9am - 6pm, Saturday: 10am - 4pm, Sunday: Closed</p>
      </div>
    </div>
  );
}

export default SuccessPage;
