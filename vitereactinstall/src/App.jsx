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
            <PublicPages />
            {/* <Dashboard /> */}
        </div>
    );
};

export default App;
