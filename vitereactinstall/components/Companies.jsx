import React from 'react';
import NewCompany from './NewCompany';
import DashboardHeader from "./DashboardHeader";

const Companies = () => {
    return (
        <div>
        <DashboardHeader />
        <NewCompany />
        <button type="button" className="AddButton">Add Company</button>
        </div>
    );
};

export default Companies;
