import React from "react";
import { Link } from 'react-router-dom';
import InvoiceList from './InvoiceList';
import DashboardHeader from "./DashboardHeader";

const Invoices = () => {
    return (
        <div>
            <DashboardHeader />
            <Link to="/invoices/new">
                <button 
                    type="button" 
                    className="AddButton"
                >
                    Add Invoice
                </button>
            </Link>
            <InvoiceList />
            <Link to="/invoices/new">
                <button 
                    type="button" 
                    className="AddButton"
                >
                    Add Invoice
                </button>
            </Link>
        </div>
    );
};

export default Invoices;