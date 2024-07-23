import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import '../../public/assets/css/styles.css';
import Footer from './Footer';
import Client from './Client';


const App = () => {
  const contacts = [
    { name: 'Peter Gregory', phone: '555-4567', email: 'peter.gregory@raviga.com', company: 'Raviga', date: '25/09/2020' },
    { name: 'Cameron How', phone: '555-8765', email: 'cam.how@mutiny.net', company: 'Mutiny', date: '25/09/2020' },
    { name: 'Gavin Belson', phone: '555-6354', email: 'gavin@hooli.com', company: 'Hooli', date: '25/09/2020' },
    { name: 'Jian Yang', phone: '555-8765', email: 'jian.yan@phoque.off', company: 'Phoque Off', date: '25/09/2020' },
    { name: 'Bertram Gilfoyle', phone: '555-5434', email: 'gilfoy@piedpiper.com', company: 'Pied Piper', date: '25/09/2020' }
  ];

  return (
    <Router>
      <div className="App">
        <Footer />
        <Client />
        <Switch>
          <Route path="/" exact>
            <ContactList contacts={contacts} />
          </Route>
          <Route path="/contact/:name">
            <ContactDetail contacts={contacts} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
