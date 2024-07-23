import React from "react";
import InvoiceList from './InvoiceList';
import DashboardHeader from "./DashboardHeader";
//import DashboardMenu from './DashboardMenu';


const Invoices = () => {
    return (
        <div>
        {/* <DashboardMenu /> */}
        <DashboardHeader />
        <InvoiceList />
        {/* <button className="AddButton">Add Invoice</button> */}
        </div>
    );
};

export default Invoices;