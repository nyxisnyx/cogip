// src/Contact.js

import React from 'react';
import '/public/assets/css/contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact-info">
        <h1 className="contact-title">Jian Yang</h1>
        <div className="contact-details">
          <p><strong>Contact:</strong> Jian Yang</p>
          <p><strong>Phone:</strong> 555-8765</p>
          <p><strong>Mail:</strong>jian.yan@phoque.off</p>
          <p><strong>Company:</strong> Phoque Off</p>
        </div>
      </div>
      <div className="contact-image-container">
        <img src="bertram-gilfoyle.jpg" alt="Bertram Gilfoyle" className="contact-image" />
      </div>
    </div>
  );
};


