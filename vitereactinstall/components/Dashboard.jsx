import React from "react";
import DashboardMain from './DashboardMain';
import DashboardMenu from './DashboardMenu';
//import '../../public/assets/css/dashboard.css';

const Dashboard = () => {
    return (
        <div className="DBContainer">
        <DashboardMenu />
        <DashboardMain />
        </div>
    );
};

export default Dashboard;