// import React from 'react';
// import { useParams } from 'react-router-dom';

// const ContactDetail = ({ contacts }) => {
//   const { name } = useParams();
//   const contact = contacts.find(contact => contact.name === name);

//   if (!contact) {
//     return <div>Contact not found</div>;
//   }

//   return (
//     <div>
//       <h1>{contact.name}</h1>
//       <p>Phone: {contact.phone}</p>
//       <p>Email: {contact.email}</p>
//       <p>Company: {contact.company}</p>
//       <p>Date: {contact.date}</p>
//     </div>
//   );
// };

// export default ContactDetail;
// ClientDetail.js
import React, { useEffect, useState } from 'react';
import { fetchClientDetail } from './api';
import { useParams } from 'react-router-dom';

function ClientDetail() {
  const { id } = useParams();
  const [client, setClient] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadClientDetail() {
      try {
        const data = await fetchClientDetail(id);
        setClient(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }

    loadClientDetail();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>Client Detail</h1>
      {client ? (
        <div>
          <p>ID: {client.id}</p>
          <p>Name: {client.name}</p>
          {/* Ajoutez d'autres détails du client ici */}
        </div>
      ) : (
        <div>Client not found</div>
      )}
    </div>
  );
}

export default ClientDetail;
