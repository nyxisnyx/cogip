import React from 'react';
import NewContact from './NewContact';
import DashboardHeader from "./DashboardHeader";

const Contacts = () => {
    return (
        <div>
        <DashboardHeader />
        <NewContact />
        <button type="button" className="AddButton">Add Contact</button>
        </div>
    );
};

export default Contacts;
