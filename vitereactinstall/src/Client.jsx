import React from 'react';
import './App.css';
import '/public/assets/css/styles.css';
import '/public/assets/css/footer.css';
import Footer from './Footer'; // Assurez-vous d'importer le composant Footer

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
      <div className='BarreAllContact'>
        <h1 className='AllContacts'>All contacts</h1>
      </div>
      
      <div className="Clients-header">
        <table>
          <thead>
            <tr className='TableauTitle'>
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
      </div>

      <Footer /> {/* Ajout du composant Footer ici */}
    </div>
  );
}

export default App;
