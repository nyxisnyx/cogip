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
                <Route path="/" element={<Dashboard />} />
                <Route path="/invoices" element={<Invoices />} />
                <Route path="/invoices/new" element={<NewInvoice />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/contacts/new" element={<NewContact />} />
                <Route path="/companies" element={<Companies />} />
                <Route path="/companies/new" element={<NewCompany />} />
            </Routes>
        </div>
    );
};

export default DashboardPage;
