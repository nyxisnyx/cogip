import React from 'react';
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import CompanyList from './CompanyList';
import DashboardHeader from "./DashboardHeader";

const Companies = () => {
    return (
        <div className="dashboard-main-container">
        <DashboardHeader />

        <Link to="/dashboard-companies/new">
                <button 
                    type="button" 
                    className="AddButton"
                >
                    Add Company
                </button>
            </Link>

            <CompanyList />
            
            <Link to="/dashboard-companies/new">
                <button 
                    type="button" 
                    className="AddButton"
                >
                    Add Company
                </button>
            </Link>
        
        </div>
    );
};

export default Companies;
