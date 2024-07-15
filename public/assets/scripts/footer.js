import React from 'react';
import './Footer.css'; // Importez le fichier CSS pour les styles du footer.

const Footer = () => {
    const handleClick = (buttonName) => {
        alert(`${buttonName} was clicked!`);
    };

    return (
        <footer>
            {/*  mettre img map tel fax reseau */ }
            <img src="/img/" alt=""></img>
            <img src="/img/" alt=""></img>
            <img src="/img/" alt=""></img>
            <img src="/img/" alt=""></img>
            <button className="btn-footer" onClick={() => handleClick('Home')}>Home</button>
            <button className="btn-footer" onClick={() => handleClick('Invoices')}>Invoices</button>
            <button className="btn-footer" onClick={() => handleClick('Companies')}>Companies</button>
            <button className="btn-footer" onClick={() => handleClick('Contact')}>Contact</button>
            <button className="btn-footer" onClick={() => handleClick('Privacy Policy')}>Privacy Policy</button>
        </footer>
    );
};

export default Footer;
