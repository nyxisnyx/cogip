import React from 'react';
import 'assets/scss/styles.css'; // Assurez-vous que le chemin est correct

const Body = () => {
    const handleClick = (buttonName) => {
        alert(`${buttonName} was clicked!`);
    };

    return (
        <div> {/* Utilisez <div> au lieu de <body> */}
            <img className="home_footer" src="/assets/img/home_footer.png" alt="home footer" />
            <img className="home_lamp" src="/assets/img/home_lamp.png" alt="home lamp" />
            <img className="show-company" src="/assets/img/show-company.png" alt="show company" />
            <div>
                <h2>Last invoices</h2>
                {/* contenu sql */}
                <h2>Last contacts</h2>
                {/* contenu sql */}
                <h2>Last companies</h2>
                {/* contenu sql */}
            </div>
        </div>
        

    );
};

export default Body;
