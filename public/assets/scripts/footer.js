import React from 'react';
import './Footer.css';

const Footer = () => {
    const handleClick = (buttonName) => {
        alert(`${buttonName} was clicked!`);
    };

    return (
        <footer>
            <span className="cogip">COGIP</span>
            <div className="footer2">
                <div className="contact">
                    <a href="https://www.google.com/maps/search/?api=1&query=345+Faulconer+Drive,+Suite+4,+Charlottesville,+CA,+12345" target="_blank" rel="noopener noreferrer">
                        <img src="/assets/img/icons/Location.svg" alt="localisation" />345 Faulconer Drive, Suite 4 • Charlottesville, CA, 12345
                    </a>
                </div>
                <div className="contact2">
                    <a href="tel:+1234567890">
                        <img className="img-contact" src="/assets/img/icons/Icon_contact.svg" alt="contact" />
                        <span className="span-contact">(123) 456-7890</span>
                    </a>
                    <a href="fax:+1234567890">
                        <img className="img-contact" src="/assets/img/icons/Fax.svg" alt="fax" />
                        <span className="span-contact">(123) 456-7890</span>
                    </a>
                </div>
                <div className="reseau">
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><img className="img-reseau" src="/assets/img/icons/Facebook.svg" alt="Facebook" /></a>
                    <a href="https://www.Twitter.com" target="_blank" rel="noopener noreferrer"><img className="img-reseau" src="/assets/img/icons/Twitter.svg" alt="Twitter" /></a>
                    <a href="https://www.LinkedIn.com" target="_blank" rel="noopener noreferrer"><img className="img-reseau" src="/assets/img/icons/LinkedIn.svg" alt="LinkedIn" /></a>
                    <a href="https://www.Youtube.com" target="_blank" rel="noopener noreferrer"><img className="img-reseau" src="/assets/img/icons/Youtube.svg" alt="YouTube" /></a>
                    <a href="https://www.Instagram.com" target="_blank" rel="noopener noreferrer"><img className="img-reseau" src="/assets/img/icons/Instagram.svg" alt="Instagram" /></a>
                    <a href="https://www.GooglePlus.com" target="_blank" rel="noopener noreferrer"><img className="img-reseau" src="/assets/img/icons/GooglePlus.svg" alt="Google Plus" /></a>
                    <a href="https://www.Pinterest.com" target="_blank" rel="noopener noreferrer"><img className="img-reseau" src="/assets/img/icons/Pinterest.svg" alt="Pinterest" /></a>
                    <img className="img-reseau" src="/assets/img/icons/RSS.svg" alt="RSS" />
                </div>
                <div className="btn-footer">
                    <a onClick={() => handleClick('Home')}>Home</a>
                    <a onClick={() => handleClick('Invoices')}>Invoices</a>
                    <a onClick={() => handleClick('Companies')}>Companies</a>
                    <a onClick={() => handleClick('Contact')}>Contact</a>
                    <a onClick={() => handleClick('Privacy Policy')}>Privacy Policy</a>
                </div>
                <p className="Copyright">Copyright © 2024 • COGIP Inc.</p>
            </div>
        </footer>
    );
};

export default Footer;
