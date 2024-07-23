import React from 'react';

const DashboardMenu = ({ setView }) => {

    return (
        <div className='DBNav'>
            <div className='DBUser'>
                <img className="userImage" src="./src/assets/img/contact1.png" alt="User's photo" />
                <h3>Henry George</h3>
            </div>
            <div className='DBMenu'>
                <div className="DBNavElement">
                    <img className='imgMenu' src="./src/assets/img/icons/Icon_dashboard.png" alt="Dashboard icon" />
                    <button className='DBNavButton' onClick={() => setView('dashboard')}>Dashboard</button>
                </div>
                <div className="DBNavElement">
                    <img className='imgMenu' src="./src/assets/img/icons/Icon_Invoices.png" alt="Invoices icon" />
                    <button className='DBNavButton' onClick={() => setView('invoices')}>Invoices</button>
                </div>
                <div className="DBNavElement">
                    <img className='imgMenu' src="./src/assets/img/icons/Icon_contact.png" alt="Contacts icon" />
                    <button className='DBNavButton' onClick={() => setView('contacts')}>Contacts</button>
                </div>
                <div className="DBNavElement">
                    <img className='imgMenu' src="./src/assets/img/icons/Icon_Companies.png" alt="Companies icon" />
                    <button className='DBNavButton' onClick={() => setView('companies')}>Companies</button>
                </div>
            </div>
            <div className='DBLogout'>
            <img className="userImageLogout" src="./src/assets/img/contact1.png" alt="User's photo" />
            <button className='DBNavButton'>Logout</button>
            </div>
        </div>
    )
}

export default DashboardMenu;