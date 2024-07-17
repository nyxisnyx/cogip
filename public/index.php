<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/assets/css/stylefooter.css"> 
    <link rel="stylesheet" href="/assets/css/darkmode.css">
    <title>React Footer with PHP</title>
</head>
<body>
    <div id="root"></div>

    <script type="text/babel">
        const Footer = () => {
            const handleClick = (buttonName) => {
                alert(`${buttonName} was clicked!`);
            };

            return (
                <footer>
                    <p className="Copyright">Copyright © 2024 • COGIP Inc.</p>
                    <div className="footer2">
                    <span className="cogip">COGIP</span>
                        <div className="contact">
                            <img src="/assets/img/icons/Location.svg" alt="localisation" /> Square des Martyrs, 6000 Charleroi 
                        </div>
                        <div className="contact2">
                            <img src="/assets/img/icons/Icon_contact.svg" alt="contact" /> (123) 456-7890
                            <img src="/assets/img/icons/Fax.svg" alt="fax" /> (123) 456-7890
                        </div>
                        <div className="reseau">
                            <img class="img-reseau" src="/assets/img/icons/Facebook.svg" alt="Facebook" />
                            <img class="img-reseau" src="/assets/img/icons/Twitter.svg" alt="Twitter" />
                            <img class="img-reseau" src="/assets/img/icons/LinkedIn.svg" alt="LinkedIn" />
                            <img class="img-reseau" src="/assets/img/icons/Youtube.svg" alt="YouTube" />
                            <img class="img-reseau" src="/assets/img/icons/Instagram.svg" alt="Instagram" />
                            <img class="img-reseau" src="/assets/img/icons/GooglePlus.svg" alt="Google Plus" />
                            <img class="img-reseau" src="/assets/img/icons/Pinterest.svg" alt="Pinterest" />
                            <img class="img-reseau" src="/assets/img/icons/RSS.svg" alt="RSS" />
                        </div>
                        <div className="btn-footer">
                            <a onClick={() => handleClick('Home')}>Home</a>
                            <a onClick={() => handleClick('Invoices')}>Invoices</a>
                            <a onClick={() => handleClick('Companies')}>Companies</a>
                            <a onClick={() => handleClick('Contact')}>Contact</a>
                            <a onClick={() => handleClick('Privacy Policy')}>Privacy Policy</a>
                        </div>
                        
                    </div>
                </footer>
            );
        };

        ReactDOM.render(<Footer />, document.getElementById('root'));
    </script>

    <!-- Inclure React et ReactDOM -->
    <script src="https://unpkg.com/react/umd/react.production.min.js"></script>
    <script src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"></script>
    <!-- Babel pour le support JSX -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/6.26.0/babel.min.js"></script>
</body>
</html>


 
 <!-- <?php

// require_once __DIR__ . '/../index.php';
// ini_set('display_errors', 1);
// ini_set('display_startup_errors', 1);
// error_reporting(E_ALL);
?>--> 
<!--<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/assets/css/stylefooter.css"> 
    <link rel="stylesheet" href="/assets/css/darkmode.css">
    <script src="/public/assets/scripts/main.js" defer></script>
    <title>Document</title>
</head>

<body>

<div class="toggle-dark-mode" id="darkModeToggle">
    
        <img src="assets/img/icons/sun-moon.svg" alt="Light Mode" id="modeIcon">
    </div>
<script src="/assets/scripts/darkmode.js"></script>
<script src="/assets/scripts/footer.jsx"></script>
    <div id="root"></div>
    
</body>
<footer>
    <script>
        
    </script>

</footer>
</html>

 -->

