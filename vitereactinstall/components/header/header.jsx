import { useEffect, useState } from "react"
import style from "./style.module.css"

export const Header = () => {
    const [links, setLinks] = useState([{name:'Home', active:true}, {name:'Invoices', active:false}, {name:'Companies', active:false}, {name:'Contacts', active:false}]);

    const [isHomePage, setIsHomePage] = useState(true)

    useEffect(() => {
        const copyLinks = links.map((link) => {
            if (window.location.pathname.includes(link.name.toLowerCase())) {
                return {name:link.name, active:true};
            }
            return {name:link.name, active:false};
        });
        
        setLinks(copyLinks)

        if (window.location.pathname === "/" || window.location.pathname === "/home") {
            setIsHomePage(true);
        } else {
            setIsHomePage(false);
        }
    }, [window.location])

    return (
        <header className={style.outline}>
            {/* navbar here */}
            <nav>
                <h1>Cogip</h1>
                <menu>
                    {
                        links.map((link) => {
                            return (<li className={link.active ? style.active : null}> <a href={`${link.name.toLowerCase()}`}>{link.name}</a></li>)
                        })
                    }
                </menu>

                <div>
                <button>Sign Up</button>
                <button>Log In</button>
                </div>
            </nav>

            {/* hero goes here */}
            {isHomePage && <div className={style.hero}>
                <p>MANAGE YOUR CUSTOMERS AND INVOICES EASILY</p>
                <img src="/home_header.png" alt="" />
            </div>}

            {/* shape goes here */}

            <svg width="1299" height="112" viewBox="0 0 1299 112" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 39.3514H649.5L1046 0L1299 112H0V39.3514Z" fill="white"/>
            </svg>
            
        </header>
    )
}