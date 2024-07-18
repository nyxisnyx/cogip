import React from 'react';
import ReactDOM from 'react-dom';
import Footer from './Footer';
import './Footer.css';

ReactDOM.render(<Footer />, document.getElementById('root'));


//message de bienvenue si connexion
import React from 'react';

const Bienvenue = ({ utilisateur }) => {
  return (
    <div>
      {utilisateur.estConnecte ? (
        <h1>Bienvenue, {utilisateur.prenom} {utilisateur.nom} !</h1>
      ) : (
        <h1>Bienvenue, visiteur !</h1>
      )}
    </div>
  );
};

// Exemple d'utilisation du composant avec un utilisateur connecté
const App = () => {
  const utilisateur = {
    prenom: "Jean-Christian",
    nom: "Ranu",
    estConnecte: true // Mettre à false si l'utilisateur n'est pas connecté
  };

  return (
    <div>
      <Bienvenue utilisateur={utilisateur} />
    </div>
  );
};

export default App;
