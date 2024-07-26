import React, { useState, useEffect } from 'react';
import '../../public/assets/css/styles.css'
import Dashboard from '../components/Dashboard';
import { PublicPages } from '../components/PublicPages';

const App = () => {
    const [pathname, setPathname] = useState("")

    useEffect(() => {
        setPathname(window.location.pathname)
    }, [window.location]);

    return (
        <div className="App">
            {!pathname.includes("dashboard") && <PublicPages />}
            {pathname.includes("dashboard") && <Dashboard />}
        </div>
    );
};

export default App;
