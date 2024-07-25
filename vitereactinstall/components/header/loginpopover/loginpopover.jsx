import { useState } from "react";
import style from "./style.module.css"

export const LoginPopover = () => {
    const [displayError, setDisplayError] = useState(false);
    // Create handle submit function
    const handleSubmit = async (e) => {
        e.preventDefault();
        setDisplayError(false);
        console.log('checking')
        // console.log('test', e, e.target[0].value, e.target[1].value);
        const body = {
            "user" : e.target[0].value,
            "password" : e.target[1].value
        };
        try {
            const response = await fetch('http://becodecogip.rbarkersw.com/login', {method:'POST', body:JSON.stringify(body)});
            const actualResponse = await response.json();
            if (actualResponse.status === 401) {
                setDisplayError(true)
            } else if (actualResponse.status === 201) {
                console.log("Authorized");
                // Navigation goes here => window.location.href = 'url goes here'
                
                // console.log(actualResponse);
                const data = {loggedInKey: actualResponse.key, loggedInMessage: actualResponse.message, loggedInFirstName: actualResponse.first_name, loggedInLastName: actualResponse.last_name, loggedInPermission: actualResponse.permission};
                const stringData = JSON.stringify(data);
                sessionStorage.setItem("sessionStorage", stringData);
                

                // When I need the data, I'm gonna get a string, to turn it back into JSON it's JSON.parse(value)
            };
        } catch (error) {
            console.log(error);
        };
    };

    return (
        <>
            <button popovertarget="loginPopover">Log In</button>
            <div popover="auto" id="loginPopover" className={style.loginPopover}>
                    
                <h3>Log In</h3>
                {displayError && <p className={style.messageUnauthorized}>Login Unsuccessful. You're not an authorized user.</p>}
                <form onSubmit={(e) => handleSubmit(e)}>
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" autoComplete="on" name="username"></input>

                    <label htmlFor="password">Password:</label>
                    <input id="password" type="password" autoComplete="on" name="password"></input>

                    <button className={style.submitLog} type="submit">Login</button>
                </form>
            </div>
        </>
    )
}