import React, { useState } from "react";
import DashboardHeader from "./DashboardHeader";

const NewInvoice = () => {
    const [inputs, setInputs] = useState({});

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
                <input
                    type="text"
                    placeholder="Company name"
                    name="name"
                    value={inputs.name || ""}
                    onChange={handleChange}
                />
                <button type="submit">Save</button>
            </form>
        </div>
    );
};

export default NewInvoice;
