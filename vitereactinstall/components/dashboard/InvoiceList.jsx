import React, { useState, useEffect } from 'react';

const InvoiceList = () => {
    const [invoices, setInvoices] = useState([]);

    useEffect(() => {
        const fetchInvoices = async () => {
            try {
                //const apiKey = "api";
                const response = await fetch(`http://becodecogip.rbarkersw.com/invoices/all`); 
                if (!response.ok) {
                  throw new Error("Network response was not ok");
                }
                const data = await response.json();
                setInvoices(data);

                console.log(data);
              } catch (error) {
                console.error("Error fetching invoices:", error);
              }
            };
        fetchInvoices();
    }, []);

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${day}/${month}/${year}`;
    };

    return (
        <div className="invoices">
            <h3>Invoices</h3>
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
                            <td>{formatDate(invoice.created_at)}</td>
                            <td>{invoice.company_name}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default InvoiceList;