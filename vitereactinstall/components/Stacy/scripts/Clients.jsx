import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ClientList from './ClientList';
import ClientDetail from './ClientDetail';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={ClientList} />
          <Route path="/client/:id" component={ClientDetail} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
