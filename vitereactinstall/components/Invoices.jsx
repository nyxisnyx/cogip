import React from "react";
// import InvoiceList from './InvoiceList';
import NewInvoice from "./NewInvoice";
import DashboardHeader from "./DashboardHeader";
//import DashboardMenu from './DashboardMenu';


const Invoices = () => {
    return (
        <div>
        <DashboardHeader />
        <NewInvoice />
        <button type="button" className="AddButton">Add Invoice</button>
        </div>
    );
};

export default Invoices;