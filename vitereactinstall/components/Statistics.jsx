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
                      fetch(`/api/invoices`).then((response) => response.json()),
                      fetch(`/api/contacts`).then((response) => response.json()),
                      fetch(`/api/companies`).then((response) => response.json()),
                    ]);
    
                    setInvoicesCount(invoicesResponse.data.length);  // Або використовуйте invoicesResponse.data.count, якщо відповіді надають кількість
                    setContactsCount(contactsResponse.data.length);
                    setCompaniesCount(companiesResponse.data.length);
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
