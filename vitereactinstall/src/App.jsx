import React from 'react';
import '../../public/assets/css/styles.css'; // Assurez-vous que ce chemin est correct
// import ShowContactCameron from './clients/ShowContactCameron'; // Assurez-vous que ce chemin est correct

// import ShowContactBertram from './clients/ShowContactBertram';

// import ShowContactPeterGregory from './clients/ShowContactPeterGregory';


import ShowContactJianYang from './clients/ShowContactJianYang';
import Footer from '../src/Footer'; // Assurez-vous que ce chemin est correct


const App = () => {
  return (
    <div className="App">
      {/* <ShowContactCameron /> */}
      {/* <ShowContactBertram /> */}
       {/* <ShowContactPeterGregory /> */}
      <ShowContactJianYang />
     
      <Footer />
    </div>
  );
};

export default App;

