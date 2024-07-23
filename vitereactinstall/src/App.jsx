import React, { useState } from 'react';
import './assets/css/styles.css';
import Dashboard from '../components/Dashboard';
import Contacts from '../components/Contacts';
import Companies from '../components/Companies';
import Invoices from '../components/Invoices';


const App = () => {
    //The initial state value is set to 'dashboard'
    const [view, setView] = useState('dashboard');

    //the function returns the appropriate component based on the value of the 'view' state
   
    const renderView = () => {
        switch(view) {
            case 'invoices':
                return <Invoices />;
            case 'contacts':
                return <Contacts />;
            case 'companies':
                return <Companies />;
    //By default, the "Dashboard Component" is displayed
    
            default:
                return <Dashboard />;
        }
    };

    return (
        <>
       {renderView()}
        </>
    ); 
       
};

export default App;

