import React from "react";
import Statistics from './Statistics';
import LastInvoices from "./LastInvoices";
import LastContacts from "./LastContacts";
import LastCompanies from "./LastCompanies";


const DashboardSections = () => {
    return (
        <div className="sections">
            <div className="sections-fragment">
            <Statistics />
            <LastInvoices />
            </div>
            <div className="sections-fragment">
            <LastContacts />
            <LastCompanies />
            </div>
        </div>

    );
};

export default DashboardSections;