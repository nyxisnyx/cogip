// src/Contact.js

import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact-info">
        <h1 className="contact-title">Cameron How</h1>
        <div className="contact-details">
          <p><strong>Contact:</strong>Cameron How</p>
          <p><strong>Phone:</strong> 555-8765</p>
          <p><strong>Mail:</strong>cam.how@mutiny.net</p>
          <p><strong>Company:</strong> Mutiny</p>
        </div>
      </div>
      <div className="contact-image-container">
        <img src="bertram-gilfoyle.jpg" alt="Bertram Gilfoyle" className="contact-image" />
      </div>
    </div>
  );
};


export default Contact;
