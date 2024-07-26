// import React from 'react';
// // import '../../public/assets/css/styles.css'; // Assurez-vous que ce chemin est correct
// import '../components/clients/style.css';
// // import ShowContactCameron from './clients/ShowContactCameron'; // Assurez-vous que ce chemin est correct
// // import ShowContactBertram from './clients/ShowContactBertram';
// // import ShowContactPeterGregory from './clients/ShowContactPeterGregory';
// import ShowContactJianYang from './clients/ShowContactJianYang';
// import Footer from '../src/Footer'; // Assurez-vous que ce chemin est correct
// const App = () => {
//   return (
//     <div className="App">
//       {/* <ShowContactCameron /> */}
//       {/* <ShowContactBertram /> */}
//        {/* <ShowContactPeterGregory /> */}
//       <ShowContactJianYang />   
//       <Footer />
//     </div>
//   );
// };
// export default App;

import React from 'react';
// import '../Stacy/css/styles.css'; / Chemin mis à jour vers le fichier CSS
// import ShowContactCameron from '../Stacy/scripts/ShowContactCameron'; // Chemin mis à jour vers le composant
import ShowContactBertram from '../../../components/Stacy/scripts/ShowContactBertram';
// import ShowContactJianYang from '../components/Stacy/scripts/ShowContactJianYang';
// import Client from '../components/Stacy/scripts/Client';
import Footer from '../../../components/Stacy/scripts/Footer';

const App = () => {
  return (
    <div className="App">
      {/* <ShowContactCameron /> */}
      <ShowContactBertram />
      {/* <ShowContactJianYang /> */}
      {/* <Client /> */}
      <Footer /> 
    </div>
  );
};

export default App;
