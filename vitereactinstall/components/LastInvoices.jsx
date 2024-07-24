import React, { useState, useEffect } from "react";


const LastInvoices = ({ user }) => {
    const [invoices, setInvoices] = useState([]);

    useEffect(() => {
        const fetchInvoices = async () => {
            try {
                const apiKey = "api";
                const response = await fetch(`http://becodecogip.rbarkersw.com/admin/${apiKey}/all/5`); 
                if (!response.ok) {
                  throw new Error("Network response was not ok");
                }
                const data = await response.json();
                setInvoices(data.Invoices);

                console.log(data);
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
                        <tr key={invoice.invoice_id}>
                            <td>{invoice.invoice_id}</td>
                            <td>{invoice.created_at}</td>
                            <td>{invoice.company_name}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default LastInvoices;
