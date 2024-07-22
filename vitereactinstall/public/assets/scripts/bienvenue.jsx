import React from 'react';

const WelcomeMessage = ({ name }) => {
  return (
    <div>
      <h1>Bienvenue, {name}!</h1>
      <p>Nous sommes ravis de vous avoir parmi nous.</p>
    </div>
  );
};

const App = () => {
  // relier au backend
  const user = {
    name: 'Jean-Christian Ranu' 
  };

  return (
    <div className="App">
      {user.name === 'Jean-Christian Ranu' && <WelcomeMessage name={user.name} />}
    </div>
  );
};

export default App;
