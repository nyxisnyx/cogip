import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './assets/css/styles.css';
import DashboardPage from '../components/dashboard/DashboardPage';

const App = () => {
    return (
        <Router>
            <DashboardPage />
        </Router>
    );
};

export default App;

