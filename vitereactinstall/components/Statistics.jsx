import React, { useState, useEffect } from "react";
//import axios from "axios";

    const Statistics = ({user}) => {
        const [invoicesCount, setInvoicesCount] = useState(0);
        const [contactsCount, setContactsCount] = useState(0);
        const [companiesCount, setCompaniesCount] = useState(0);

        useEffect(() => {
            const fetchData = async () => {
                try {
                  const [invoicesResponse, contactsResponse, companiesResponse] =
                    await Promise.all([
                      fetch(`http://cogipbecode.vulturi.ro/invoices/all`).then((response) => response.json()),
                      fetch(`http://cogipbecode.vulturi.ro/contacts/all`).then((response) => response.json()),
                      fetch(`http://cogipbecode.vulturi.ro/companies/all`).then((response) => response.json()),
                    ]);
    
                    setInvoicesCount(invoicesResponse.length);  
                    console.log(companiesResponse);
                    setContactsCount(contactsResponse.length);
                    setCompaniesCount(companiesResponse.params.length);
                } catch (error) {
                    console.error("Error fetching data:", error);
                }
            };
            fetchData();
        }, [user]);
        return (
            <div className="stats">
                <h3>Statistics</h3>
                <div className="stat-container">
                <div className="stat-item">{invoicesCount} invoices</div>
                <div className="stat-item">{contactsCount} contacts</div>
                <div className="stat-item">{companiesCount} companies</div>
            </div>
            </div>
           
        );
        
    };

    export default Statistics;
