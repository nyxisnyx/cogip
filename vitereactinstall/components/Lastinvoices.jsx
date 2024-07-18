import React, { useState, useEffect } from "react";
//import axios from "axios";

const LastInvoices = ({ user }) => {
    const [invoices, setInvoices] = useState([]);

    useEffect(() => {
        const fetchInvoices = async () => {
            try {
                const response = await fetch(`/api/invoices`); 
                if (!response.ok) {
                  throw new Error("Network response was not ok");
                }
                const data = await response.json();
                setInvoices(data);
              } catch (error) {
                console.error("Error fetching invoices:", error);
              }
            };
        fetchInvoices();
    }, []);

    return (
        <div className="LastInvoices">
            <h3>Last Invoices</h3>
            <table>
                <thead>
                    <tr>
                        <th>Invoice number</th>
                        <th>Date</th>
                        <th>Company</th>
                    </tr>
                </thead>
                <tbody>
                    {invoices.map(invoice => (
                        <tr key={invoice.id}>
                            <td>{invoice.number}</td>
                            <td>{invoice.date}</td>
                            <td>{invoice.company}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default LastInvoices;
