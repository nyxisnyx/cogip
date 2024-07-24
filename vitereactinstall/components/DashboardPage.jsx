import React, { useState } from 'react';
import Dashboard from './Dashboard';
import Contacts from './Contacts';
import Companies from './Companies';
import Invoices from './Invoices';
import DashboardMenu from './DashboardMenu';

const DashboardPage = () => {
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
         <div className="DBContainer">
            <DashboardMenu setView={setView} />
            {renderView()}
         </div>
       
        </>
    ); 
       
};

export default DashboardPage;