import React from 'react';
import { Link } from 'react-router-dom';

const contacts = [
  { id: 1, name: 'Peter Gregory', phone: '555-4567', email: 'peter.gregory@raviga.com', company: 'Raviga', date: '25/09/2020' },
  { id: 2, name: 'Cameron How', phone: '555-8765', email: 'cam.how@mutiny.net', company: 'Mutiny', date: '25/09/2020' },
  { id: 3, name: 'Gavin Belson', phone: '555-6354', email: 'gavin@hooli.com', company: 'Hooli', date: '25/09/2020' },
  { id: 4, name: 'Jian Yang', phone: '555-8765', email: 'jian.yan@phoque.off', company: 'Phoque Off', date: '25/09/2020' },
  { id: 5, name: 'Bertram Gilfoyle', phone: '555-5434', email: 'gilfoy@piedpiper.com', company: 'Pied Piper', date: '25/09/2020' }
];

function ClientList() {
  return (
    <div className="Clients">
      <header className="Clients-header">
        <h1>Contact List</h1>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Company</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <tr key={contact.id}>
                <td><Link to={`/client/${contact.id}`}>{contact.name}</Link></td>
                <td>{contact.phone}</td>
                <td>{contact.email}</td>
                <td>{contact.company}</td>
                <td>{contact.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </header>
    </div>
  );
}

export default ClientList;
