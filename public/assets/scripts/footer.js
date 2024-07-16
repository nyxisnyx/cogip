import React from 'react';
import './Footer.css'; // Importez le fichier CSS pour les styles du footer.

const Footer = () => {
    const handleClick = (buttonName) => {
        alert(`${buttonName} was clicked!`);
    };

    return (
        <div>
            <footer>
                <div className="reseau">
                    <img src="/assets/img/icons/Location.svg" alt="localisation" />
                    <img src="/assets/img/icons/Icon_contact.svg" alt="contact" />
                    <img src="/assets/img/icons/Fax.svg" alt="fax" />
                    <img src="/assets/img/icons/Facebook.svg" alt="Facebook" />
                    <img src="/assets/img/icons/Twitter.svg" alt="Twitter" />
                    <img src="/assets/img/icons/LinkedIn.svg" alt="LinkedIn" />
                    <img src="/assets/img/icons/Youtube.svg" alt="YouTube" />
                    <img src="/assets/img/icons/Instagram.svg" alt="Instagram" />
                    <img src="/assets/img/icons/GooglePlus.svg" alt="Google Plus" />
                    <img src="/assets/img/icons/Pinterest.svg" alt="Pinterest" />
                    <img src="/assets/img/icons/RSS.svg" alt="RSS" />
                </div>

                <button className="btn-footer" onClick={() => handleClick('Home')}>Home</button>
                <button className="btn-footer" onClick={() => handleClick('Invoices')}>Invoices</button>
                <button className="btn-footer" onClick={() => handleClick('Companies')}>Companies</button>
                <button className="btn-footer" onClick={() => handleClick('Contact')}>Contact</button>
                <button className="btn-footer" onClick={() => handleClick('Privacy Policy')}>Privacy Policy</button>
            </footer>
            <p>bonjour</p>
        </div>
    );
};

export default Footer;
