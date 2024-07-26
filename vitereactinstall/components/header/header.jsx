import { useEffect, useState } from "react"
import classNames from "classnames"
import style from "./style.module.css"
import { LoginPopover } from "./loginpopover/loginpopover"

export const Header = () => {
    const [links, setLinks] = useState([{name:'Home', active:true}, {name:'Invoices', active:false}, {name:'Companies', active:false}, {name:'Contacts', active:false}]);

    const [isHomePage, setIsHomePage] = useState(true)

    useEffect(() => {
        const copyLinks = links.map((link) => {
            if (link.name === 'Home' && (window.location.pathname === "/" || window.location.pathname === "")) {
                return {name:link.name, active:true};
            }
            if (window.location.pathname.includes(link.name.toLowerCase())) {
                return {name:link.name, active:true};
            }
            return {name:link.name, active:false};
        });
        
        setLinks(copyLinks);

        if (window.location.pathname === "/" || window.location.pathname === "/home" || window.location.pathname === "") {
            setIsHomePage(true);
        } else {
            setIsHomePage(false);
        }
    }, [window.location])

    const loginPopover = document.getElementById("loginPopover");

    document.addEventListener("keydown", (event) => {
        if (event.key === "h") {
            popover.showPopover();
        }
    });

    return (
        <header className={style.publicHeader}>
            {/* navbar here */}
            <nav className={classNames(!isHomePage?style.extraPadding:null)}>
                <h1>Cogip</h1>
                <menu>
                    {
                        links.map((link) => {
                            return (<li key={link.name} className={link.active ? style.active : null}> <a href={`${link.name.toLowerCase()}`}>{link.name}</a></li>)
                        })
                    }
                </menu>

                <div>
                    {/* <button>Sign Up</button>  */}
                    {/* redirection */}
                    
                    <LoginPopover />
                {/* popover */}
                </div>
            </nav>

            {/* hero goes here */}
            {isHomePage && <div className={style.hero}>
                <p className={style.manage}>MANAGE YOUR CUSTOMERS AND INVOICES EASILY</p>
                <img className={style.heroImg} src="/home_header.png" alt="" />
            </div>}

            {/* shape goes here */}

            <svg width="1299" height="112" viewBox="0 0 1299 112" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 39.3514H649.5L1046 0L1299 112H0V39.3514Z" fill="white"/>
            </svg>
            
        </header>
    )
}