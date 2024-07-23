import React from 'react';
import { useParams } from 'react-router-dom';

const ContactDetail = ({ contacts }) => {
  const { name } = useParams();
  const contact = contacts.find(contact => contact.name === name);

  if (!contact) {
    return <div>Contact not found</div>;
  }

  return (
    <div>
      <h1>{contact.name}</h1>
      <p>Phone: {contact.phone}</p>
      <p>Email: {contact.email}</p>
      <p>Company: {contact.company}</p>
      <p>Date: {contact.date}</p>
    </div>
  );
};

export default ContactDetail;
