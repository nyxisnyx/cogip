// src/Contact.js

import React from 'react';
import '/public/assets/css/contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact-info">
        <h1 className="contact-title">Peter Gregory</h1>
        <div className="contact-details">
          <p><strong>Contact:</strong> Peter Gregory</p>
          <p><strong>Phone:</strong> 555-4567</p>
          <p><strong>Mail:</strong> peter.gregory@raviga.com</p>
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
