import React from "react";
import Statistics from './Statistics';
import LastInvoices from "./LastInvoices";
import LastContacts from "./LastContacts";
import LastCompanies from "./LastCompanies";


const DashboardSections = () => {
    return (
        <div>
        <Statistics />
        <LastInvoices />
        <LastContacts />
        <LastCompanies />
        </div>

    );
};

export default DashboardSections;