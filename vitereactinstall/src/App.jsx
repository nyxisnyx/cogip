import React, { useState } from 'react';
import '../../public/assets/css/styles.css';
import Footer from './Footer';
import Client from'./Client';


const App = () => {
    return (
        <div className="App">
            <Footer />
            <Client />
        </div>
    );
};

export default App;
