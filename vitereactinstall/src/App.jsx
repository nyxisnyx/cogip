import React, { useState } from 'react';
import '../../public/assets/css/styles.css'
import Dashboard from '../components/Dashboard';
import { TestPage } from '../components/TestPage';

const App = () => {
    return (
        <div className="App">
            <TestPage />
        </div>
    );
};

export default App;
