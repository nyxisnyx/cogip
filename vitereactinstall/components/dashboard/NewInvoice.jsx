import React, { useState, useEffect } from "react";
import DashboardHeader from "./DashboardHeader";

const NewInvoice = () => {
    const [inputs, setInputs] = useState({});
    const [companies, setCompanies] = useState([]);

    useEffect(() => {
        const fetchCompanies = async () => {
            try {
                const response = await fetch('/api/companies/form');
                if (response.ok) {
                    const data = await response.json();
                    setCompanies(data.datas);
                } else {
                    console.error('Failed to fetch companies');
                }
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchCompanies();
    }, []);


    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        setInputs(values => ({ ...values, [name]: value }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('/api/admin/api/invoice/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(inputs)
            });

            if (response.ok) {
                alert('Invoice added successfully');
            } else {
                alert('Failed to add invoice');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred while adding the invoice');
        }
    };

    return (
        <div className="dashboard-main-container">
            <DashboardHeader />
            <form className="newElement" onSubmit={handleSubmit}>
                <h3>New Invoice</h3>
                <input
                    type="text"
                    placeholder="Reference"
                    name="reference"
                    value={inputs.reference || ""}
                    onChange={handleChange}
                />
                <input
                    type="number"
                    placeholder="Price"
                    name="price"
                    value={inputs.price || ""}
                    onChange={handleChange}
                />
                <select
                    name="company_id"
                    value={inputs.company_id || ""}
                    onChange={handleChange}
                >
                    <option value="">Select Company</option>
                    {companies.map((company) => (
                        <option key={company.company_id} value={company.company_id}>
                            {company.name}
                        </option>
                    ))}
                </select>
                <button type="submit">Save</button>
            </form>
        </div>
    );
};

export default NewInvoice;
