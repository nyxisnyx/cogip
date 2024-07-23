import React from "react";
import DashboardSections from './DashboardSections';
import DashboardHeader from "./DashboardHeader";

const DashboardMain = () => {
    return (
        <div className="DBMain">
            <DashboardHeader />
            <DashboardSections />
        </div>
    );
};

export default DashboardMain;