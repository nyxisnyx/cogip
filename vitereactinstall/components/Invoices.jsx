import React from "react";
import { Link } from 'react-router-dom';
import InvoiceList from './InvoiceList';
import NewInvoice from "./NewInvoice";
import DashboardHeader from "./DashboardHeader";
import { useEffect, useState } from 'react';
//import DashboardMenu from './DashboardMenu';


const Invoices = () => {
    const [showNewInvoice, setShowNewInvoice] = useState(false);

    // Функція для обробки натискання кнопки Add Invoice
    const handleAddInvoiceClick = () => {
        setShowNewInvoice(true);

    };
    return (
        <div>
        <DashboardHeader />
        <button 
        type="button" 
        className="AddButton" 
        onClick={handleAddInvoiceClick}
        >Add Invoice</button>

        <InvoiceList />

        <button 
        type="button" 
        className="AddButton" 
        onClick={handleAddInvoiceClick}
        >Add Invoice</button>
         {showNewInvoice && <NewInvoice />}
        </div>
    );
};

export default Invoices;