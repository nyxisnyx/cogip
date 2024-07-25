// src/App.js

import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <header className="header">
        <h1 className="title">PIED PIPPER</h1>
        <div className="company-info">
          <p><strong>Name:</strong> Pied Pipper</p>
          <p><strong>TVA:</strong> BE87 876 767 565</p>
          <p><strong>Country:</strong> Belgium</p>
          <p><strong>Type:</strong> Supplier</p>
        </div>
      </header>
      <section className="contact-people">
        <h2>Contact people</h2>
        <div className="contacts">
          <div className="contact">
            <img src="bertram-gilfoyle.jpg" alt="Bertram Gilfoyle" className="contact-image" />
            <p>Bertram Gilfoyle</p>
          </div>
          <div className="contact">
            <img src="henry-george.jpg" alt="Henry George" className="contact-image" />
            <p>Henry George</p>
          </div>
        </div>
      </section>
      <section className="last-invoices">
        <h2>Last invoices</h2>
        <table className="invoices-table">
          <thead>
            <tr>
              <th>Invoice number</th>
              <th>Dates</th>
              <th>Company</th>
              <th>Created at</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>F20220915-001</td>
              <td>15/09/2022</td>
              <td>Pied Pipper</td>
              <td>25/09/2020</td>
            </tr>
            <tr>
              <td>F20220915-002</td>
              <td>15/09/2022</td>
              <td>Pied Pipper</td>
              <td>25/09/2020</td>
            </tr>
            <tr>
              <td>F20220915-003</td>
              <td>15/09/2022</td>
              <td>Pied Pipper</td>
              <td>25/09/2020</td>
            </tr>
            <tr>
              <td>F20220915-004</td>
              <td>15/09/2022</td>
              <td>Pied Pipper</td>
              <td>25/09/2020</td>
            </tr>
            <tr>
              <td>F20220915-005</td>
              <td>15/09/2022</td>
              <td>Pied Pipper</td>
              <td>25/09/2020</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default App;
