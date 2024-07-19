<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/assets/css/footer.css">
    <link rel="stylesheet" href="/assets/css/darkmode.css">
    <script src="/assets/scripts/darkmode.js" defer></script>
    <script src="/assets/scripts/index.js" defer></script>
    <title>React Footer with PHP</title>
</head>
<body>
    <div id="root"></div>
    <div class="dark-mode-toggle" id="darkModeToggle">
        <img src="assets/img/icons/sun-moon.svg" alt="Toggle Dark Mode" id="modeIcon">
    </div>

     <!-- Inclure React et ReactDOM -->
    <script src="https://unpkg.com/react/umd/react.production.min.js"></script>
    <script src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/6.26.0/babel.min.js"></script>

    <!-- Votre code JSX pour le footer--> 
    <script type="text/babel">
        const Footer = () => {
            const handleClick = (buttonName) => {
                alert(`${buttonName} was clicked!`);
            };

            return (
                <footer>
                    <span className="cogip">COGIP</span>
                    <div className="footer2">
                        <div className="contact">
                            <a href="https://www.google.com/maps/search/?api=1&query=345+Faulconer+Drive,+Suite+4,+Charlottesville,+CA,+12345" target="_blank">
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
                            <a href="https://www.facebook.com" target="_blank"><img className="img-reseau" src="/assets/img/icons/Facebook.svg" alt="Facebook" /></a>
                            <a href="https://www.Twitter.com" target="_blank"><img className="img-reseau" src="/assets/img/icons/Twitter.svg" alt="Twitter" /></a>
                            <a href="https://www.LinkedIn.com" target="_blank"><img className="img-reseau" src="/assets/img/icons/LinkedIn.svg" alt="LinkedIn" /></a>
                            <a href="https://www.Youtube.com" target="_blank"><img className="img-reseau" src="/assets/img/icons/Youtube.svg" alt="YouTube" /></a>
                            <a href="https://www.Instagram.com" target="_blank"><img className="img-reseau" src="/assets/img/icons/Instagram.svg" alt="Instagram" /></a>
                            <a href="https://www.GooglePlus.com" target="_blank"><img className="img-reseau" src="/assets/img/icons/GooglePlus.svg" alt="Google Plus" /></a>
                            <a href="https://www.Pinterest.com" target="_blank"><img className="img-reseau" src="/assets/img/icons/Pinterest.svg" alt="Pinterest" /></a>
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

        ReactDOM.render(<Footer />, document.getElementById('root'));
    </script>
</body>
</html>
