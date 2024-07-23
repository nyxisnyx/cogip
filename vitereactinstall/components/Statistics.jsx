import React, { useState, useEffect } from "react";
// import { getApiUrl } from "../src/utils";

    const Statistics = ({user}) => {
        const [invoicesCount, setInvoicesCount] = useState(0);
        const [contactsCount, setContactsCount] = useState(0);
        const [companiesCount, setCompaniesCount] = useState(0);        

        useEffect(() => {
            // const apiUrl = getApiUrl();
            const apiUrl = "http://becodecogip.rbarkersw.com/";
            const fetchData = async () => {
                try {
                  const [invoicesResponse, contactsResponse, companiesResponse] =
                    await Promise.all([
                      fetch(`${apiUrl}invoices/all`).then((response) => response.json()),
                      fetch(`${apiUrl}contacts/all`).then((response) => response.json()),
                      fetch(`${apiUrl}companies/all`).then((response) => response.json()),
                    ]);

                    setInvoicesCount(invoicesResponse.length);  
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
