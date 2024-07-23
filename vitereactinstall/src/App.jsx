import React from 'react';
import '../../public/assets/css/styles.css';
import Footer from './Footer';
import Client from '/src/Client';

const App = () => {
    return (
        <div className="App">
            <Footer />
            <div>
                <Client />
            </div>
        </div>
    );
};

export default App;
