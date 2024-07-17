const Footer = () => {
    const handleClick = (buttonName) => {
        alert(`${buttonName} was clicked!`);
    };

    return (
        <footer>
            <p className="Copyright">Copyright © 2024 • COGIP Inc.</p>
            <div className="footer2">
                <div className="contact">
                    <img src="/assets/img/icons/Location.svg" alt="localisation" /> Square des Martyrs, 6000 Charleroi 
                </div>
                <div className="contact2">
                    <img src="/assets/img/icons/Icon_contact.svg" alt="contact" /> (123) 456-7890
                    <img src="/assets/img/icons/Fax.svg" alt="fax" /> (123) 456-7890
                </div>
                <div className="reseau">
                    <img src="/assets/img/icons/Facebook.svg" alt="Facebook" />
                    <img src="/assets/img/icons/Twitter.svg" alt="Twitter" />
                    <img src="/assets/img/icons/LinkedIn.svg" alt="LinkedIn" />
                    <img src="/assets/img/icons/Youtube.svg" alt="YouTube" />
                    <img src="/assets/img/icons/Instagram.svg" alt="Instagram" />
                    <img src="/assets/img/icons/GooglePlus.svg" alt="Google Plus" />
                    <img src="/assets/img/icons/Pinterest.svg" alt="Pinterest" />
                    <img src="/assets/img/icons/RSS.svg" alt="RSS" />
                </div>
                <div className="btn-footer">
                    <a onClick={() => handleClick('Home')}>Home</a>
                    <a onClick={() => handleClick(' Invoices')}>Invoices</a>
                    <a onClick={() => handleClick('Companies')}>Companies</a>
                    <a onClick={() => handleClick('Contact')}>Contact</a>
                    <a onClick={() => handleClick('Privacy Policy')}>Privacy Policy</a>
                </div>
                <span className="cogip">COGIP</span>
            </div>
        </footer>
    );
};

ReactDOM.render(<Footer />, document.getElementById('root'));


     