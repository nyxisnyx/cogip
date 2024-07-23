import React from "react";
import InvoiceList from './InvoiceList';
import DashboardHeader from "./DashboardHeader";
import DashboardMenu from './DashboardMenu';

//import '../../public/assets/css/dashboard.css';

const Invoices = () => {
    return (
        <div className="DBContainer">
        <DashboardMenu />
        <DashboardHeader />
        <InvoiceList />
        {/* <button className="AddButton">Add Invoice</button> */}
        </div>
    );
};

export default Invoices;