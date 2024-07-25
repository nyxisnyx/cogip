// src/Contact.js

import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact-info">
        <h1 className="contact-title">Bertram Gilfoyle</h1>
        <div className="contact-details">
          <p><strong>Contact:</strong> Bertram Gilfoyle</p>
          <p><strong>Phone:</strong> 555-5434</p>
          <p><strong>Mail:</strong> gilfoy@piedpipper.com</p>
          <p><strong>Company:</strong> Pied Pipper</p>
        </div>
      </div>
      <div className="contact-image-container">
        <img src="bertram-gilfoyle.jpg" alt="Bertram Gilfoyle" className="contact-image" />
      </div>
    </div>
  );
};



export default Contact;
