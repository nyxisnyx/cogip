import React from 'react';
import { Link } from 'react-router-dom';
import ContactList from './ContactList';
import DashboardHeader from "./DashboardHeader";

const Contacts = () => {
    return (
        <div className="dashboard-main-container">
        <DashboardHeader />

        <Link to="/contacts/new">
                <button 
                    type="button" 
                    className="AddButton"
                >
                    Add Contact
                </button>
            </Link>

            <ContactList />
            
            <Link to="/contacts/new">
                <button 
                    type="button" 
                    className="AddButton"
                >
                    Add Contact
                </button>
            </Link>
        
        </div>
    );
};

export default Contacts;
