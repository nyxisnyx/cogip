import React, { useState, useEffect } from 'react';
//import '../../public/assets/css/invoiceList.css';

const InvoiceList = () => {
    const [invoices, setInvoices] = useState([]);

    useEffect(() => {
        const fetchInvoices = async () => {
            try {
                const apiKey = "api";
                const response = await fetch(`http://becodecogip.rbarkersw.com/invoices/all`); 
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
        <div className="invoices">
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
                            <td>{invoice.name}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default InvoiceList;