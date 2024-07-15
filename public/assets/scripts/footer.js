// Footer.js

import React from 'react';

const Footer = () => {
    const handleClick = (buttonName) => {
        alert(`${buttonName} was clicked!`);
    };

    return (
        <footer>
            <button className="btn-footer" onClick={() => handleClick('Home')}>Home</button>
            <button className="btn-footer" onClick={() => handleClick('Invoices')}>Invoices</button>
            <button className="btn-footer" onClick={() => handleClick('Companies')}>Companies</button>
            <button className="btn-footer" onClick={() => handleClick('Contact')}>Contact</button>
            <button className="btn-footer" onClick={() => handleClick('Privacy Policy')}>Privacy Policy</button>
        </footer>
    );
};

export default Footer;
