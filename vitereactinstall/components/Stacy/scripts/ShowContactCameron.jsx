// // src/Contact.js

// import React from 'react';
// import '/public/assets/css/contact.css';


// const Contact = () => {
//   return (
//     <div className="contact-page">
//       <div className="contact-info">
//         <h1 className="contact-title">Cameron How</h1>
//         <div className="contact-details">
//           <p><strong>Contact:</strong> Gavin Belson</p>
//           <p><strong>Phone:</strong> 555-6354</p>
//           <p><strong>Mail:</strong>gavin@hooli.com</p>
//           <p><strong>Company:</strong> Hooli</p>
//         </div>
//       </div>
//       <div className="contact-image-container">
//         <img src="bertram-gilfoyle.jpg" alt="Bertram Gilfoyle" className="contact-image" />
//       </div>
//     </div>
//   );
// };


// export default Contact;
import React from 'react';

const ShowContactCameron = () => {
  return (
    <div className="contact-page">
      <div className="contact-info">
        <h1 className="contact-title">Cameron How</h1>
        <div className="contact-details">
          <p><strong>Contact:</strong> Gavin Belson</p>
          <p><strong>Phone:</strong> 555-6354</p>
          <p><strong>Mail:</strong> gavin@hooli.com</p>
          <p><strong>Company:</strong> Hooli</p>
        </div>
      </div>
      <div className="contact-image-container">
      <img src="assets/img/contact1.png" alt="Cameron How" className="contact-image" />
      </div>
    </div>
  );
};

export default ShowContactCameron;

