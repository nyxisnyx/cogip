import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './Dashboard';
import Contacts from './Contacts';
import Companies from './Companies';
import Invoices from './Invoices';
import NewInvoice from './NewInvoice';
import NewContact from './NewContact';
import NewCompany from './NewCompany';
import DashboardMenu from './DashboardMenu';

const DashboardPage = () => {
    return (
        <div className="DBContainer">
            <DashboardMenu />
            <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/dashboard-invoices" element={<Invoices />} />
                <Route path="/dashboard-invoices/new" element={<NewInvoice />} />
                <Route path="/dashboard-contacts" element={<Contacts />} />
                <Route path="/dashboard-contacts/new" element={<NewContact />} />
                <Route path="/dashboard-companies" element={<Companies />} />
                <Route path="/dashboard-companies/new" element={<NewCompany />} />
            </Routes>
        </div>
    );
};

export default DashboardPage;
