import React from 'react';
import '../../public/assets/css/styles.css';
// import '../clients/Contact-List.css';
import Footer from '../src/Footer';
// import Clients from'../src/Client';
// import ContactDetail from '../src/clients/ContactDetail';

// import ContactDetail from '../clients/ContactDetail';
import AllCompagnies from './clients/AllCompagnies';

// import ShowContact from '../clients/ShowContact';

const App = () => {
  return (
    <div className="App">
      {/* // <Clients /> */}
      {/* <ContactDetail /> */}
      <AllCompagnies />
      {/* <ShowContact />  */}
      <Footer />
    </div>
  );
};

export default App;
