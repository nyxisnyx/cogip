import React from "react";
import DashboardHeader from "./DashboardHeader";
import DashboardMenu from './DashboardMenu';
import InvoiceList from "./InvoiceList";
import '../../public/assets/css/dashboard.css';

const Dashboard = () => {
    return (
        <div>
            <DashboardMenu />
            <DashboardHeader />
            <InvoiceList />
        </div>
    );
};

export default Dashboard;