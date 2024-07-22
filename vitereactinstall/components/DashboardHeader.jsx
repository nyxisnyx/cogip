import React from 'react';
//import '../../public/assets/css/dashboardHeader.css';

const DashboardHeader = ({user}) => {
    return (
        <header className='dashboardHeader'>
            <>
            <h2>Dashboard</h2>
            <div className='DBHeaderContainer'>
            <div className='imageElement'>
                    <img src="/dashboard_header.png" alt="Dashboard Header" />
                </div>
                <div className='textElement'>
                    <h3>Welcome back {user}!</h3>
                    <p>You can here add an invoice, a company
                    and some contacts</p>
                </div>
            </div>
            </>
        </header>
    );
};

export default DashboardHeader;
