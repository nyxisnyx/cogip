
// Peter Gregory          555-4567          peter.gregory@raviga.com          Raviga                  25/09/2020
// Cameron How          555-8765          cam.how@mutiny.net                  Mutiny                  25/09/2020
// Gavin Belson            555-6354          gavin@hooli.com                          Hooli                     25/09/2020
// Jian Yang                  555-8765         jian.yan@phoque.off                    Phoque Off           25/09/2020
// Bertram Gilfoyle      555-5434         gilfoy@piedpiper.com                  Pied Pipper           25/09/2020
// Peter Gregory          555-4567          peter.gregory@raviga.com          Raviga                  25/09/2020
// Cameron How          555-8765          cam.how@mutiny.net                  Mutiny                  25/09/2020
// Gavin Belson            555-6354          gavin@hooli.com                          Hooli                     25/09/2020
// Jian Yang                  555-8765         jian.yan@phoque.off                    Phoque Off           25/09/2020
// Bertram Gilfoyle      555-5434         gilfoy@piedpiper.com                  Pied Pipper           25/09/2020

import React from 'react';
import './App.css';

function App() {
  const contacts = [
    { name: 'Peter Gregory', phone: '555-4567', email: 'peter.gregory@raviga.com', company: 'Raviga', date: '25/09/2020' },
    { name: 'Cameron How', phone: '555-8765', email: 'cam.how@mutiny.net', company: 'Mutiny', date: '25/09/2020' },
    { name: 'Gavin Belson', phone: '555-6354', email: 'gavin@hooli.com', company: 'Hooli', date: '25/09/2020' },
    { name: 'Jian Yang', phone: '555-8765', email: 'jian.yan@phoque.off', company: 'Phoque Off', date: '25/09/2020' },
    { name: 'Bertram Gilfoyle', phone: '555-5434', email: 'gilfoy@piedpiper.com', company: 'Pied Piper', date: '25/09/2020' },
    { name: 'Peter Gregory', phone: '555-4567', email: 'peter.gregory@raviga.com', company: 'Raviga', date: '25/09/2020' },
    { name: 'Cameron How', phone: '555-8765', email: 'cam.how@mutiny.net', company: 'Mutiny', date: '25/09/2020' },
    { name: 'Gavin Belson', phone: '555-6354', email: 'gavin@hooli.com', company: 'Hooli', date: '25/09/2020' },
    { name: 'Jian Yang', phone: '555-8765', email: 'jian.yan@phoque.off', company: 'Phoque Off', date: '25/09/2020' },
    { name: 'Bertram Gilfoyle', phone: '555-5434', email: 'gilfoy@piedpiper.com', company: 'Pied Piper', date: '25/09/2020' }
  ];

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
            {contacts.map((contact, index) => (
              <tr key={index}>
                <td>{contact.name}</td>
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

export default App;
