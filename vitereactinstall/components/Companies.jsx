import React from 'react';
import { Link } from 'react-router-dom';
import CompanyList from './CompanyList';
import DashboardHeader from "./DashboardHeader";

const Companies = () => {
    return (
        <div>
        <DashboardHeader />

        <Link to="/companies/new">
                <button 
                    type="button" 
                    className="AddButton"
                >
                    Add Company
                </button>
            </Link>

            <CompanyList />
            
            <Link to="/companies/new">
                <button 
                    type="button" 
                    className="AddButton"
                >
                    Add Coompany
                </button>
            </Link>
        
        </div>
    );
};

export default Companies;
