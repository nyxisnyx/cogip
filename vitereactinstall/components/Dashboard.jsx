import React from "react";
import DashboardSections from './DashboardSections';
import DashboardHeader from "./DashboardHeader";

//import '../../public/assets/css/dashboard.css';

const Dashboard = () => {
    return (
        <div className="dashboard-main-container">
         <DashboardHeader />
        <DashboardSections />
        </div>
    );
};

export default Dashboard;