import React from 'react';
import '../../public/assets/css/dashboardMenu.css';

const DashboardMenu = () => {
    return (
        <div className='DBNav'>
            <div className='DBUser'>
                <img src="../../assets/img/contact1.png" alt="User's photo" />
                <h3>Henry George</h3>
            </div>
            <div className='DBMenu'>
                <div className="DBNavElement">
                    <img src="../../assets/img/icons/icon_dashboard.svg" alt="Dashboard icon" />
                    <button className='DBNavButton'>Dashboard</button>
                </div>
                <div className="DBNavElement">
                    <img src="../../assets/img/icons/icon_Invoices.svg" alt="Invoices icon" />
                    <button className='DBNavButton'>Invoices</button>
                </div>
                <div className="DBNavElement">
                    <img src="../../assets/img/icons/icon_contact.svg" alt="Contacts icon" />
                    <button className='DBNavButton'>Contacts</button>
                </div>
                <div className="DBNavElement">
                    <img src="../../assets/img/icons/icon_Companies.svg" alt="Companies icon" />
                    <button className='DBNavButton'>Companies</button>
                </div>
            </div>
            <div className='DBLogout'>
            <img src="../../assets/img/contact1.png" alt="User's photo" />
            <button>Logout</button>
            </div>
        </div>
    )
}

export default DashboardMenu;